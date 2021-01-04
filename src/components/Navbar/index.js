import * as React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'

const { Header } = Layout

const Navbar = () => {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Link to='/'>
        <div className='logo' />
      </Link>
      <Menu className='nav' theme='dark' mode='horizontal'>
        <Menu.Item key='1'>
          <Link to='/about'>About</Link>
        </Menu.Item>
        <Menu.Item key='2'>nav 2</Menu.Item>
        <Menu.Item key='3'>nav 3</Menu.Item>
      </Menu>
    </Header>
  )
}

export default Navbar