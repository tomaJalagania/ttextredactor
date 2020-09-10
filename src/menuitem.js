const { nativeImage, app } = require("electron");
const path = require("path");

let menuItme = [
  {
    label: "File",
    submenu: [
      {
        label: "New",
        accelerator: "ctrl+N",
        icon: nativeImage.createFromPath(
          path.resolve(__dirname, "icons/new.png")
        ),
        click: function (e, bw, wc) {},
      },
      {
        label: "New Window",
        accelerator: "ctrl+Shift+N",
        icon: nativeImage.createFromPath(
          path.resolve(__dirname, "icons/newWindow.png")
        ),
        click: function (e, bw, wc) {},
      },
      {
        label: "Open",
        accelerator: "ctrl+0",
        icon: nativeImage.createFromPath(
          path.resolve(__dirname, "icons/open.png")
        ),
        click: function (e, bw, wc) {},
      },
      {
        type: "separator",
      },
      {
        label: "Save",
        accelerator: "ctrl+S",
        icon: nativeImage.createFromPath(
          path.resolve(__dirname, "icons/open.png")
        ),
        click: function (e, bw, wc) {},
      },
      {
        label: "Save As...",
        accelerator: "ctrl+Shift+S",
        icon: nativeImage.createFromPath(
          path.resolve(__dirname, "icons/open.png")
        ),
        click: function (e, bw, wc) {},
      },
      {
        type: "separator",
      },
      {
        label: "Print",
        accelerator: "ctrl+P",
        click: function (e, bw, wc) {},
      },
      {
        type: "separator",
      },
      {
        label: "Exit",
        click: function () {
          app.quit();
        },
      },
    ],
  },
];
module.exports = menuItme;
