// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { useEffect, useState } from 'react';

export function App() {
  const [backResponse, setBackResponse] = useState("Nothing");

  useEffect(() => {
    const api = async () => {
      const data = await fetch("http://localhost:8080/greetings");
      const jsonData = await data.json();
      console.log(jsonData)
      setBackResponse(jsonData["content"])
    };
    api();
  }, []);

  return (
    <div>
      <h1>Message received from the backend</h1>
      <p>{backResponse}</p>
    </div>
  );
}

export default App;
