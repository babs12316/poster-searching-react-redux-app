import React from "react";
import PostDetail from "./PosterDetail";
import  {mount}  from "enzyme";
import  {expect}  from 'chai';

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../../reducers/index";

const store = createStore(reducers, applyMiddleware(thunk));

describe("App component", () => {
 
 it("renders image", () => {
    const match = { params:'5731f0d3d462b8029237fecc'}
    const wrapper = mount(<PostDetail store={store} match={match} />);
      expect(wrapper.exists('img')).to.equal(true);
  });
  it("renders paragraph", () => {
    const match = { params:'5731f0d3d462b8029237fecc'}
    const wrapper = mount(<PostDetail store={store} match={match} />);
    expect(wrapper.find('p')).to.have.lengthOf(1);
  });


 
});
