console.log("Running");
download("https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/fingerrafting_pho_2017318_lrg.jpg");

function download(imgurl){
    chrome.downloads.download({url:imgurl}, function(downloadId){
        console.log("Download has begun. Download ID is"+downloadId);
    });
}