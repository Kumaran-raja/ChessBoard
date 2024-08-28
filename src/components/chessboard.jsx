import React, { useState } from 'react';
import './chessboard.css';
import blackImg from './images/game.png';
import whiteImg from './images/pawn.png';
import blackKnight from './images/strategy.png';
import whiteKnight from './images/knight.png';
import blackBishop from './images/bishop.png';
import whiteKing from './images/king.png';
import blackRook from './images/rook.png';
import blackKing from './images/king (1).png';
import blackQueen from './images/queen (1).png';
import whiteQueen from './images/queen (2).png';
import whiteBishop from './images/bishop (1).png';
import whiteRook from './images/rook (1).png';

function Black({ children, onClick }) {
    return (
        <div id='black' onClick={onClick}>
            {children}
        </div>
    );
}

function White({ children, onClick }) {
    return (
        <div id='white' onClick={onClick}>
            {children}
        </div>
    );
}

const initialBoard = [
    [blackRook, blackKnight, blackBishop, blackQueen, blackKing, blackBishop, blackKnight, blackRook],
    [blackImg, blackImg, blackImg, blackImg, blackImg, blackImg, blackImg, blackImg],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [whiteImg, whiteImg, whiteImg, whiteImg, whiteImg, whiteImg, whiteImg, whiteImg],
    [whiteRook, whiteKnight, whiteBishop, whiteKing, whiteQueen, whiteBishop, whiteKnight, whiteRook],
];

function Chessboard() {
    const [board, setBoard] = useState(initialBoard);
    const [selectedPiece, setSelectedPiece] = useState(null);

    const select = (row, colIndex) => {
        if (selectedPiece) {
            const [selectedRow, selectedColumn] = selectedPiece;
            
            const updatedBoard = board.map((r, rIndex) => 
                r.map((col, cIndex) => {
                    if (rIndex === selectedRow && cIndex === selectedColumn) return null;
                    if (rIndex === row && cIndex === colIndex) return board[selectedRow][selectedColumn];
                    return col;
                })
            );
            
            setBoard(updatedBoard);
            setSelectedPiece(null);

        } else if (board[row][colIndex]) {
            setSelectedPiece([row, colIndex]);
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", backgroundColor: "rebeccapurple", height: "100vh" }}>
            <div id='chessboard'>
                {board.map((row, rowIndex) => (
                    <div style={{ display: "flex", justifyContent: "center" }} key={rowIndex}>
                        {row.map((piece, colIndex) => {
                            const isBlack = (rowIndex + colIndex) % 2 === 0;
                            const ChessSquareBox = isBlack ? Black : White;
                            return (
                                <ChessSquareBox key={colIndex} onClick={() => select(rowIndex, colIndex)}>
                                    {piece && <img src={piece} alt='chess piece' />}
                                </ChessSquareBox>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Chessboard;
