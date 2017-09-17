const electron = require('electron');
const { Tray, Menu, app } = electron;

class ConvTray extends Tray {
  constructor(iconPath, mainWindow) {
    super(iconPath);

    this.mainWindow = mainWindow;

    this.setToolTip('Manchister Converter App')
    this.on('click', this.onClick.bind(this));
    this.on('right-click', this.onRightClick.bind(this));
  }

  onClick(event) {
    /*/ Click event bounds
    const { x, y } = bounds;
    // Window height and width
    const { height, width } = this.mainWindow.getBounds();
*/
    if (this.mainWindow.isVisible()) {
      this.mainWindow.hide();
    } else {
 /*     const yPosition = process.platform === 'darwin' ? y : y - height;
      this.mainWindow.setBounds({
        x: x - width / 2,
        y: yPosition,
        height, // ES6 assignments
        width
      });	*/
      this.mainWindow.show();
    }
  }

  onRightClick() {
    const menuConfig = Menu.buildFromTemplate([
      {
        label: 'Quit',
        click: () => app.quit()
      }
    ]);

    this.popUpContextMenu(menuConfig);
  }

}

module.exports = ConvTray;
