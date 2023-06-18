import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [userInputs, setUserInputs] = useState<(0 | 1 | 2 | 3)[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const bombcount = 10;

  const [bombMap, setBombMap] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  function getrandom(mn: number, mx: number) {
    const random = Math.floor(Math.random() * (mx + 1 - mn) + mn);
    return random;
  }
  function count_userinputs(a: number) {
    let num = 0;
    for (let y = 0; y <= 8; y++) {
      for (let x = 0; x <= 8; x++) {
        if (userInputs[y][x] === a) {
          num += 1;
        }
      }
    }
    return num;
  }
  function count_bombmap(a: number) {
    let num = 0;
    for (let y = 0; y <= 8; y++) {
      for (let x = 0; x <= 8; x++) {
        if (bombMap[y][x] === a) {
          num++;
        }
      }
    }
    return num;
  }
  const board: number[][] = [];
  for (let a = 1; a <= 9; a++) {
    board.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }

  while (Number(count_userinputs(1)) === 1 && Number(count_bombmap(1)) < 10) {
    let decidey = getrandom(0, 9);
    let decidex = getrandom(0, 9);
    if (userInputs[decidey][decidex] !== 1) {
      bombMap[decidey][decidex] = 1;
    }
    setBombMap(bombMap);
  }
  const isPlaying = userInputs.some((row) => row.some((input) => input !== 0));
  // const isFailure = userInputs.some((row, y) =>
  //   row.some((input, x) => input === 1 && bombMap[y][x] === 1)
  // );

  const clickcell = (x: number, y: number) => {
    console.log(x, y);
    const newBoard: (0 | 1 | 2 | 3)[][] = JSON.parse(JSON.stringify(userInputs));
    newBoard[y][x] = 1;
    setUserInputs(newBoard);
  };
  // let zeroList: { x: number; y: number }[] = [];
  // for () {
  //   zeroList = // board + directions + userInputs + bombMap
  // }
  for (let a = 1; a <= 10; a += 1) {
    for (let y = 0; y <= 8; y++) {
      for (let x = 0; x <= 8; x++) {
        if (board[y][x] === 9) {
          for (let movey = -1; movey <= 1; movey++) {
            for (let movex = -1; movex <= 1; movex++) {
              if (x === 0 && y === 0) {
              } else if (
                userInputs[y + movey] !== undefined &&
                userInputs[x + movex] !== undefined
              ) {
                userInputs[y + movey][x + movex] = 1;
              }
            }
          }
        }
      }
    }
    for (let y = 0; y <= 8; y++) {
      for (let x = 0; x <= 8; x++) {
        if (userInputs[y][x] === 1 && bombMap[y][x] !== 1) {
          let numb = 0;
          for (let movey = -1; movey <= 1; movey++) {
            for (let movex = -1; movex <= 1; movex++) {
              if (x === 0 && y === 0) {
              } else if (
                bombMap[y + movey] !== undefined &&
                bombMap[x + movex] !== undefined &&
                bombMap[y + movey][x + movex] === 1
              ) {
                numb++;
              }
            }
          }
          if (numb === 0) {
            numb = 9;
          }
          board[y][x] = numb;
        } else if (userInputs[y][x] === 1 && bombMap[y][x] === 1) {
          board[y][x] = 10;
        }
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => clickcell(x, y)}>
              {color === 0 && <div className={styles.nopush}></div>}
              {color === 1 && <div className={styles.one}></div>}
              {color === 2 && <div className={styles.two}></div>}
              {color === 3 && <div className={styles.three}></div>}
              {color === 4 && <div className={styles.four}></div>}
              {color === 5 && <div className={styles.five}></div>}
              {color === 6 && <div className={styles.six}></div>}
              {color === 7 && <div className={styles.seven}></div>}
              {color === 8 && <div className={styles.eight}></div>}
              {color === 9 && <div className={styles.nothing}></div>}
              {color === 10 && <div className={styles.bomb}></div>}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
