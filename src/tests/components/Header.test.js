import React from 'react'
// import ReactShallowRenderer from 'react-test-renderer/shallow'
// import toJSON from 'enzyme-to-json'
import { shallow } from 'enzyme'
import Header from '../../components/Header'

test('should render Header correctly', () => {
    // ################# What Enzyme is capable of ###############
    // const wrapper = shallow(<Header />)
    // expect(wrapper.find('h1').text()).toBe('Expensify')

    // ################# react test renderer #####################
    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()

    // ################# snapshot using Enzyme ###################
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
})