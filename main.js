// @ts-check
const { app, BrowserWindow } = require("electron")

let mainWindow = null

app.on("window-all-closed", function () {
    app.quit()
})

app.on("ready", function () {
    mainWindow = new BrowserWindow({
        title: "Time Zone Converter",
        width: 450,
        height: 600,
        minWidth: 420,
        maxWidth: 520,
        minHeight: 302,
        icon: "./logo.png",
        webPreferences: {
            nodeIntegration: false,
        }
    })

    mainWindow.setMenu(null)

    mainWindow.loadURL(`file://${__dirname}/index.html`)

    mainWindow.on("closed", () => {
        mainWindow = null
    })

})
