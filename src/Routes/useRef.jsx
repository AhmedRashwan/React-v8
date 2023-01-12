import { memo, useEffect, useRef, useState } from "react";

let counter = 0;

const UseRefComponent = memo(function UseRef() {
  const targeted = useRef();
  console.log(document.getElementById("targetedDiv") === targeted.current);
  const [update, setUpdate] = useState("");
  counter++;
  useEffect(() => {
    console.log("HERE");
  }, [update]);
  return (
    <div>
      <div>{counter}</div>
      <form action="#">
        <input type="text" onChange={(e) => setUpdate(e.target.value)} />

        <button>test</button>
        <div id="targetedDiv" ref={targeted}></div>
      </form>
    </div>
  );
});

export default UseRefComponent;
