import { useEffect, useState } from "react";

const User = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("timer of 1 sec");
    }, 1000);

    return ()=>{
        console.log("timer stopped in unmount");
        clearInterval(timer)
    }
  }, []);

  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>
      <h1>{props.name}</h1>
      <h1>{props.location}</h1>
      <h2>789755656</h2>
      <h2>aanchal@gmail.com</h2>
    </div>
  );
};

export default User;
