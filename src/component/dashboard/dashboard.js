import React from 'react'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import NavLinkBar from '../navlink/navlink'
import {Switch, Route} from 'react-router-dom'
import Boss from '../../component/boss/boss'
import './index.css'
function Genius() {
  return <h2>Genius page</h2>
}
function Msg() {
  return <h2>message page</h2>
}

function User() {
  return <h2>User page</h2>
}
@connect (
  state=>state
)
class Dashboard extends React.Component {

  render() {
    const user = this.props.user
    const navList = [
      {
        path:'/boss',
        text:'genius',
        icon: 'boss',
        title: 'Genius List',
        component: Boss,
        hide: user.type==='genius'
      },
      {
        path:'/genius',
        text:'boss',
        icon:'job',
        title: 'Boss List',
        component: Genius,
        hide: user.type==='boss'
      },
      {
        path:'/msg',
        text:'message',
        icon:'msg',
        title: 'Message List',
        component: Msg
      },
      {
        path:'/me',
        text:'me',
        icon:'user',
        title: 'User Center',
        component: User
      }
    ]
    return (
      <div>
        <NavBar className='fixed-header' mode='bard'>{navList.find(v=>v.path===this.props.location.pathname).title}</NavBar>
        <div style={{marginTop:45}}>
          <Switch>
            {navList.map(v=>(
              <Route key={v.path} path={v.path} component={v.component}></Route>
            ))}
          </Switch>
        </div>

        <NavLinkBar data={navList}></NavLinkBar>
      </div>
      )
  }
}

export default Dashboard
