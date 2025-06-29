import { useState } from "react";
import Card from "../Card/card";
import { ToastContainer, toast } from 'react-toastify';
import './Grid.css';
import 'react-toastify/dist/ReactToastify.css';

function Grid({numberOfCards}){
    const [turn, setTurn] = useState(true); // true -> O, false -> X
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [winner, setWinner] = useState(null);

    function isWinner(player){
        if((board[0]==player && board[1]==player && board[2]==player)
            || (board[3]==player && board[4]==player && board[5]==player)
            || (board[6]==player && board[7]==player && board[8]==player)
            || (board[0]==player && board[3]==player && board[6]==player)
            || (board[1]==player && board[4]==player && board[7]==player)
            || (board[2]==player && board[5]==player && board[8]==player)
            || (board[0]==player && board[4]==player && board[8]==player)
            || (board[2]==player && board[4]==player && board[6]==player)
        ){
            return true;
        } else {
            return false;
        }
    }

    function play(index){
        if(turn){
            board[index] = 'O';
        } else {
            board[index] = 'X';
        }
        if(isWinner(turn ? 'O' : 'X')){
            setWinner(turn);
            console.log(winner);
            toast.success(`Congratulation ${turn ? 'O': 'X'} win the game!!`)
        }
        setTurn(!turn);
        setBoard([...board]);
    }

    function reset() {
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
        setTurn(true);
    }

    return <>
        <ToastContainer/>
        <h2 className='heading'>Tic Tac Toe</h2>
        <div className='game-info'>
            <h3>
                Current Turn: {turn ? 'O': 'X'}
            </h3>
            <button className="reset" onClick={reset}>Reset game</button>
        </div>

        <div className="grid">
            {board.map((value, idx)=>{
                return <Card key={idx} player={value} onPlay={()=>play(idx)}/>
            })}
        </div>
    </>
}

export default Grid;