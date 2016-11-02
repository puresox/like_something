chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    var all_ifo = new Array();
    all_ifo[0]=localStorage.mode;		//点赞模式
    all_ifo[1]=localStorage.user;		//Q号
    all_ifo[2]=localStorage.like_mode;		//点赞与否
    sendResponse(all_ifo);
});