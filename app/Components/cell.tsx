import { Dispatch , SetStateAction } from "react";

type CellProps ={
    id: number;
    go: string;
    setGo: Dispatch<SetStateAction<string>>;
    cells: string[];
    setCells: Dispatch<SetStateAction<string[]>>;
    cell?: string; 
    winningMessage: string;
}

const cell = ({go , setGo , id , cells , setCells , cell , winningMessage}:CellProps) => {

    const handleclick = (e) => {
        if (winningMessage) return;
        const notTaken = !cells[id]
        
        if (notTaken) {
            
            if (go === "O" ){
            handleCellChange("O")
            setGo("X");
        }else if (go === "X") {
            handleCellChange("X")
            setGo("O");
        }

        }
        
    }

    const handleCellChange = (cellToChange: string) => {
        let copyCells = [...cells];
        copyCells[id] = cellToChange;
        setCells(copyCells);

    }
    return (
        <div className="square" onClick={handleclick}>
            <div className={cell}>{cell ?  (cell === "O" ? "O" : "X") : "" }</div>
        </div>
    )
}

export default cell;