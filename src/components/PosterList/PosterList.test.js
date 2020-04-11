import React from "react";
import { PosterList } from "./PosterList";
import { shallow } from "enzyme";
import SearchPoster from "../SearchPoster/SearchPoster";
import PosterItem from "../PosterItem/PosterItem";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../../reducers/index";

const store = createStore(reducers, applyMiddleware(thunk));

describe("App component", () => {
  it("renders  searchposter child component", () => {
    const wrapper = shallow(<PosterList store={store} />);
    expect(wrapper.contains(<SearchPoster />)).toEqual(true);
  });
  it("renders  PostItem child component", () => {
    const wrapper = shallow(<PosterList store={store} />);
    expect(wrapper.contains(<PosterItem />)).toEqual(true);
  });
  it("renders h2 title tage", () => {
    const wrapper = shallow(<PosterList store={store} />);
    expect(wrapper.contains(<h2>Welcome to Poster search!</h2>)).toEqual(true);
  });
});
