import React from "react";
import "./Chessboard.css";

type SquareProps = {
  id: string;
  color: "white" | "black";
};

export const Square = ({ id, color }: SquareProps) => (
  <div id={id} className={"square " + color}></div>
);
