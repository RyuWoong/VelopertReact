import React, { useEffect } from "react";

function HistorySample({ history }) {
  const goBack = () => {
    history.goBack();
  };

  const goHome = () => {
    //방문기록 남김
    history.push("/");
  };

  const replaceToHome = () => {
    // 방문기록 안 남기고 이동
    history.replace("/");
  };
  useEffect(() => {
    const unblock = history.block("정말 떠나실건가요?");
    return () => {
      //언마운드트시 실행됨.
      unblock();
    };
  }, [history]);
  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
      <button onClick={replaceToHome}>홈으로(replace)</button>
    </div>
  );
}

export default HistorySample;
