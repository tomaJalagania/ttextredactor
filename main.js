const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const menuItem = require("./src/menuitem");
let win;

function createWindo() {
  win = new BrowserWindow({
    width: 1024,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadFile(path.resolve(__dirname, "GUI/index.html"));
}

app.on("ready", () => {
  const menu = Menu.buildFromTemplate(menuItem);
  Menu.setApplicationMenu(menu);
  createWindo();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
