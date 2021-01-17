import "./App.css";
import variables from "./config/variables";
import SlickSlider from "./components/slick-slider/SlickSlider";

function App(props) {
  const {fetchHook} = props;
  const { img_api_url, secret_key } = variables;
  const url = `${img_api_url}/?page=1&client_id=${secret_key}`;
  const { state, errState } = fetchHook(url);
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
  if (errState){
    return <div>{errState}</div>
  }

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
