import React, { Component, Fragment } from "react"
import Header from "./src/container/Header/Header"
import News from "./src/container/News/News"
import DefaultSelections from "./src/container/DefaultSelections/DefaultSelections"
import configureStore from "./src/store/storeIndex";
import SplashScreen from "./src/container/SplashScreen/SplashScreen"
import { Provider } from 'react-redux';

import { createStackNavigator, createAppContainer } from "react-navigation";

const store = configureStore()
store.subscribe(() => {
  const stores = store.getState()
  console.log(stores)

})

class NewsContainer extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <News />
      </Fragment>

    )
  }
}


const AppNavigator = createStackNavigator({
  SplashScreen,
  DefaultSelections,
  NewsContainer
},
  {
    defaultNavigationOptions: {
      header: null
    }
  });

let Root = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}