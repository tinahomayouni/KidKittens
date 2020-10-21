console.log('im the kittens')

chrome.runtime.onMessage.addListener(txtReciever);


function txtReciever(message , sender , sendResponse){

    console.log("message" , message.txt)

}