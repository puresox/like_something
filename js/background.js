chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    var all_ifo = new Array();
    all_ifo[0]=localStorage.mode;
    all_ifo[1]=localStorage.user;
    all_ifo[2]=localStorage.like_mode;
    sendResponse(all_ifo);
});