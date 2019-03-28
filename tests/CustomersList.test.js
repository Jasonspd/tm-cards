import React from 'react'
import CustomersList from '../src/components/CustomersList'

import Enzyme from 'enzyme';
import {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

describe('<CustomersList />', () => {
    it('renders .customersWrapper', () => {
      const wrapper = shallow(<CustomersList />)
      expect(wrapper.find('.customersWrapper')).to.have.lengthOf(1)
    })
})