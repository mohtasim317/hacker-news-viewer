import React, { useEffect, useState } from "react";

let Story = ({ storyID, storyNumber }) => {
  let [storyData, setStoryData] = useState({});

  async function getStoryData() {
    let rawData = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${storyID}.json`
    );
    let jsonData = await rawData.json();
    setStoryData(jsonData);
  }

  useEffect(() => {
    getStoryData();
  }, []);

  return (
    <div>
      <h3>Story #{storyNumber + 1}</h3>
      <p>{storyData.title}</p>
    </div>
  );
};

export default Story;
