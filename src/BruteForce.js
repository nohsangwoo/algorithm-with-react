import React from "react";

function BruteForce() {
  // 7난쟁이 구하기
  const findSevenDwarf = () => {
    //   난쟁이 각각의 키
    let DwarfList = [20, 7, 23, 19, 10, 15, 25, 8, 13];

    const DwarfsLength = DwarfList.length;

    // 난쟁이들의 키를 전부 더한값
    const totalHeightOfDwarf = DwarfList.reduce((acc, cur) => {
      return acc + cur;
    });

    let i;
    let j;
    let k = 0;
    let findedSevenDwarfs = [];
    for (i = 0; i < DwarfsLength; i++) {
      for (j = i + 1; j < DwarfsLength; j++) {
        if (totalHeightOfDwarf - DwarfList[i] - DwarfList[j] === 100) {
          for (k = 0; k < DwarfsLength; k++) {
            if (k !== i || k !== j) {
              //   console.log(DwarfList[k]);
              findedSevenDwarfs.push(DwarfList[k]);
            }
          }
          break;

          //   console.log(
          //     DwarfList[i],
          //     "와",
          //     DwarfList[j],
          //     "는 7난쟁이가 아닙니다."
          //   );
        }
      }
    }
    // console.log(findedSevenDwarfs);

    return findedSevenDwarfs;
  };

  return (
    <div>
      <h1>Brute Force</h1>
      <p>모든 경우의 수를 다 해보는 것</p>

      <ul>
        <li>문제의 가능한 경우의 수를 계산해본다</li>
        <li>가능한 모든 방법을 다 만들어본다</li>
        <li>각각의 방법을 이용해 답을 구해본다</li>
      </ul>

      <h3>일곱난쟁이 문제 풀이</h3>
      <p>https://www.acmicpc.net/problem/2309</p>
      {/* 9명중 2명을 제외한 키의 합이 100인 난쟁이를 찾아라 */}

      {findSevenDwarf().map((dwarf, i) => {
        return <div key={i}>{dwarf}</div>;
      })}
    </div>
  );
}

export default BruteForce;
