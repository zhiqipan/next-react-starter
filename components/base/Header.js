import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { Link } from '../../routes'
import { Context } from '../../context/context'

export default class Header extends Component {
  static contextType = Context

  state = {
    menuActive: this.context.menu.current,
  }

  getClassName = (item) => {
    if (item === this.state.menuActive) return 'item active'
    return 'item'
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    if (this.context && this.context.menu && this.context.menu.current) {
      if (this.context.menu.current !== this.state.menuActive) {
        this.setState({ menuActive: this.context.menu.current })
      }
    }
  }

  render() {
    // do NOT use menu item with href (e.g. <Menu.Item href='/articles/new'>+</Menu.Item>),
    // this reloads the page and react context will be lost,
    // while link with route will handle this elegantly
    return (
      <Menu>
        <Link route='/'><a className={this.getClassName('home')}>Home</a></Link>

        <Menu.Menu position='right'>
          <a className='item' href='https://github.com/zhiqipan' target='_blank'><Icon name='github' />GitHub</a>
        </Menu.Menu>
      </Menu>
    )
  }
}
