import { render, screen } from '@testing-library/react';
import App from './App';
import {shallow} from 'enzyme';



describe("Does App Render correctly", () =>{
  
  const wrapper = shallow(<App/>);

  it("should render without crashing", ()=>{
    const mockResponse = { img_url: "http://fake.com/donuts.jpg" };
    fetch.mockResponseOnce(JSON.stringify(mockResponse));
    expect(wrapper).toMatchSnapshot();
  })
})
