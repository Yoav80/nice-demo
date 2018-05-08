
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';

// import { FETCH_DOG_REQUEST, FETCH_DOG_SUCCESS } from './balance/actionTypes';
import { BALANCE_FETCHED, BALANCE_FETCH_ERROR, BalanceUrl } from './actionTypes';

import loadBalance from './actions';

const data = {
  "account": {
      "name": "Chip Jules",
      "iban": "NL28ABNA0719200833",
      "balance": 3133.56
  },
  "currency": "EURO",
  "transactions": [
      {
        "from": "Wendy",
        "description": "Diner",
        "amount": 10.5,
        "date": "2016-01-10T09:20:00.000Z"
      },
      {
        "from": "Danny",
        "description": "Diner",
        "amount": 10.5,
        "date": "2016-01-10T09:14:00.000Z"
      }
  ]
}

describe('loadBalance action', () => {

    let store;
    let httpMock;
  
    const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));
  
    beforeEach(() => {
      httpMock = new MockAdapter(axios);
      const mockStore = configureMockStore();
      store = mockStore({});
    });
  
    it('load the a balance data', async () => {
      // given
      httpMock.onGet(BalanceUrl).reply(200, {
        data: data
      });
      // when
      loadBalance()(store.dispatch);
      await flushAllPromises();
      // then
      expect(store.getActions()).toEqual(
        [
          { payload: { data }, type: BALANCE_FETCHED }
        ]);
    })
  });