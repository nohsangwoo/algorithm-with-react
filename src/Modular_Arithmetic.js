import React from "react";

function Modular_Arithmetic() {
  return (
    <div>
      <h1>Modular Arithmetic</h1>
      <ol>
        <li>
          <h3>+</h3>
          <p>(A + B)%C === (A%C + B%C)%C</p>
        </li>
        <li>
          <h3>X</h3>
          <p>(A * B)%C === (A%C * B%C)%C</p>
        </li>
        <li>
          <h3>음수(-)의 경우 결과의 부호가 프로그래밍 언어마다 다름</h3>
          <p>javascript에서 음수의 경우 (6-5) % 3=1%3 = 1이다</p>
          <p>(6%3 - 5%3)%3 = (0 - 2) % 3 = -2 % 3 =?</p>
          <p>{`((6 % 3) - (5 % 3)) % 3 === ${((6 % 3) - (5 % 3)) % 3}`}</p>
          <p>{`(0 - 2) % 3 === ${(0 - 2) % 3}`}</p>
          <p>{`-2 % 3 === ${-2 % 3}`}</p>

          <h3>프로그래밍 언어별 결과값</h3>
          <ul>
            <li>C11,C++14: -2</li>
            <li>Java: -2</li>
            <li>Python3: 1</li>
          </ul>

          <p>(a/b)%C === (axb^(C-2)) % C //페르마의 소정리</p>
        </li>
      </ol>
    </div>
  );
}

export default Modular_Arithmetic;
