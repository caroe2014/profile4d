import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MyFooter from './Footer';
import { Typography } from '@material-ui/core';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Footer', (): void => {
  it('Should exist Footer', (): void => {
    const wrapper = shallow(<MyFooter />);
    // eslint-disable-next-line no-unused-expressions
    expect(wrapper).to.exist;
  });
  it('Should Footer component have a children equal Copyright when is called', (): void => {
    const wrapper = shallow(<MyFooter />);
    const date: Date = new Date();
    const copyright: string = `Profile4D © ,${date.getFullYear()}, by Ricardo Gaefke`;
    expect(
      wrapper
        .find(Typography).props().children?.toString())
        .equal(copyright);
  });
});