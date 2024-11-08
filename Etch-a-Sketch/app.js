function startToDraw () {  
    let haveGrid = false;
    let saveColor;

    document.querySelector("#btn").addEventListener("click", function () {
        let container = document.querySelector(".container__map");
        let rows = document.querySelector("#rows").value;
        let colomns = document.querySelector("#colomns").value;
        let size = document.querySelector("#size").value;
        let inputColorValue = document.querySelector("#color").value;
        saveColor = inputColorValue;

            function createGrid (rows, colomns, size, havegrid) {
                if (havegrid) {
                    removeGrid();
                }

                if (rows < 100 && colomns < 100) {
                    for (let x = 0; x < rows; x++) {
                        for (let y = 0; y < colomns; y++) {
                            let block = document.createElement('div');
                            block.setAttribute("class", "grid");
                            block.style.width = size + "px";
                            block.style.height = size + "px";
                            container.append(block);
                        }
                    }
                    container.style.width = ((rows * size) + (rows * 2)) + "px";
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
                    let target = event.target;
                    let checkColor = target.style.background;
                
                    if ((checkColor == "null" || checkColor == "") && target.className == "grid") {
                        target.style.background = saveColor;
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

            createGrid(rows, colomns, size, haveGrid);
            changeColor();
    });
}

startToDraw();

