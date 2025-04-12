import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const name = useSelector(state => state.name);
  const dispatch = useDispatch();
  const lightDark = useSelector(state => state.lightDark);


  const handleClick = () => {
    dispatch({ type: "SET_NAME", payload: input });
  };

  return (
    <div>
      <h2>ismingizni kiriting</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Plase enter your name"
      />
      <button onClick={handleClick}>Save</button>

      {name && <p>Hello, {name} 👋</p>}


      <div>
      <h2>Mode: {lightDark ? "light 🔆" : "dark 🌑"}</h2>
      <button onClick={() => dispatch({ type: "TURN_ON" })}>on</button>
      <button onClick={() => dispatch({ type: "TURN_OFF" })}>off</button>
      <button onClick={() => dispatch({ type: "TOGGLE" })}>Toggle</button>
    </div>
    </div>
  );
}

export default App;
