import React from 'react'
import {connect} from 'react-redux'
import { Result, List, WhiteSpace, Button, Modal } from 'antd-mobile'
import browserCookie from 'browser-cookies'
import {logoutSubmit} from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'
@connect(
  state=>state.user,
  {logoutSubmit}
)
class User extends React.Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }
  logout() {
    const alert = Modal.alert

    alert('logout','Confirmed Logout?', [
      {text: 'Cancel', onPress: ()=> console.log('concel')},
      {text: 'Confirm', onPress: () => {
        browserCookie.erase('userid')
        this.props.logoutSubmit()
      }}
    ])
    // browserCookie.erase('userid')
    // console.log('logout');
  }
  render() {
    const props = this.props
    console.log(props);
    const Item = List.Item
    const Brief = Item.Brief
    console.log('props.user', props.user);
    return  props.user ? (
      <div>
        <Result
          img={<img src={require(`../img/${this.props.avatar}.png`)} style={{width:50}} alt=""></img>}
          title={this.props.user}
          message={props.type==='boss'?props.company:null}
        />
      <List renderHeader={()=>'Brief'}>
      <Item
        multipleLine
        >
        {props.title}
        {this.props.desc.split('\n').map(v=><Brief key={v}>{v}</Brief>)}
        {props.salary?<Brief>Salary:{props.salary}</Brief>:null}
      </Item>
      </List>
      <WhiteSpace></WhiteSpace>
        <Button onClick={this.logout}>Logout</Button>
      </div>
    ) : <Redirect to={props.redirectTo} />
  }
}

export default User
