import { useState, useEffect } from "react";

const Fetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  // Otra solución
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  //     const json = await response.json();
  //     setData(json);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <h1>Fetch</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default Fetch;
