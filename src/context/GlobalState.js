import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer.js'

//Inital state:
const initialState = {
    transactions: [ ]
}

//Create context:
export const GlobalContext = createContext(initialState);

// In order to have the initial state visible to all we need a Provider component that wraps everything up:
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);//'dispatch' to call a reducer action, it comes from usereducer

    //Actions that make a call to reducer:

    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    function addTransaction (transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value= {{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children} 
        </GlobalContext.Provider>
    )
}
