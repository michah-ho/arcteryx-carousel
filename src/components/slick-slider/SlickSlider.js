import React, { Fragment } from "react";
import Slider from "react-slick";

const SlickSlider = function (props) {
  const { imageList, settings } = props;

  if(!Array.isArray(imageList)){
      return Fragment;
  }
  
  return (
    <div>
      <Slider {...settings}>
        {imageList.map((item) => (
          <div key={item.id} style={{backgroundUrl: `url(${item.urls.regular})`}}>
            <img src={item.urls.small} alt={item.alt_description} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default SlickSlider;
