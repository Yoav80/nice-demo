import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme'
import moment from 'moment'

import BalanceListRow from './BalanceListRow';

const mock =  {
  from: "test", 
  date: "2016-01-10T09:14:00.000Z", 
  description: "salary", 
  amount: 257,
}
const currency = 'Euro';

const formattedDate = moment(new Date(mock.date)).format('LLLL');


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BalanceListRow rowData={mock} currency={currency}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('displays the right amount and currency', () =>{
  const div = document.createElement('div');
  const wrapper = mount(<BalanceListRow rowData={mock} currency={currency}/>, div);
  const val = wrapper.find('.amount .badge').first().text();
  wrapper.unmount()  
  expect(val).toEqual(mock.amount.toString() + ' ' + currency);
})

it('displays the right date', () =>{
  const div = document.createElement('div');
  const wrapper = mount(<BalanceListRow rowData={mock} currency={currency}/>, div);
  const value = wrapper.find('.formattedDate').first().text();
  wrapper.unmount();
  expect(value).toEqual(formattedDate);
})