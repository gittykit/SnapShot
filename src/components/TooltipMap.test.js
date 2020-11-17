import React from "react";
import { shallow } from 'enzyme'
import TooltipMap from "./TooltipMap"

describe('TooltipMap', () => {
  it("renders", () => {
    const children = (<span>test</span>)
    const defaultProps = {
      lat: 23,
      lng: 20,
      title: "titletest",
      children
    }
    const wrapper = shallow(<TooltipMap {...defaultProps} />)

    expect(wrapper).toMatchSnapshot()
  });
})
