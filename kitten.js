console.log('im the kittens')

let filenames = [
    "destiny-wiens-oHm8scWafA0-unsplash.jpg",
    "kevin-wiegand-l8Q2nK1La_Y-unsplash.jpg",
    "the-lucky-neko-wxobdzVMzpQ-unsplash.jpg"
];
let imgs = document.getElementsByTagName('img');


for (imgElt of imgs){
    let r = Math.floor(Math.random() * filenames.length);
    let file = "kittens/" + filenames[r];
    let url = chrome.extension.getURL(file);
    imgElt.src =  url;

}
