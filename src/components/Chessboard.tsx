import { Square } from "./Square";
import "./Chessboard.css";

let chess_ids = ["a", "b", "c", "d", "e", "f", "g", "h"];
let rows = [8, 7, 6, 5, 4, 3, 2, 1];

interface PieceInfo {
  chesspiece: "King" | "Queen" | "Rook" | "Bishop" | "Knight" | "Pawn" | null;
  chesspiececolor: "white" | "black";
}

let startPosition: { [pos: string]: PieceInfo } = {
  a_1: { chesspiece: "Rook", chesspiececolor: "white" },
  b_1: { chesspiece: "Knight", chesspiececolor: "white" },
  c_1: { chesspiece: "Bishop", chesspiececolor: "white" },
  d_1: { chesspiece: "Queen", chesspiececolor: "white" },
  e_1: { chesspiece: "King", chesspiececolor: "white" },
  f_1: { chesspiece: "Bishop", chesspiececolor: "white" },
  g_1: { chesspiece: "Knight", chesspiececolor: "white" },
  h_1: { chesspiece: "Rook", chesspiececolor: "white" },
  a_2: { chesspiece: "Pawn", chesspiececolor: "white" },
  b_2: { chesspiece: "Pawn", chesspiececolor: "white" },
  c_2: { chesspiece: "Pawn", chesspiececolor: "white" },
  d_2: { chesspiece: "Pawn", chesspiececolor: "white" },
  e_2: { chesspiece: "Pawn", chesspiececolor: "white" },
  f_2: { chesspiece: "Pawn", chesspiececolor: "white" },
  g_2: { chesspiece: "Pawn", chesspiececolor: "white" },
  h_2: { chesspiece: "Pawn", chesspiececolor: "white" },
  //White

  a_8: { chesspiece: "Rook", chesspiececolor: "black" },
  b_8: { chesspiece: "Knight", chesspiececolor: "black" },
  c_8: { chesspiece: "Bishop", chesspiececolor: "black" },
  d_8: { chesspiece: "Queen", chesspiececolor: "black" },
  e_8: { chesspiece: "King", chesspiececolor: "black" },
  f_8: { chesspiece: "Bishop", chesspiececolor: "black" },
  g_8: { chesspiece: "Knight", chesspiececolor: "black" },
  h_8: { chesspiece: "Rook", chesspiececolor: "black" },
  a_7: { chesspiece: "Pawn", chesspiececolor: "black" },
  b_7: { chesspiece: "Pawn", chesspiececolor: "black" },
  c_7: { chesspiece: "Pawn", chesspiececolor: "black" },
  d_7: { chesspiece: "Pawn", chesspiececolor: "black" },
  e_7: { chesspiece: "Pawn", chesspiececolor: "black" },
  f_7: { chesspiece: "Pawn", chesspiececolor: "black" },
  g_7: { chesspiece: "Pawn", chesspiececolor: "black" },
  h_7: { chesspiece: "Pawn", chesspiececolor: "black" }
};

function getPiceInfo(id: string, index: number) {
  let pos = id + "_" + index;
  if (startPosition[pos] != null) {
    return startPosition[pos];
  }
  return null;
}

export const Chessboard = () => (
  <div className="chessboard">
    {rows.map((row, indexRow) =>
      chess_ids.map((item, index) => {
        return (
          <Square
            color={(index + indexRow) % 2 ? "black" : "white"}
            id={item + "_" + row}
            chesspiece={getPiceInfo(item, row)?.chesspiece}
            chesspiececolor={getPiceInfo(item, row)?.chesspiececolor}
          />
        );
      })
    )}
  </div>
);
