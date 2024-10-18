import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types"; // Import PropTypes

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Define PropTypes for the 'StateProvider' component
StateProvider.propTypes = {
  reducer: PropTypes.func.isRequired,
  initialState: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export const useStateValue = () => useContext(StateContext);
