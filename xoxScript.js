let currentPlayer = "X";
let arr = Array(9).fill(null);


function handleClick(el){
    const id = Number(el.id);
    if(arr[id] !== null) return; //This line is written bcz once X is written then we cannot edit it with O means one cell either it should be X or O
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "M" ? "O" : "M";
}

function checkWinner(){
    if(                                                                //WINNING MODES  
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||  //0  1  2   //row  
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||  //3  4  5   //row
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||  //6  7  8   //row
        
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||  //0  3  6   //col
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||  //1  4  7   //col
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||  //2  5  8   //col
        
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||  //0  4  8   //diagonal
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])     //2  4  6   //diagonal
    ){ 
        document.write(`WINNER IS ${currentPlayer}`); 
        return;
    }
    if(!arr.some((e) => e === null))
    {
        document.write(`MATCH DRAWN!!! BOTH OF YOU ARE USELESS`);
        return;
    }
}