import { useEffect, useState } from "react";

const Counter = (props) => {
  const {
    styles = null,
    data: { startNum = 0, number, duration }
  } = props;

  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = startNum;
    const end = number;

    if (start >= end) return;

    // find duration per increment
    const incrementTime = (duration / end) * 1000;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return function () {
      setCount(0);
      clearInterval(timer);
    };
  }, [number, duration, startNum]);

  return (
    <div className="count" style={styles}>
      {count}
    </div>
  );
};

export default Counter;
