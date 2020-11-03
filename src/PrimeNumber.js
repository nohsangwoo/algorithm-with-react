import React, { useState } from "react";

function PrimeNumber() {
  const [CPinput, setCPInput] = useState("");
  const [primeState, setPrimeState] = useState("");

  const [SEinput, setSEInput] = useState("");
  const [SEprimeState, setSEPrimeState] = useState([]);

  // ------------------------소수인지?확인해주는 함수-----------------------------------------------
  const checkPrimeNumber = (isPrimeNumber) => {
    //   소수는 2보다 크거나 같고 N/2보다 작거나 같은 자연수로 나누어 떨어지면 안됨
    let i = 0;
    if (isPrimeNumber < 2) {
      return false;
    }

    const condition_set = {
      // n의 약수는 n보다 작을수밖에 없기때문
      one: () => i <= isPrimeNumber - 1,
      // N의 약수 중에서 가장 큰것은 N/2보다 작거나 같기 때문
      two: () => i <= isPrimeNumber / 2,
      // n이 소수가 되려면 2보다 크거나 같고 루트N 보다 작거나 같은 자연수로 나누어 떨어지면 안됨
      // 이유: N이 소수가 아니라면 N = a *b 로  나타낼수
      // 제일 빠른 시간복잡도를 가짐
      three: () => i * i <= isPrimeNumber,
    };

    for (i = 2; condition_set.one(); i++) {
      // 약수가 있으면 false를 리턴해서 소수가 아님을 표시
      if (isPrimeNumber % i === 0) {
        return false;
      }
    }
    // 위 조건을 통과했다면 소수!
    return true;
  };

  const handleCheckPrime = (e) => {
    e.preventDefault();

    const isPrimeNumber = checkPrimeNumber(parseInt(CPinput));

    setPrimeState(
      isPrimeNumber
        ? `${CPinput}은(는) 소수입니다`
        : `${CPinput}은(는) 소수가 아닙니다`
    );
    setCPInput("");
  };

  // ------------------------------------------에라토스테네스의 체--------------------------------------------------

  // 1부터 N까지 범위안에 들어가는 모든 소수를 구하기
  const sieveOfEratosthenes = (maxNum) => {
    // 찾은 소수를 저장하는 곳
    let prime = [];

    // 찾은 소수를 저장할때 사용하는 index
    let pn = 0;

    //지워졌으면 true
    const check = Array.from({ length: parseInt(maxNum) }, (v = false, i) => {
      // 첫번째 인자는 매번 전해지는 값 , 두번째 인자는 ++되는 index
      // console.log(v, i);
      return v;
    });

    for (let i = 2; i <= maxNum; i++) {
      if (check[i] === false) {
        {
          prime[pn++] = i;
          for (let j = i * 2; j <= maxNum; j += i) {
            check[j] = true;
          }
        }
      }
    }

    return prime;
  };

  const handleSieveOfEratosthenes = (e) => {
    e.preventDefault();

    setSEPrimeState(sieveOfEratosthenes(SEinput));
  };

  return (
    <div>
      <h1>소수: 약수가 1과 자기 자신밖에 없는수</h1>
      <div>
        <p>
          N이 소수가 되려면, 2보다 크거나 같고, n-1보다 작거나 같은 자연수로
          나누어 떨어지면 안된다.
        </p>

        <p>ex) 1부터 100까지의 소수</p>
        <p>2,3,5,7,11,13,17,19,23,29,31,37,41,43....</p>
      </div>

      {/* 첫번째 소수 체크 프로그래밍 예시 */}
      <div>
        <h3>1. 소수확인</h3>
        <p>소수 여부를 확인하려는 숫자를 입력하세요</p>
        <form action="" onSubmit={handleCheckPrime}>
          <input
            value={CPinput}
            onChange={(e) => setCPInput(e.target.value)}
            placeholder={`prime Num?`}
          />
        </form>

        <div>{primeState}</div>
      </div>

      {/* 에라토스테네스의 체 */}
      <div>
        <h3>2. 에라토스 테네스의 체</h3>
        <p>1부터 N까지 범위 안에 들어가는 모든 소수를 구할때 사용 하는 방법</p>
        <p>N(범위의 MAX값)을 입력하세요</p>
        <form action="" onSubmit={handleSieveOfEratosthenes}>
          <input
            value={SEinput}
            onChange={(e) => setSEInput(e.target.value)}
            placeholder={`Max Number?`}
          />
        </form>
        <div>
          {SEprimeState.map((prime, i) => {
            return <span key={i}>{`${prime}, `}</span>;
          })}
        </div>
      </div>
    </div>
  );
}

export default PrimeNumber;
