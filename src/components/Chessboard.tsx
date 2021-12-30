import { Square } from "./Square";
import "./Chessboard.css";

let chess_ids = ["a", "b", "c", "d", "e", "f", "g", "h"];
let rows = [8, 7, 6, 5, 4, 3, 2, 1];

export const Chessboard = () => (
  <div className="chessboard">
    {rows.map((row, indexRow) =>
      chess_ids.map((item, index) => {
        return (
          <Square
            color={(index + indexRow) % 2 ? "black" : "white"}
            id={item + "_" + row}
          />
        );
      })
    )}
  </div>
);
