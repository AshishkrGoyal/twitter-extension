/*alert();*/
chrome.contextMenus.create({
    title: "share it to twitter",
    contexts: ["selection"],
    onclick: myFunc
});

function myFunc(selected) {
    // alert(selected.selectionText);
    //alert("you want to share it !!")
    chrome.tabs.create({
        url:"https://twitter.com/intent/tweet?text="+selected.selectionText
    })
}