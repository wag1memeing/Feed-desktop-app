const {remote, BrowserWindow} = require("electron")
const path = require("path");

function Exit(){
    let currentWindow = remote.getCurrentWindow();
    currentWindow.close();
}

function Minimize(){
    let currentWindow = remote.getCurrentWindow();
    currentWindow.minimize();
}

function Settings(){
    const settingsPage = new remote.BrowserWindow({
        width: 396,
        height: 331,
        frame: false,
        resizable: false,
        webPreferences: {
        nodeIntegration: true
        },
    });
    
    // and load the index.html of the app.
    settingsPage.loadFile(path.join(__dirname, 'settings.html'));
    
    // Hide the menu bar
    settingsPage.setMenu(null);

    settingsPage.webContents.openDevTools();
}

function Confirm(){
    const confirmPage = new remote.BrowserWindow({
        width: 185,
        height: 141,
        frame: false,
        resizable: false,
        webPreferences: {
        nodeIntegration: true
        },
    });
    
    // and load the index.html of the app.
    confirmPage.loadFile(path.join(__dirname, 'confirm.html'));
    
    // Hide the menu bar
    confirmPage.setMenu(null);
}