/*alert();*/

var contextMenu = ["selection", "link", "image", "page"];

for(var i=0; i<contextMenu.length; i++)
{
    var selected_context = contextMenu[i];
    chrome.contextMenus.create({
        title: "share "+ contextMenu[i] +" to twitter",
        contexts: [contextMenu[i]],
        onclick: myFunc,
        id: selected_context
    });

}

function myFunc(selected) {
    // alert(selected.selectionText);
    //alert("you want to share it !!")

    switch(selected.menuItemId)
    {
        case 'selection':
            chrome.tabs.create({
                url:"https://twitter.com/intent/tweet?text="+selected.selectionText
            });
            break;
        case 'link':
            chrome.tabs.create({
                url:"https://twitter.com/intent/tweet?url="+selected.linkUrl
            });
            break;
        case 'image':
            chrome.tabs.create({
                url:"https://twitter.com/intent/tweet?url="+selected.srcUrl
            });
            break;
        case 'page':
            chrome.tabs.create({
                url:"https://twitter.com/intent/tweet?text="+selected.selectionText
            });
            break;

    }
   /* chrome.tabs.create({
        url:"https://twitter.com/intent/tweet?text="+selected.selectionText
    })*/
}