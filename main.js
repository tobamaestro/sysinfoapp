const{app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow() {
    win = new BrowserWindow({width:800, height:600, icon:__dirname + '/img/electronlogo.png'});

    //  Load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    //  Hook on the closing event
    win.on('closed', () => {
        win = null;
    });

    win.webContents.openDevTools();   //  Open devtools
}

app.on('ready', createWindow);  //  Pass createWindow as a reference, not a function call

//  Quit when all windows closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})