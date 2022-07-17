import React, { useState } from "react";
let timer;

const Counter = () => {
  let [mins, setMins] = useState("");
  let [secs, setSecs] = useState("");
  const [isPause, setPause] = useState(false);

  let startTimer = React.useCallback(() => {
    timer = setInterval(() => {
      setSecs((secs) => {
        if (secs <= 1) {
          if (mins > 0) {
            setMins(mins - 1);
            return 59;
          } else if (mins === 0 && secs > 0) {
            return secs - 1;
          } else {
            clearInterval(timer);
            return 0;
          }
        }
        return secs - 1;
      });
    }, 1000);
  });

  let pauseResumeTimer = React.useCallback(() => {
    if (isPause) {
      startTimer();
      setPause(false);
    } else {
      setPause(true);
      clearInterval(timer);
    }
  });

  const tick = React.useCallback(startTimer);

  let resetTimer = () => {
    setMins("");
    setSecs("");
    clearInterval(timer);
  };

  return (
    <>
      <div>
        <div>
          <span>
            Timer: {mins && mins}: {secs && secs}
          </span>
        </div>
        <br />
        <input
          type="number"
          value={mins}
          onChange={(e) => {
            e.preventDefault();
            setMins(e.target.value);
          }}
        />
        <input
          type="number"
          value={secs}
          onChange={(e) => {
            e.preventDefault();
            setSecs(e.target.value);
          }}
        />
      </div>
      <br />
      <div>
        <button onClick={tick}>Start</button>
        <button onClick={pauseResumeTimer}>Pause/Resume</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </>
  );
};

export default Counter;
