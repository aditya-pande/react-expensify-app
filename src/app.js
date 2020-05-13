import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense, removeExpense, editExpense } from './actions/expenses'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'


const store = configureStore()

store.dispatch(addExpense({ description: 'Water bill', amount: 1000 }))
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 100 }))
store.dispatch(addExpense({ description: 'Rent', amount: 45000 }))



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)




ReactDOM.render(jsx, document.getElementById('app'))
