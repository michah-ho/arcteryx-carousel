import { Fragment } from "react";
import "./App.css";
import variables from "./config/variables";
import SlickSlider from "./components/slick-slider/SlickSlider";

function App(props) {
  const {fetchHook} = props;
  const { secret_key } = variables;
  const url = `https://api.unsplash.com/photos/?page=1&client_id=${secret_key}`;
  const { state } = fetchHook(url);
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

  //write a test for this
  if (state.loading) {
    return <div> Loading data...</div>;
  }
  //return a message and write a test for it
  if(!Array.isArray(state.data) || state.data.length < 1){
    return <div> Sorry there are no images to display</div>;
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
