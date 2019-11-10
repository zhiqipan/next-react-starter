import React, { Component } from 'react'
import Layout from '../components/base/Layout'
import { Context } from '../context/context'

export default class Overview extends Component {
  static contextType = Context

  componentDidMount() {
    this.context.menu.select('home')
  }

  render() {
    return (
      <Layout>
        This is the home page
      </Layout>
    )
  }
}
