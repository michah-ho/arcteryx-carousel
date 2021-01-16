import React from "react";
import SlickSlider from "./SlickSlider";
import { shallow, mount } from "enzyme";

describe("<SlickSlider>", () => {
  it("Should render when all good props are passed in to component", () => {
    const mockSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
    };
    const mockImageList = [
      {
        id: "fakeID",
        urls: {
          regular: "http://fake.com/image.jpg",
        },
        alt_description: "This is a fake alt",
      },
      {
        id: "fakeID2",
        urls: {
          regular: "http://fake.com/image2.jpg",
        },
        alt_description: "This is a fake alt",
      },
      {
        id: "fakeID3",
        urls: {
          regular: "http://fake.com/image3.jpg",
        },
        alt_description: "This is a fake alt",
      },
    ];
    const wrapper = mount(
      <SlickSlider settings={mockSettings} imageList={mockImageList} />
    );
    expect(wrapper.find("Slider").length).toEqual(1);
  });
});
