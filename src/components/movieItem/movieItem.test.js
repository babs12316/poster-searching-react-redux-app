import React from "react";
import MovieItem from "./movieItem";
import { shallow } from "enzyme";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../../reducers/index";

const store = createStore(reducers, applyMiddleware(thunk));

describe("App component", () => {
 
 it("has movies class", () => {
    const wrapper = shallow(<MovieItem store={store} />);
    wrapper.find(".movies").forEach((node) => {
      expect(node.hasClass("movies")).to.equal(true);
    });
  });

  it("on click rating gets active class", () => {
    const wrapper = shallow(<MovieItem store={store} />);
    wrapper.find(".movies span").forEach((node) => {
      node.simulate("click");
      expect(node.hasClass("active")).to.equal(true);
    });
  });
});
