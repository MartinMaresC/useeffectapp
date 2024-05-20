import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [contador, setContador] = useState(10);
  const [decompter, setDecompter] = useState(contador);

  const handleChange = (e) => {
    const value = Number(e.target.value);
    setContador(value);
    setDecompter(value);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDecompter(v => v <= 1 ? 0 : v - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [contador]);

  return (
    <div className="App">
      <input 
        value={contador} 
        onChange={handleChange} 
        placeholder="Timer..."
        type="number"
      />
      <p>Decompter: {decompter}</p>
    </div>
  );
}

export default App;
