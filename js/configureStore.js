
'use strict';

import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'

import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import reducer from './reducers'
export default function configureStore(onCompletion:()=>void):any {
	
	
	let store = createStore(reducer);
	persistStore(store, {storage: AsyncStorage}, onCompletion);
	
	return store
}
