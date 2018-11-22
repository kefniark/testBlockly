function InitGame() {
    let container = document.getElementById('gameContainer');
    var positionInfo = container.getBoundingClientRect();
    var height = positionInfo.height;
    var width = positionInfo.width;

    console.log(positionInfo, width, height);

    let app = new PIXI.Application({width: width, height: height});    
    container.appendChild(app.view);
}