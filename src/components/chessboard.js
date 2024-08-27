import React, { useState } from 'react';
import './chessboard.css';
import blackImg from './images/game.png';
import whiteImg from './images/pawn.png'
import blackKnight from './images/strategy.png'
import whiteKnight from './images/knight.png'
import blackBishop from './images/bishop.png'
import whiteKing from './images/king.png'
import blackrook from './images/rook.png'
import blackKing from './images/king (1).png'
import blackQueen from './images/queen (1).png'
import whiteQueen from './images/queen (2).png'
import whiteBishop from './images/bishop (1).png'
import whiterook from './images/rook (1).png'
function Black({ children }) {
    return (
        <div id='black'>
            {children}
        </div>
    );
}

function White({ children }) {
    return (
        <div id='white'>
            {children} 
        </div>
    );
}
function Chessboard(){
    return (
        <div style={{display: "flex", justifyContent: "center", backgroundColor: "rebeccapurple", height: "100vh"}}>
            <div id='chessboard'>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Black>
                        <img src={blackrook} alt="Black pawn" />
                    </Black>
                    <White > <img src={blackKnight} alt="Black pawn" /></White>
                    <Black >   <img src={blackBishop} alt="Black pawn" /></Black>
                    <White ><img src={blackQueen} alt="Black pawn" /></White>
                    <Black ><img src={blackKing} alt="Black pawn" /></Black>
                    <White > <img src={blackBishop} alt="Black pawn" /></White>
                    <Black ><img src={blackKnight} alt="Black pawn" /></Black>
                    <White >  <img src={blackrook} alt="Black pawn" /></White>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                <White >
                        <img src={blackImg} alt="Black pawn" />
                    </White>
                    <Black>
                        <img src={blackImg} alt="Black pawn" />
                    </Black>
                    <White >
                        <img src={blackImg} alt="Black pawn" />
                    </White>
                    <Black>
                        <img src={blackImg} alt="Black pawn" />
                    </Black>
                    <White >
                        <img src={blackImg} alt="Black pawn" />
                    </White>
                    <Black>
                        <img src={blackImg} alt="Black pawn" />
                    </Black>
                    <White >
                        <img src={blackImg} alt="Black pawn" />
                    </White>
                    <Black>
                        <img src={blackImg} alt="Black pawn" />
                    </Black>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Black />
                    <White />
                    <Black />
                    <White />
                    <Black />
                    <White />
                    <Black />
                    <White />
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <White />
                    <Black />
                    <White />
                    <Black />
                    <White />
                    <Black />
                    <White />
                    <Black />
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Black />
                    <White />
                    <Black />
                    <White />
                    <Black />
                    <White />
                    <Black />
                    <White />
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <White />
                    <Black />
                    <White />
                    <Black />
                    <White />
                    <Black />
                    <White />
                    <Black />
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Black>
                            <img src={whiteImg} alt="Black pawn" />
                        </Black>
                    <White >
                        <img src={whiteImg} alt="Black pawn" />
                    </White>
                    <Black>
                        <img src={whiteImg} alt="Black pawn" />
                    </Black>
                    <White >
                        <img src={whiteImg} alt="Black pawn" />
                    </White>
                    <Black>
                        <img src={whiteImg} alt="Black pawn" />
                    </Black>
                    <White >
                        <img src={whiteImg} alt="Black pawn" />
                    </White>
                    <Black>
                        <img src={whiteImg} alt="Black pawn" />
                    </Black>
                    <White >
                        <img src={whiteImg} alt="Black pawn" />
                    </White>
                    
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <White >  <img src={whiterook} alt="Black pawn" /></White>
                    <Black >  <img src={whiteKnight} alt="Black pawn" /></Black>
                    <White >  <img src={whiteBishop} alt="Black pawn" /></White>
                    <Black >  <img src={whiteKing} alt="Black pawn" /></Black>
                    <White >  <img src={whiteQueen} alt="Black pawn" /></White>
                    <Black >  <img src={whiteBishop} alt="Black pawn" /></Black>
                    <White >  <img src={whiteKnight} alt="Black pawn" /></White>
                    <Black >  <img src={whiterook} alt="Black pawn" /></Black>
                </div>
            </div>
        </div>
    );
}

export default Chessboard;
