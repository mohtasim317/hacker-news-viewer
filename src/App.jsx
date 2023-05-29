import { useState, useEffect } from "react";
import Story from "./components/Story";
import "./App.css";

function App() {
  let [storyIDs, setStoryIDs] = useState([]);

  async function fetchData() {
    let rawData = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );
    let jsonData = await rawData.json();
    setStoryIDs(jsonData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {storyIDs.map((storyID, idx) => {
        return <Story key={idx} storyID={storyID} storyNumber={idx} />;
      })}
    </div>
  );
}

export default App;
