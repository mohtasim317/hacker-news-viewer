import { useState, useEffect } from "react";
import Story from "./components/Story";
import "./App.css";

/*

2. Map the hook, pass down the IDs to a Story Component. 
3. Use the IDs to fetch from the item API
*/

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
