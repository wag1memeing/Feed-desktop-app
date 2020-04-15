const {remote} = require("electron")

function Exit(){
    let currentWindow = remote.getCurrentWindow();
    currentWindow.close();
}

function Minimize(){
    let currentWindow = remote.getCurrentWindow();
    currentWindow.minimize();
}