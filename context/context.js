import React, { Component } from 'react'

import { menuContextDefault } from './menu'

export const Context = React.createContext({ menu: menuContextDefault })

export class ContextProvider extends Component {
  select = menuItem => {
    this.setState(state => {
      state.menu.current = menuItem
      return { menu: { ...state.menu } }
    })
  }

  state = {
    menu: {
      current: '',
      select: this.select,
    },
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
