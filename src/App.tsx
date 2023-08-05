import { useState } from "react";
import produce from 'immer';

function App() {

  const [bugs, setBugs] = useState([
    {id: 1, title: 'Bug 1', fixed: false},
    {id: 2, title: 'Bug 2', fixed: true},
  ]);

  const handleClick = () => {
    // setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug))
    // draft === a proxy object going to apply the object array
    // drfat === copy of a array // you dont need a map
    setBugs(produce(draft => {
      const bug = draft.find(bug => bug.id === 1);
      if (bug) bug.fixed = true;
    }))
  }

  return (
    <>
      {bugs.map(bug => <p key={bug.id}>{bug.title} {bug.fixed ? 'Fixed' : 'New'}</p>)}
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default App;