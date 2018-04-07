import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, Radio  , WhiteSpace, Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {register} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
@connect(
  state=>state.user,
  {register}
)
class Register extends React.Component {
    constructor(props) {
      super(props)
      this.state={
        user:'',
        pwd:'',
        repeatpwd:'',
        type:'genuis'
      }
      this.handleRegister = this.handleRegister.bind(this)
    }
    handleChange(key, val) {
      this.setState({
        [key]:val
      })
    }
    handleRegister() {
      this.props.register(this.state)
      console.log(this.state);
    }
  render() {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo></Logo>
        <h2>register page</h2>
        <List>
          {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
          <InputItem
            onChange={v=>this.handleChange('user', v)}
            >Username</InputItem>
          <WhiteSpace />
          <InputItem
            type='password'
            onChange={v=>this.handleChange('pwd', v)}
            >Password</InputItem>
          <WhiteSpace />
          <InputItem
            type='password'
            onChange={v=>this.handleChange('repeatpwd', v)}
            >Confirm Password</InputItem>
          <WhiteSpace />
          <RadioItem
            checked={this.state.type==='genuis'}
            onChange={()=> this.handleChange('type','genuis')}
            >
            realman
          </RadioItem>
          <WhiteSpace />
          <RadioItem checked={this.state.type==='boss'}
            onChange={()=> this.handleChange('type','boss')}
            >
            boss
          </RadioItem>
          <WhiteSpace />
          <Button type="primary" onClick={this.handleRegister}>Sign up</Button>
        </List>
      </div>
    )
  }
}

export default Register
