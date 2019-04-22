import React, { Component, Fragment } from "react"
import Header from "./src/container/Header/Header"
import News from "./src/container/News/News"

import configureStore from "./src/store/storeIndex";
import { Provider } from 'react-redux';

const store = configureStore()
store.subscribe(() => {
  const stores = store.getState()
  console.log(stores)

})
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <News />
        </Fragment>
      </Provider>

    )
  }
}