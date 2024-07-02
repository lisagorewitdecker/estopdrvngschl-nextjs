import { CountUp } from "countup.js";
import { useEffect, useRef, useState } from "react";

function easeInOutCubic(elapsed, initialValue, amountOfChange, duration) {
  if ((elapsed /= duration / 2) < 1) {
    return (amountOfChange / 2) * elapsed * elapsed * elapsed + initialValue;
  }
  return (
    (amountOfChange / 2) * ((elapsed -= 2) * elapsed * elapsed + 2) +
    initialValue
  );
}

const MyCountUp = (props) => {
  const {
    startVal = 0,
    endVal,
    duration = 10,
    delay = 0,
    smartEasingAmount,
    styles
  } = props;

  const [counterInstance, setCounterInstance] = useState(null);
  const countUpRef = useRef(null);

  const handleReplayClick = () => {
    counterInstance.reset();
    counterInstance.start();
  };

  useEffect(() => {
    const options = {
      delay,
      duration,
      smartEasingThreshold: 10000000000,
      smartEasingAmount,
      useEasing: true,
      easingFn: easeInOutCubic
    };

    const countUp = new CountUp(countUpRef.current, endVal, options);
    setCounterInstance(countUp);
    // countUp.start();

    const test = setInterval(() => countUp.start(), delay * 1000);
    return function () {
      countUpRef.current = null;
      clearInterval(test);
      setCounterInstance(null);
    };
  }, [endVal, delay, duration, smartEasingAmount]);

  return (
    <div style={styles}>
      <span ref={countUpRef}>{startVal}</span>
      <div>
        <button type="button" onClick={handleReplayClick}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default MyCountUp;
