let container = document.querySelector(".container__map");
let blockDiv = document.querySelector(".map");

function createMap () {
    for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 16; y++) {
            let block = document.createElement('div');
            block.setAttribute("class", "map");
            container.append(block);
        }
    }
}

createMap();

container.onmouseover = function (event) {
    let target = event.target;
    target.style.background = "red";
};  

container.onmouseout = function(event) {
    let target = event.target;
    target.style.background = 'aqua';
}
