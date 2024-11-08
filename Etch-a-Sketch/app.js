


function startToDraw () {  
    let haveGrid = false;
    document.querySelector("#btn").addEventListener("click", function () {
        let container = document.querySelector(".container__map");
        let rows = document.querySelector("#rows").value;
        let colomns = document.querySelector("#colomns").value;
        /* let inputColorValue = document.querySelector("#color").value; */

            function createGrid (rows, colomns, havegrid) {
                if (havegrid) {
                    removeGrid();
                }

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
                return alert("Введите число строки и столбцов меньше 100")
            }

            function removeGrid () {
                mapDiv = document.querySelectorAll(".grid");
                mapDiv.forEach(element => {
                    element.remove()
                });
            }

            function changeColor () {
                let catchColorGrid;
                container.addEventListener("mouseover", function (event) {
                    let inputColorValue = document.querySelector("#color").value;
                    let target = event.target;
                    let checkColor = target.style.background;
                
                    if ((checkColor == "null" || checkColor == "") && target.className == "grid") {
                        target.style.background = inputColorValue;
                        catchColorGrid = target.style.background;
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

            function changeSize () {

            }

            createGrid(rows, colomns, haveGrid);
            changeColor();
    });
}

startToDraw();

