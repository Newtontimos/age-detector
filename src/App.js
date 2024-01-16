import { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchDate = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    });
  };
  return (
    <div className="App">
      <input
        placeholder="enter name....."
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchDate}>Predict Age</button>
      <h1>Name:{predictedAge?.name}</h1>
      <h1>Predicted Age:{predictedAge?.age}</h1>
      <h1>count:{predictedAge?.count}</h1>
    </div>
  );
}

export default App;
