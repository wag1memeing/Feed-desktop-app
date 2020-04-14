const {remote} = require("electron")

function Exit(){
    let currentWindow = remote.getCurrentWindow();
    currentWindow.close();
}