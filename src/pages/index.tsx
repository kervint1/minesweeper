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
  //リセットセル
  const reset: number[][] = [];
  reset.push([0]);
  function getrandom(mn: number, mx: number) {
    const random = Math.floor(Math.random() * (mx + 1 - mn) + mn);
    return random;
  }
  //userinputsのある数aを数える
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
  //bombmapのある数aを数える
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
  //クリックしてリセット
  const resetclickcell = (x: number, y: number) => {
    console.log(x, y);
    const inputsBoard: (0 | 1 | 2 | 3)[][] = JSON.parse(JSON.stringify(userInputs));
    const bombBoard: number[][] = JSON.parse(JSON.stringify(board));
    for (let y = 0; y <= 8; y++) {
      for (let x = 0; x <= 8; x++) {
        inputsBoard[y][x] = 0;
        bombBoard[y][x] = 0;
      }
    }
    setUserInputs(inputsBoard);
    setBombMap(bombBoard);
  };
  //右クリック
  const onclickcell = (x: number, y: number) => {
    document.getElementsByTagName('html')[0].oncontextmenu = () => false;
    console.log(x, y);
    const newBoard: (0 | 1 | 2 | 3)[][] = JSON.parse(JSON.stringify(userInputs));
    if (userInputs[y][x] === 0) {
      newBoard[y][x] = 2;
    } else if (userInputs[y][x] === 2) {
      newBoard[y][x] = 3;
    } else if (userInputs[y][x] === 3) {
      newBoard[y][x] = 0;
    }
    setUserInputs(newBoard);
  };
  //boardを0リストにする
  const board: number[][] = [];
  for (let a = 1; a <= 9; a++) {
    board.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }

  //地雷を生成
  while (Number(count_userinputs(1)) === 1 && Number(count_bombmap(1)) < 10) {
    const decidey = getrandom(0, 8);
    const decidex = getrandom(0, 8);
    if (userInputs[decidey][decidex] !== 1) {
      bombMap[decidey][decidex] = 1;
    }
    setBombMap(bombMap);
  }
  //boardを設定
  if (count_bombmap(1) >= 10) {
    for (let a = 1; a <= 10; a += 1) {
      for (let y = 0; y <= 8; y++) {
        for (let x = 0; x <= 8; x++) {
          if (board[y][x] === 9) {
            for (let movey = -1; movey <= 1; movey++) {
              for (let movex = -1; movex <= 1; movex++) {
                if (x === 0 && y === 0) {
                  userInputs[y][x] = 1;
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
                  userInputs[y][x] = 1;
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
  }
  // const isPlaying = userInputs.some((row) => row.some((input) => input !== 0));
  const isFailure = userInputs.some((row, y) =>
    row.some((input, x) => input === 1 && bombMap[y][x] === 1)
  );
  //クリック時
  let numclear = 0;
  const clickcell = (x: number, y: number) => {
    console.log(x, y);
    const newUserInputs: (0 | 1 | 2 | 3)[][] = JSON.parse(JSON.stringify(userInputs));
    //箱開く

    if (userInputs[y][x] === 0 && !isFailure) {
      newUserInputs[y][x] = 1;
    }
    //数字クリック時周り開く
    else if (
      userInputs[y][x] === 1 &&
      userInputs
        .map((row) => row.slice(Math.max(0, x - 1), Math.min(8, x + 1) + 1))
        .slice(Math.max(0, y - 1), Math.min(8, y + 1) + 1)
        .flat()
        .filter((n) => n === 2).length === board[y][x] &&
      !isFailure
    ) {
      for (let movey = -1; movey <= 1; movey++) {
        for (let movex = -1; movex <= 1; movex++) {
          if (
            userInputs[y + movey] !== undefined &&
            userInputs[y + movey][x + movex] !== undefined &&
            userInputs[y + movey][x + movex] === 0
          ) {
            newUserInputs[y + movey][x + movex] = 1;
          }
        }
      }
    }
    setUserInputs(newUserInputs);
  };
  //地雷踏んだ
  if (isFailure === true) {
    reset[0][0] = 1;
  }
  //サングラスフェイス
  else if (count_userinputs(0) + count_userinputs(2) + count_userinputs(3) === bombcount) {
    reset[0][0] = 2;
  }
  //flag=11,?=12
  for (let y = 0; y <= 8; y++) {
    for (let x = 0; x <= 8; x++) {
      if (userInputs[y][x] === 2) {
        board[y][x] = 11;
      } else if (userInputs[y][x] === 3) {
        board[y][x] = 12;
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.plate}>
        <div className={styles.reset}>
          {reset.map((row, y) =>
            row.map((color, x) => (
              <div className={styles.reset} key={`${x}-${y}`} onClick={() => resetclickcell(x, y)}>
                {color === 0 && <div className={styles.smile} />}
                {color === 1 && <div className={styles.dead} />}
                {color === 2 && <div className={styles.cool} />}
              </div>
            ))
          )}
        </div>
        <div className={styles.board}>
          {board.map((row, y) =>
            row.map((color, x) => (
              <div
                className={styles.cell}
                key={`${x}-${y}`}
                onClick={() => clickcell(x, y)}
                onContextMenu={() => onclickcell(x, y)}
              >
                {color === 0 && <div className={styles.nopush} />}
                {color === 1 && <div className={styles.one} />}
                {color === 2 && <div className={styles.two} />}
                {color === 3 && <div className={styles.three} />}
                {color === 4 && <div className={styles.four} />}
                {color === 5 && <div className={styles.five} />}
                {color === 6 && <div className={styles.six} />}
                {color === 7 && <div className={styles.seven} />}
                {color === 8 && <div className={styles.eight} />}
                {color === 9 && <div className={styles.nothing} />}
                {color === 10 && <div className={styles.bomb} />}
                {color === 11 && <div className={styles.flag} />}
                {color === 12 && <div className={styles.question} />}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
