console.log('im here too as background')

chrome.browserAction.onClicked.addListener(clickedBtn)


function clickedBtn(tab){
    let msg = {
        txt : "hellow"
    }
    chrome.tabs.sendMessage(tab.id, msg)
}