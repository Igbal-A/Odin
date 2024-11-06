let container = document.querySelector(".container__map");

function createGrid () {
    for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 16; y++) {
            let block = document.createElement('div');
            block.setAttribute("class", "grid");
            container.append(block);
        }
    }
}

createGrid();

container.addEventListener("mouseover", function (event) {
    let target = event.target;
    let checkColor = target.style.background;

    if ((checkColor == "null" || checkColor == "") && target.className == "grid") {
        target.style.background = "yellow";
        target.style.opacity = 0.2;  
        return 
    }

    if (event.target.style.background == "yellow") {
        let op = Number(event.target.style.opacity);
        op += 0.2;
        target.style.opacity = op;
    } 

    console.log(event);
});

/* container.onmouseout = function(event) {
    let target = event.target;
    target.style.background = 'aqua';
} */
