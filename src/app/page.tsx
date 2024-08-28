"use client";
import Head from "next/head";
import {useEffect, useState} from 'react';



const winning_combos =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
export default function Home() {
  const [xTurn, setXTurn] = useState(true)
  const [modal_title,setModalTitle] = useState('')
  const [wonCombo, setWonCombo] = useState([])
  const [won, setWon] = useState(false)
  const [boardData, setBoardData] = useState({
    0:"",
    1:"",
    2:"",
    3:"",
    4:"",
    5:"",
    6:"",
    7:"",
    8:""});
  
    const [isDraw, setIsDraw] = useState(false)

    useEffect(()=>{
     checkWinner()
      checkDraw()
    },[boardData])


    const updateBoardData = (idx:any) =>  {
      if (!boardData[idx] && !won) {
        // will check whether specify idx is empty or not
let value = xTurn === true ? 'X' : 'O';
       setBoardData({...boardData, [idx]:value})
       setXTurn(!xTurn)
      }
    }

    const checkDraw =()=>{
      let check = Object.keys(boardData).every((v)=>boardData[v])
      setIsDraw(check)
      if(check)setModalTitle("Match Draw !!!")
    }

      const checkWinner =() => {
      winning_combos.map((bd)=>{
        const [a,b,c]= bd;
        if(boardData[a] && boardData[a]===boardData[b]&& boardData[a]=== boardData[c])
          {
          setWon(true)
          setWonCombo([a,b,c])
        setModalTitle(`Player ${!xTurn ? 'X':'O'} Won !!!`)
        console.log(setModalTitle)
        return
      }
    
      })
      }

      const reset = ()=>{
        setBoardData({0:"",1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",})
        setXTurn(true)
        setWon(false)
        setWonCombo([])
        setModalTitle("")
        setIsDraw(false)
      
      }
  return (
    <div>
      <head>
        <title>Tic-Tac-Toe</title>
      </head>

      <h1>Tic Tac Toe</h1>

      <div className="game">
        <div className="game_menu">
          <p>{xTurn === true ? 'X Turn':'O turn'}</p>
          <p>{`Game Won : ${won} Draw: ${isDraw}`}</p>
        </div>

        <div className="game_board">
          {[...Array(9)].map((v:any, idx:any)=> {
            return (<div 
              onClick = {() => {
              updateBoardData(idx);
            }}
               key={idx}
               className={`square ${wonCombo.includes(idx) ? 'highlight': ''}`}>
                {boardData[idx as keyof typeof boardData]}</div>)
               setXTurn(!xTurn)
          })}
          
        </div>
      </div>
      <div className={`modal ${modal_title ? 'show':''}`}>
        <div className="modal_title">{modal_title}</div>
        <button onClick={reset}>New Game</button>
      </div>

    </div>
  )
}