chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    var all_ifo = new Array();
    all_ifo[0]=localStorage.user;
    all_ifo[1]=localStorage.num;
    sendResponse(all_ifo);
});