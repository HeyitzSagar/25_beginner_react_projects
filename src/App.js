import React from "react";
import Ratingss from "./components/ratings/Ratingss";
import Slider from "./components/imageSlider/Slider";
// import Ratings from './components/ratings/Ratings'

const App = () => {
  return (
    <div>
      {/* <Ratings/> */}
      {/* <Ratingss/> */}
      <Slider url={"https://picsum.photos/v2/list"} limit={"10"} />
    </div>
  );
};

export default App;
