function getActiveUrl(){
    chrome.tabs.getCurrent(function(tab){
        var url = tab.url;
    });
}

function getAllImageAddresses(dom){
    var images = dom.images;
    for(var i = 0; i < images.length; i++){
        try{
        download(images[i].src);
        }
        catch(err){
            console.log(err.message);
        }
    }
}

function download(imgurl){
    chrome.downloads.download({url:imgurl}, function(downloadId){
        console.log("Download has begun. Download ID is"+downloadId);
    });
}

$(document).ready(function(){
    $("#scraper").click(function(event){
        //Initial
        // chrome.downloads.setShelfEnabled(false);
        // console.log("Download shelf disabled");

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            
            chrome.tabs.sendMessage(tabs[0].id, {action: "getPage"}, function(response) {

                var importedCode = response.searchResults;
                var fakeHtml = document.createElement( 'html' );
                fakeHtml.innerHTML = importedCode; // recieved String becomes html

                getAllImageAddresses(fakeHtml);

            });
        });
    
        //Finish up
        // chrome.downloads.setShelfEnabled(true);
        // console.log("Download shelf enabled");
    });
});

