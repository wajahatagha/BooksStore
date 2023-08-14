import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import AppNavigation from '../navigation/AppNavigation';
import { Provider } from 'react-redux'
import store from '../store';
const index = () => {
  return (
    <Provider store={store}>
    <AppNavigation />
    </Provider>
  )
}

export default index