import { useState } from "react";
import CheckBox from "./CheckBox";

function App() {
  //useState(기본 타입)
  //useState(참조 타입)
  const [checkList, setCheckList] = useState([false, false]);
  const changeOne = () => {
    setCheckList((prev) => {
      const newCheckedList = [...prev];
      newCheckedList[0] = !newCheckedList[0];
      return newCheckedList;
    });
  };

  const changeTwo = () =>
    setCheckList((prev) => {
      const newCheckedList = [...prev];
      newCheckedList[1] = !newCheckedList[1];
      return newCheckedList;
    });

  return (
    <div className="App">
      <CheckBox change={changeOne} checked={checkList[0]} />
      <CheckBox change={changeTwo} checked={checkList[1]} />
      <button
        style={{
          backgroundColor: checkList.every((v) => v) ? "pink" : "white",
        }}
      >
        확인
      </button>
    </div>
  );
}

export default App;
