var s = document.createElement('script');

s.src = chrome.runtime.getURL('anilist/script.js');
s.onload = function() {
    this.remove();
};
document.onload(() => (document.head || document.documentElement).appendChild(s))