import React from "react";
import SlickSlider from "./SlickSlider";
import { shallow } from "enzyme";

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
    const wrapper = shallow(
      <SlickSlider settings={mockSettings} imageList={mockImageList} />
    );
    expect(wrapper.find("Slider").length).toEqual(1);
  });
  it("Should not crash when passed an empty array", () => {
    const mockImageList = [];
    const mockSettings = {
      dots: true,
      infinite: true,
    };
    shallow(<SlickSlider settings={mockSettings} imageList={mockImageList} />);
  });
  it("Should not crash when passed an empty object", () => {
    const mockImageList = [1, 2, 3];
    const mockSettings = {};
    shallow(<SlickSlider settings={mockSettings} imageList={mockImageList} />);
  });
});
