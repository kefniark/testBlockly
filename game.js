function InitGame() {
    let container = document.getElementById('gameContainer');
    var positionInfo = container.getBoundingClientRect();
    var height = positionInfo.height;
    var width = positionInfo.width;

    console.log(positionInfo, width, height);

    let app = new PIXI.Application({width: width, height: height});   
    container.appendChild(app.view);

    window.app = app;
}

function reloadGame() {
    if (window.container) {
        window.container.destroy(true);
        window.container = null;
    }
    let container = new PIXI.Container();
    window.app.stage.addChild(container);

    window.container = container;
}