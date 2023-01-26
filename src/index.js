import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import combineReducers from './reducers/index'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
	<Provider store={configureStore({ reducer: combineReducers })}>
		<App />
	</Provider>
)
