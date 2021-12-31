import React from "react";
import "./Chessboard.css";

type SquareProps = {
  id: string;
  color: "white" | "black";
  chesspiece: "King" | "Queen" | "Rook" | "Bishop" | "Knight" | "Pawn" | null;
  chesspiececolor: "white" | "black";
};

export const Square = ({ id, color, chesspiece, chesspiececolor }: SquareProps) => (
  <div
    id={id}
    className={"square " + color + " " + chesspiece?.toLowerCase() + "_" + chesspiececolor}
  ></div>
);
