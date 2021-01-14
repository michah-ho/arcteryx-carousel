import { useEffect } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import variables from "./config/variables";

function App() {
  const {secret_key} = variables;
  const url = `https://api.unsplash.com/photos/?page=1&client_id=${secret_key}`;
  const fetchResult = useFetch(url);
  
  useEffect(() => {
    console.log("fetchResult", fetchResult);
  }, [fetchResult]);
  
  return (
    <div className="App">
      <h1>Arcteryx Carousel</h1>
    </div>
  );
}

export default App;
