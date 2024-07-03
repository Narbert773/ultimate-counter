import { useState } from 'react';

function App(): JSX.Element {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>hello</h1>
      <p>{count}</p>
      <button type="button" onClick={incrementCount}>
        +
      </button>
      <button type="button" onClick={decrementCount}>
        -
      </button>
    </>
  );
}

export default App;
