let container;
function drawGrid(myContainer,cols,rows,width,height){
myContainer=document.createElement("div");
myContainer.id="container";
for(let i=0;i<cols;i++){
    for(let j=0;j<rows;j++){
        let squareDiv=document.createElement("div");
        squareDiv.style.margin="0";
        squareDiv.style.padding="0";
        squareDiv.style.width=`${width}px`;
        squareDiv.style.height=`${height}px`;
        squareDiv.style.border="solid 1px black";
        squareDiv.addEventListener("mouseover",function(){
            squareDiv.style.backgroundColor="black";
            squareDiv.style.border="solid 1px white";
        });
        myContainer.appendChild(squareDiv);
    }
}
document.body.appendChild(myContainer);
return myContainer;
}
function deleteGrid(myContainer){
    myContainer.parentElement.removeChild(myContainer);
}
let changeGrid=document.createElement("button");
changeGrid.textContent="Change layout";
changeGrid.addEventListener("click",function(){
    let dim=prompt("How many squares for each row in the grid ?");
    deleteGrid(container);
    container=drawGrid(container,dim,dim,400/dim-2,400/dim-2);
})
document.body.appendChild(changeGrid);
container=drawGrid(container,16,16,400/16-2,400/16-2);
