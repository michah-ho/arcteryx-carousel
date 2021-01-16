import React from "react";
import App from "./App";
import { mount, shallow } from "enzyme";

describe("<App />", () => {
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
  const mockReturn = {
    state: {
      data: mockImageList,
      loading: false,
    },
    setState: jest.fn()
  }
  const mockUseFetch = jest.fn().mockReturnValue(mockReturn);
  const wrapper = mount(<App fetchHook={mockUseFetch} />);

  it("should render without crashing and match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Should return div of loading when loading is set to true", () => {
    const mockLoadingState = {
      state: {
        data: [],
        loading: true,
      },
      setState: jest.fn()
    };
    const mockUseFetchLoading = jest.fn().mockReturnValue(mockLoadingState);
    const wrapper2 = shallow(<App fetchHook={mockUseFetchLoading} />);
    expect(wrapper2.find("div").text()).toEqual(" Loading data...");
  });

  it("Should display a sorry message when there are no items in the array", () => {
    const mockEmptyDataState = {
      state: {
        data: [],
        loading: false,
      },
      setState: jest.fn()
    };

    const mockUseFetchEmptyData = jest.fn().mockReturnValue(mockEmptyDataState);
    const wrapper3 = shallow(<App fetchHook={mockUseFetchEmptyData} />);
    expect(wrapper3.find("div").text()).toEqual(" Sorry there are no images to display");
  });

  it("Should display the error when API is down", () => {
    const mockAPIError = {
      state: {
        data: [],
        loading: false,
      },
      errState: "API is down",
      setState: jest.fn()
    };
    const mockUseFetchEmptyData = jest.fn().mockReturnValue(mockAPIError);
    const wrapper4 = shallow(<App fetchHook={mockUseFetchEmptyData} />);
    expect(wrapper4.find("div").text()).toEqual("API is down");
  });
});
