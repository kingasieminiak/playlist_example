import React from 'react';
import PropTypes from 'prop-types';
import { initialState, reducer } from './reducer';

export const Store = React.createContext();

export function StoreProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <Store.Provider value={value}>
      {children}
    </Store.Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
