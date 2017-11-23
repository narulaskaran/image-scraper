function download(imgurl){
    chrome.downloads.download({url:imgurl}, function(downloadId){
        console.log("Download has begun. Download ID is"+downloadId);
    });
}

$(document).ready(function(){
    $("#instagram").click(function(event){
        //Initial
        chrome.downloads.setShelfEnabled(false);
        console.log("Download shelf disabled");
    
        //Finish up
        chrome.downloads.setShelfEnabled(true);
        console.log("Download shelf enabled");
    });
});