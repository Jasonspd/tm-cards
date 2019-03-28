import React from 'react'
import AllCards from '../src/components/AllCards'

import Enzyme from 'enzyme';
import {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

describe('<AllCards />', () => {
    it('renders .cardsWrapper', () => {
      const wrapper = shallow(<AllCards />)
      expect(wrapper.find('.cardsWrapper')).to.have.lengthOf(1)
    })
})