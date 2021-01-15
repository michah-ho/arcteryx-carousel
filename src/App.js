import { Fragment } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import variables from "./config/variables";
import SlickSlider from "./components/slick-slider/SlickSlider";

function App() {
  const { secret_key } = variables;
  const url = `https://api.unsplash.com/photos/?page=1&client_id=${secret_key}`;
  const { state } = useFetch(url);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
        {
            breakpoint:769,
            settings:{
                slidesToShow:1,
                infinite:true,
                arrows: false,
                adaptiveHeight: true
            }
        }
    ]
  };

  if (state.loading) {
    return <div> Loading data...</div>;
  }
  if(!Array.isArray(state.data)){
    return Fragment;
  }
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">Arcteryx Carousel</h1>
        <SlickSlider imageList={state.data} settings={sliderSettings}/>
      </div>
    </div>
  );
}

export default App;
