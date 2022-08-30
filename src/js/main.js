/** 
*
* -----------------------------------------------------------------------------
* Template : GamFi - Metaverse Web3 IGO/IDO Token Launchpad Figma Template
* Author : uigigs
* Author URI : http://www.uigigs.com/
*
* -----------------------------------------------------------------------------
*
**/
//window load
(function ($) {
  ("use strict");
$(window).on('load', function () {
    $(".loader_first").delay(500).fadeOut(300);
    $(".circular-spinner").on('click', function () {
        $(".loader_first").fadeOut(300);
    })
});

window.onscroll = function () {
    myFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
};


var web3;
async function Connect(){
	await window.web3.currentProvider.enable();
	web3=new Web3(window.web3.currentProvider);
};


$('#submenu').click(function () {
    $('#sub_menu_list').toggle();
});


// Counter Up
  var counter = $('.counter');
  if(counter.length) {  
      $('.counter').counterUp({
          delay: 20,
          time: 1500
      });
  };


$('.count').each(function () {
    $(this).prop('Counterr', 2024).animate({
        Counter: $(this).text()
    }, {
        duration: 420000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


(function() {
  window.inputNumber = function(el) {
    var min = el.attr('min') || false;
    var max = el.attr('max') || false;

    var els = {};

    els.dec = el.prev();
    els.inc = el.next();
    el.each(function() {
      init($(this));
    });

    function init(el) {

      els.dec.on('click', decrement);
      els.inc.on('click', increment);
      function decrement() {
        var value = el[0].value;
        value--;
        if(!min || value >= min) {
          el[0].value = value;
        }
      }

      function increment() {
        var value = el[0].value;
        value++;
        if(!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  }
})();
inputNumber($('.input-number'));


var swiper_slider = $('.swiper-autoplay-slider');
  if(swiper_slider.length) { 
    var swiper = new Swiper('.swiper-autoplay-slider', {
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1300: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        },
        autoplay: {
            delay: 0,
        }, 
        speed: 2000,
    });
    $(".swiper-autoplay-slider").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    })
}

var swiper_slider = $('.slickSlider');
  if(swiper_slider.length) { 
    var swiper = new Swiper('.slickSlider', {
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1300: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
        autoplay: {
            delay: 5000,
        }, 
        speed: 2000,
    });
}

//canvas menu
   var navexpander = $('.menu_bar');
   if(navexpander.length){
       $('.menu_bar, .mobile_menu_close_btn').on('click',function(e){
           e.preventDefault();
           $('body').toggleClass('nav-expanded');
       });
   }

})(jQuery);

var i = 0;
function buttonClick_Inc() {
    if(i<100)i++;
    document.getElementById('quantity').value = i;
};
function buttonClick_Dec() {
    if(i>1) i-- ;
    document.getElementById('quantity').value = i;
};

$(function () {
    $("#mint_menu_btn").click(function () {
        $("#mint_menu_btn").toggleClass("active");
        $(".mint_menu_section").toggleClass("active");
        $(".bithu_header").removeClass("active");
    });
});
$(function () {
    $("#mint_menu_btn").click(function () {
        $(".bithu_mint_header").removeClass("bithu_header");
    });
});


"use strict";
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const abi = [{"inputs":[{"internalType":"string","name":"_initUnRevealedURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintOneTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleConfig","outputs":[{"internalType":"bool","name":"revealed","type":"bool"},{"internalType":"uint32","name":"freeMintCount","type":"uint32"},{"internalType":"uint64","name":"publicSalePriceWei","type":"uint64"},{"internalType":"uint256","name":"saleStartingTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_saleStartingTime","type":"uint256"}],"name":"setStartingTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newUnRevealedURI","type":"string"}],"name":"setUnRevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unRevealedURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]
let web3Modal
var mint_count;

let provider;
const freeMintCount = 2000;
const provider_rpc = new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/84e02827a94446f38cb4b655cc275363")
const contractAddress = '0x281851c4dd77BAC877bac193fA987BF8D0b3cc95'
// Address of the selected account
let selectedAccount;

var connectedContract;
const eighteen = 10 ** 18;
var web3;
/**
 * Setup the orchestra
 */
function init() {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        // Mikko's test key - don't copy as your mileage may vary
        infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
      }
    }
  };

  web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
  });
  
  const web3_count = new Web3(provider_rpc);
  connectedContract = new web3_count.eth.Contract( abi,contractAddress);
}

async function onConnect() {

  provider = await web3Modal.connectTo("injected");
  web3 = new Web3(provider);
  const accounts = await web3.eth.getAccounts();
  // console.log(accounts[0])
  // Subscribe to accounts change
  let s = accounts[0].slice(0,4);
  let e = accounts[0].slice(-5,-1);
  document.getElementById('addresses').innerHTML = s + '...' + e;
}
async function onConnectWallet() {

  provider = await web3Modal.connectTo("walletconnect");
  web3 = new Web3(provider);
  const accounts = await web3.eth.getAccounts();
  let s = accounts[0].slice(0,4);
  let e = accounts[0].slice(-5,-1);
  document.getElementById('addresses').innerHTML = s + '...' + e;
}

/**
 * Disconnect wallet button pressed.
 */
async function onDisconnect() {
  console.log("disconnect")
  await web3Modal.clearCachedProvider();
  document.getElementById('addresses').innerHTML = "CONNECT";
}

async function getMintCount() {
    // mint_count = await connectedContract.methods.totalSupply().call();
    mint_count = 9999;
    // console.log(mint_count);
    document.querySelector("#mint_count").innerText = mint_count;
    let num = document.querySelector("#numBuy").value;
    num = Math.max(Number(num) + Number(mint_count) - freeMintCount,0);
    let p = Math.floor(0.003*num*1000)/1000;
    if(num==0)p='0.000'
    $("#cost").text(p);
}
/**
 * Main entry point.
 */
function setCost(){
  let num = document.querySelector("#numBuy").value;
  let over_free = Math.max(Number(num) + Number(mint_count) - freeMintCount,0);
  num = Math.min(num,over_free)
  // console.log(num)
  let p = Math.floor(0.005*num*1000)/1000;
  // console.log(p);
  if(num==0)p='0.000'
  return p;
}
async function mintNow(){
  alert("Sold Out!")
  return
  var timestamp = Date.parse(new Date())/1000;
  if(timestamp<1654362000){//1654362000
    alert("Mint not started.")
    return
  }
  var account;
  try {
    const accounts = await web3.eth.getAccounts();
    account = accounts[0];
  } catch(e) {
    document.querySelector("#addresses").click();
    const accounts = await web3.eth.getAccounts();
    account = accounts[0];
  }
  connectedContract = new web3.eth.Contract( abi,contractAddress);
  const num = Number(document.querySelector("#numBuy").value);
  const costWei = Number(setCost())*eighteen;
  await connectedContract.methods.mint(account,num).send({from:account,value:costWei});
  // console.log("waht")
}
window.addEventListener('load', async () => {
  init();
  setInterval("getMintCount()",1000);
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
  document.querySelector("#walletconnect").addEventListener("click", onConnectWallet);
  document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
  document.querySelector("#i").addEventListener("click", setCost);
  document.querySelector("#d").addEventListener("click", setCost);
  document.querySelector("#mintNow").addEventListener("click", mintNow);
});
