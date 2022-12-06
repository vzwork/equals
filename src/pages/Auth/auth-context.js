import React from 'react';

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

function reducer(currentState, newState) {
  return {...currentState, ...newState};
}

function useAuthState() {
  const context = React.useContext(AuthStateContext);
  if (!context) throw new Error('useAuthState must be used in AuthProvider');

  return context;
}

function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext);
  if (!context) throw new Error('useAuthDispatch must be used in AuthProvider');

  return context;
}

const initialState = {
  status: 'idle',
  user: null,
  error: null,
};

function AuthProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {props.children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

async function setUser(dispatch, user) {
  try {
    dispatch({
      status: 'resolved',
      user: user,
      error: null,
    });
  } catch (error) {
    dispatch({status: 'rejected', error});
  }
}

function signOut(dispatch) {
  dispatch(initialState);
}

export {AuthProvider, useAuthState, useAuthDispatch, setUser, signOut};
