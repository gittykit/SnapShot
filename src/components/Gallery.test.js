import React from "react";
import { shallow } from 'enzyme'
import Gallery from "./Gallery"
import NoImages from "./NoImages"
import Image from "./Image"

describe('Gallery', () => {
  describe('when results are empty', () => {
    it("should render NoImages", () => {
      const defaultProps = {
        data: []
      }
      const wrapper = shallow(<Gallery {...defaultProps} />)

      expect(wrapper.find(NoImages)).toHaveLength(1)
    });
  });
  describe('when there are results', () => {
    it("should render Image", () => {
      const defaultProps = {
        data: [
          {
            "id": "50614020268",
          },
          {
            "id": "50614835722",
          },

        ]
      }
      const wrapper = shallow(<Gallery {...defaultProps} />)

      expect(wrapper.find(Image)).toHaveLength(2)
    });
  });
});


