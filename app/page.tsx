"use client";
import React, { useEffect, useState } from "react";
import Cell from "./Components/cell";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

export default function Home() {

const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
const [go , setGo] = useState("O");
const [winningMessage, setWinningMessage] = useState("");

useEffect(() => {
  winningCombinations.forEach((combination) => {
    const circleWins = combination.every((cell) => cells[cell] === "O");
    const crossWins = combination.every((cell) => cells[cell] === "X");
    
    if (circleWins){
      setWinningMessage("O has won!");
      
    }else if (crossWins) {
      setWinningMessage("X has won!");
    }
  })
}, [cells]);

useEffect(() => {
  if (cells.every(cell => cell !== "") && !winningMessage) {
    setWinningMessage("It's a draw!");

  }
}, [cells , winningMessage])

  return (
    <>
    <div className="container">

      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell id={index}
          go={go}
          setGo={setGo}
          key={index}
          cells={cells}
          setCells={setCells}
          cell={cell}
          winningMessage={winningMessage}

                />
        ) )}
      </div>
      
      <div>
        {winningMessage}
      </div>

      { ! winningMessage && <div>
        {`it's now ${go} turn`}
      </div> }

    </div>
    </>
  );
}


