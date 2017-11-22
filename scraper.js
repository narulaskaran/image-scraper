console.log("Running");
chrome.downloads.setShelfEnabled(false);
console.log("Download shelf disabled");

console.log("Download shelf enabled");

function getActiveUrl(){
    chrome.tabs.getCurrent(function(tab){
        var url = tab.url;
    });
}

function download(imgurl){
    chrome.downloads.download({url:imgurl}, function(downloadId){
        console.log("Download has begun. Download ID is"+downloadId);
    });
}