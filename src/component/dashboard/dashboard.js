import React from 'react'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import NavLinkBar from '../navlink/navlink'
import {Switch, Route} from 'react-router-dom'
import Boss from '../../component/boss/boss'
import Genius from '../../component/genius/genius'
import User from '../../component/user/user'
import {getMsgList, sendMsg, recvMsg} from '../../redux/chat.redux'
// function User() {
//   return <h2>User</h2>
// }
function Msg() {
  return <h2>message page</h2>
}
@connect (
  state=>state,
  {getMsgList,recvMsg}
)
class Dashboard extends React.Component {
  componentDidMount() {
    if(!this.props.chat.chatmsg.length) {
        this.props.getMsgList()
        this.props.recvMsg()
    }
  }
  render() {
    console.log(this.props);
    const user = this.props.user
    const pathname = this.props.location.pathname
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
        <NavBar className='fixed-header' mode='bard'>{navList.find(v=>v.path===pathname).title}</NavBar>
        <div style={{marginTop:45}}>
          <Switch>
            {navList.map(v=>(
              <Route key={v.path} path={v.path} component={v.component}></Route>
            ))}
          </Switch>
        </div>

        <NavLinkBar className='bottom-nav-bar' data={navList}></NavLinkBar>
      </div>
      )
  }
}

export default Dashboard
