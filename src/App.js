import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import "./style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/fontawesome-min.css";
import "./css/sc-spacing.css";
import "./css/swiper.css";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #0ac18e;
  padding: 10px;
  font-weight: bold;
  color: var(--secondary-text);
  width: 100px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: #0ac18e;
  background-color: var(--accent);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;

export const StyledLink = styled.a`
  color: #0ac18e;
  text-decoration: none;
`;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your Goblin.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit OASIS to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 25) {
      newMintAmount = 25;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <s.Screen>
      <s.Container
        flex={1}
        ai={"center"}
        style={{ padding: 24 }}
      >
        <section class="loder_first">
          <div class="circlar-spinner"></div>
        </section>
        <div class="bithu_header" id="navbar">
          <div class="container">
            <div class="bithu_menu_sect">
              <div class="bithu_menu_left_sect">
                <div class="logo"><a href="#"><img src="assets/images/logo.png" alt="logo" /></a></div>
              </div>
              <div class="bithu_menu_right_sect bithu_v1_menu_right_sect"
                style={{ display: "flex", justifyContent: "flex-end"}}>
                <div class="bithu_menu_right_buttons">
                  {/**<button class="connect_btn hov_shape_show address">
                  <p id="adresses">Stake</p>
  </button>**/}
                  
                  <button class="menu_bar">
                    <i class="fa-solid fa-bars"></i>
                  </button> 
                  <button
                    class="connect_btn hov_shape_show address" onClick={(e) => {
                      e.preventDefault();
                      dispatch(connect());
                      getData();
                    }}
                    >
                    <p id="addresses">CONNECT</p><span class="hov_shape1"><img
                      src="assets/images/icon/hov_shape_s.svg" alt="" /></span><span
                        class="hov_shape2"><img src="assets/images/icon/hov_shape_s.svg" alt="" /></span><span
                          class="square_hov_shape"></span>
                  </button>
                  
                </div>
              </div> 
            </div>
            
            
          </div>
        </div>
        <div class="bithu_v3_baner_sect" id="home">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="banner-image-area3"><span class="shape_1 rotated-style"><img
                  src="assets/images/banner/shape1.png" alt="" /></span>
                  <span
                    class="shape_2 rotated-style">
                      <img className="img-fluid" src="assets/images/banner/shape2.png" alt="" /></span>
                      <span
                      class="shape_3 rotated-style"><img src="assets/images/banner/shape3.png" alt="" /></span><img
                    class="banner-image banner-image1" src="assets/images/banner/item1.png" alt="image" /> </div>
              </div>
              <div class="col-lg-6">
                <div class="banner-conent3">
                  <h1 class="banner-title">Goblins on <span class="red-color">Doge!</span></h1>
                  <h1 className="banner-title"> {data.totalSupply} {""} / <span className="red-color"> {CONFIG.MAX_SUPPLY} </span></h1>
                  <h1 class="banner-title uppercase"><span class="red-color"
                    style={{color: '#00ffa3'}}>35 </span> DOGE Mint </h1>

                  <h4 class="banner-subtitle uppercase">Supply <span style={{color: '#00ffa3'}}>9999</span></h4>
                  <div class="bithu_v3_timer">
                    <h5 class="uppercase">Mint is live!</h5>
                  </div>
                  {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                    <>
                    <h1>Mint Sale has ended!!</h1>
                    </>
                  ) : (
                  <div class="banner-count-inner d-flex align-items-center">
                    <div class="banner-btn-area">
                      <span class="input-number-decrement"
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }} >–</span>
                      <input class="input-number" value={mintAmount} id="numBuy" /> 
                      
                      <span
                        class="input-number-increment"  disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }} id="i">+</span></div>
                    <div class="bithu_v3_baner_buttons"><button 
                    onClick={(e) => {
                          e.preventDefault();
                          claimNFTs();
                          getData();
                        }} class="mint_btn hov_shape_show"
                      id="mintNow">{claimingNft ? "MINTING" : "MINT"} <span class="hov_shape1"><img
                        src="assets/images/icon/hov_shape_L_dark.svg" alt="" /></span><span
                          class="hov_shape2"><img src="assets/images/icon/hov_shape_L_dark.svg"
                            alt="" /></span><span class="square_hov_shape_dark"></span></button></div>
                  </div>
                  )}
                  <div class="banner-bottom-text uppercase">
                      Public Mint <span style={{color: '#00ffa3'}}>{CONFIG.DISPLAY_COST}{" "}
                  </span>
                  {CONFIG.NETWORK.SYMBOL} <br />Max <span style={{color:'#00ffa3'}}>25</span> NFTs Per Wallet Progress <span
                      style={{color:'#ff004c'}} id="mint_count"></span> {data.totalSupply} / {CONFIG.MAX_SUPPLY} <br /></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
        <div class="bithu_v1_main_footer bithu-footer">
          <div class="footer_bottom footer-main">
            <div class="footer_bottom_content"><span class="footer_shapes_left"><img
              src="assets/images/icon/footer_shapes_left.png" alt="" /></span><span
                class="footer_shapes_right"><img src="assets/images/icon/footer_shapes_right.png" alt="" /></span>
              <div class="container">
                <div class="footer_menu">
                  <div class="bottom_footer_left">
                    <div class="copiright_text"><a href="#"> ©2022 Goblins on Doge, All rights reserved.</a>
                    </div>
                  </div>
                  <div class="bottom_footer_right">
                    <ul>
                      <li><a href={CONFIG.MARKETPLACE_LINK}><img
                        src="https://oasis-nft.dog/assets/images/oasis_logo.svg" alt="" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </s.Container>
    </s.Screen>
  );
}

export default App;