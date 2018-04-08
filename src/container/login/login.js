import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
import chatForm from '../../component/chat-form/chat-form'
//
// function WrapperHello(Comp) {
//   class WrapComp extends Comp {
//     componentDidMount() {
//       console.log('HOC new cycle, loaded');
//     }
//     render() {
//       return <Comp></Comp>
//     }
//   }
//   return WrapComp
// }
//
// // @WrapperHello
// class Hello extends React.Component {
//   render() {
//     return <h2>hello imooc I love React&Redux</h2>
//   }
// }

//
// Hello = WrapperHello(Hello)
@connect(
  state=>state.user,
  {login}
)
@chatForm
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.register = this.register.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  register() {
    this.props.history.push('/register')
  }
  handleLogin() {
    this.props.login(this.props.state)
  }
  render() {
    return (
      <div>
        {this.props.redirectTo&&this.props.redirectTo!=='/login' ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo></Logo>
        <WingBlank>
          <List>
            {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
            <InputItem
              onChange={v=>this.props.handleChange('user',v)}
              >Account</InputItem>
            <InputItem
              onChange={v=>this.props.handleChange('pwd',v)}
              type='password'
              >Password</InputItem>
          </List>
          <WhiteSpace />
          <Button onClick={this.handleLogin} type='primary'>login</Button>
          <WhiteSpace />
          <Button onClick={this.register} type='primary'>sing up</Button>
        </WingBlank>

      </div>

    )

  }
}

export default Login
