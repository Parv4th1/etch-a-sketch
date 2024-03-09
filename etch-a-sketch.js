let gridContainer = document.querySelector(".grid-container");
let sqBtn = document.querySelector(".squares");
sqBtn.addEventListener("click",getNumberOfSquares);
function makeGrid(n)
{
    let wnh = 1000.0/n;
    for(let i=0; i<n*n; i++)
    {
        let gridBox = document.createElement('div');
        gridBox.classList.add("grid-box");
        gridBox.style.height = wnh+"px";
        gridBox.style.width = wnh+"px";
        gridBox.addEventListener("mouseenter", ()=>changeColor(gridBox));
        gridContainer.appendChild(gridBox);
    }
}
window.onload = ()=>makeGrid(16);
function changeColor(gb)
{
    let randomCol="";
    for(let i=0; i<6; i++)
    {
        let randomNum = Math.floor(Math.random()*10);
        randomCol+=randomNum;
    }
    randomCol = "#"+randomCol;
    gb.style.backgroundColor = randomCol;
}
function getNumberOfSquares()
{
    n = parseInt(prompt("Enter number of squares on a side: "));
    deleteGridContainerContents();
    makeGrid(n);
}
function deleteGridContainerContents()
{
    let child = gridContainer.lastElementChild;
    while(child!=null)
    {
        gridContainer.removeChild(child);
        child = gridContainer.lastElementChild;
    }
}