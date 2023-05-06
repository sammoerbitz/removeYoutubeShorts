console.log("Remove Shorts content script loaded!");

// Globals because I am good at code
const underVideoShortsElement = 'ytd-reel-shelf-renderer';
const homeScreenAnnoyancesElement = 'ytd-rich-section-renderer';
console.log("here");

// window.addEventListener('load', () => {
//   removeShorts();
// });

// This function will remove all youtube shorts from the home screen and under videos. It will also remove promotional content (such as movies for purchase/rent)
// function removeShorts() {
//   console.log("removing shorts")
//   let shortsOnHomePage;
//   while(shortsOnHomePage = document.querySelector(homeScreenAnnoyancesElement)){
//     shortsOnHomePage.remove();
//   }

//   let shortsUnderVideo;
//   while(shortsUnderVideo = document.querySelector(underVideoShortsElement)){
//     shortsUnderVideo.remove();
//   }
// }

const observer = new MutationObserver(() => {
  console.log("observing");
  const shortsOnHomePage = document.querySelector(homeScreenAnnoyancesElement);
  const shortsUnderVideo = document.querySelector(underVideoShortsElement)
  if (shortsOnHomePage) {
    shortsOnHomePage.remove();
  }
  
  if(shortsUnderVideo){
    shortsUnderVideo.remove();
  }
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});


console.log("fin");