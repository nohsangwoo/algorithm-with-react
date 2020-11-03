import React from "react";

function GCD() {
  // 일반적인 최대공약수 구하는 방법
  const GCD_NOMAL = (a, b) => {
    const min_Num = Math.min(a, b);
    console.log(min_Num);
    let g = 1;
    for (let i = 2; i <= min_Num; i++) {
      if (a % i === 0 && b % i === 0) {
        g = i;
      }
    }
    return g;
  };

  //   재귀 함수와 유클리드 호제법을 이용한 최대공약수 구하는 방법
  const GCD_Recursive_function = (a, b) => {
    if (b === 0) {
      return a;
    } else {
      return GCD_Recursive_function(b, a % b);
    }
  };

  //재귀함수를 사용안한 유클리드 호제법을 이용한 최대공약수 구하는 방법
  const GCD = (a, b) => {
    while (b !== 0) {
      let r = a % b;
      a = b;
      b = r;
    }
    return a;
  };

  return (
    <div>
      <div>
        <h1>Greatest Common Divisor</h1>
        <h1>최대공약수</h1>
      </div>

      <div>
        <h3>약수란?</h3>
        <div>n을 나눌수 있는수</div>
        <div>ex: 24의 약수는 = 1,2,3,4,6,8,12,24</div>
        <div>ex: 18의 약수는 = 1,2,3,6,9,18</div>
      </div>

      <div>
        <h3>공약수란?</h3>
        <div>공통된 약수</div>
        <div>ex: 24와 18의 공약수 === 1,2,3,6</div>
      </div>

      <div>
        <h3>최대공약수란?</h3>
        <p>
          최대 공약수를 구하는 가장 쉬운 방법은 2 부터 min(A,B)까지 모든 정수로
          나누어 보는 방법
        </p>
      </div>

      <div>
        GCD_NOMAL
        <h3>{GCD_NOMAL(24, 18)}</h3>
      </div>

      <div>
        <p>유클리드 - 재귀이용</p>
        GCD_Recursive_function
        <h3>{GCD_Recursive_function(24, 18)}</h3>
      </div>

      <div>
        <p>유클리드 - 재귀 이용 ㄴㄴ</p>
        GCD
        <h3>{GCD(24, 18)}</h3>
      </div>

      <div>
        <h3>세 수의 최대공약수는 다음과 같이 구할수있다</h3>
        <p>GCD(a,b,c) === GCD(GCD(a,b),c)</p>
        <p>네 수, N개의 숫자도 위와 같은 식으로 계속해서 구할수 있다.</p>
      </div>
    </div>
  );
}

export default GCD;
