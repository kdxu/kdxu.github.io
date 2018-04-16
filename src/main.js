/* @flow */
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from '~/components/App'

const root = document.querySelector('#root')

if (process.env.NODE_ENV === 'production') {
  ReactDOM.render(<App />, root)
} else {
  const render = async () => {
    const { default: App } = await import('./components/App')
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>,
      root
    )
  }
  render()
  if (module.hot) module.hot.accept('./components/App', render)
}
