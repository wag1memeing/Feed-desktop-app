const {remote} = require("electron")
const path = require("path")

function Exit(){
    let currentWindow = remote.getCurrentWindow();
    currentWindow.close();
}

function Minimize(){
    let currentWindow = remote.getCurrentWindow();
    currentWindow.minimize();
}
