console.log("Remove Shorts content script loaded!");

const underVideoShortsElement = 'ytd-reel-shelf-renderer';
const homeScreenAnnoyancesElement = 'ytd-rich-section-renderer';

const observer = new MutationObserver(() => {
    const shortsOnHomePage = document.querySelector(homeScreenAnnoyancesElement);
    const shortsUnderVideo = document.querySelector(underVideoShortsElement);
    if (shortsOnHomePage) {
        shortsOnHomePage.remove();
    }
    if (shortsUnderVideo) {
        shortsUnderVideo.remove();
    }
});
observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});
