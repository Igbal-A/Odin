/* let container = document.querySelector(".container__map");
let button = document.querySelector("#btn");
let inputColorValue = document.querySelector("#color").value; */


/* function createGrid () {
    for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 16; y++) {
            let block = document.createElement('div');
            block.setAttribute("class", "grid");
            container.append(block);
        }
    }
} */


/* container.addEventListener("mouseover", function (event) {
    let target = event.target;
    let checkColor = target.style.background;

    if ((checkColor == "null" || checkColor == "") && target.className == "grid") {
        target.style.background = inputColor;
        colorGrid = target.style.background
        target.style.opacity = 0.2;  
        return 
    }

    if (event.target.style.background == colorGrid) {
        let op = Number(event.target.style.opacity);
        op += 0.2;
        target.style.opacity = op;
    } 

    console.log(event);
}); */

/* function changeColor (color) {
    let catchColorGrid;
    container.addEventListener("mouseover", function (event) {
        let target = event.target;
        let checkColor = target.style.background;
    
        if ((checkColor == "null" || checkColor == "") && target.className == "grid") {
            console.log(inputColorValue)
            target.style.background = inputColorValue;
            catchColorGrid = target.style.background
            target.style.opacity = 0.2;  
            return 
        }
    
        if (event.target.style.background == catchColorGrid) {
            let op = Number(event.target.style.opacity);
            op += 0.2;
            target.style.opacity = op;
        } 
    
        console.log(event);
    });
} */



function startToDraw () {  
    let haveGrid = false;
    document.querySelector("#btn").addEventListener("click", function () {
        let container = document.querySelector(".container__map");
        let rows = document.querySelector("#rows").value;
        let colomns = document.querySelector("#colomns").value;
        let inputColorValue = document.querySelector("#color").value;

            function createGrid (rows, colomns) {
                if (rows < 100 && colomns < 100) {
                    for (let x = 0; x < rows; x++) {
                        for (let y = 0; y < colomns; y++) {
                            let block = document.createElement('div');
                            block.setAttribute("class", "grid");
                            container.append(block);
                        }
                    }
                    haveGrid = true;
                    return
                }
                return alert("mistake, more less input colomns and rows ")
            }

            function removeGrid () {
                btnRemove = document.querySelector("#btn__remove");
                btnRemove.addEventListener("click", function () {
                    mapDiv = document.querySelectorAll(".grid");
                    mapDiv.forEach(element => {
                        element.remove()
                    });
                })
            }

            function changeColor (color) {
                let catchColorGrid;
                container.addEventListener("mouseover", function (event) {
                    let target = event.target;
                    let checkColor = target.style.background;
                
                    if ((checkColor == "null" || checkColor == "") && target.className == "grid") {
                        target.style.background = color;
                        catchColorGrid = target.style.background
                        target.style.opacity = 0.2;  
                        return 
                    }
                
                    if (event.target.style.background == catchColorGrid) {
                        let op = Number(event.target.style.opacity);
                        op += 0.2;
                        target.style.opacity = op;
                    } 

                });
            }

        changeColor(inputColorValue);
        createGrid(rows, colomns);
    });
}

startToDraw();

/* container.onmouseout = function(event) {
    let target = event.target;
    target.style.background = 'aqua';
} */
