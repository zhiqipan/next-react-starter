import App from 'next/app'
import React from 'react'
import '../styles/style.scss'
import { ContextProvider } from '../context/context'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    )
  }
}
