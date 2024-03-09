let gridContainer = document.querySelector(".grid-container");
if(gridContainer)
{
    alert("Hey I exit")
}
function makeGrid(n)
{
    let wnh = 1000.0/n;
    for(let i=0; i<n*n; i++)
    {
        let gridBox = document.createElement('div');
        gridBox.classList.add("grid-box");
        gridBox.style.height = wnh+"px";
        gridBox.style.width = wnh+"px";
        gridBox.style.backgroundColor = "#918171";
        gridContainer.appendChild(gridBox);
    }
}
window.onload = ()=>makeGrid(16);