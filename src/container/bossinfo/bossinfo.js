import React from 'react'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import {connect} from 'react-redux'
import {update} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
@connect(
  state=>state.user,
  {update}
)
class BossInfo extends React.Component{

    constructor(props) {
      super(props)
      this.state = {
        title:'',
        desc:'',
        company:'',
        salary:''
      }
    }
    onChange(key, val) {
      this.setState({
        [key]:val
      })
    }
      render() {
        const path = this.props.location.pathname
        const redirect = this.props.redirectTo
      return (
      <div>
        {redirect&&redirect!==path?<Redirect to={this.props.redirectTo} />:null}
          <NavBar
            mode="dark"
            >Boss Complete Page</NavBar>
          <AvatarSelector selectAvatar={(imgname)=>{
              this.setState({
                  avatar:imgname
                })
            }}></AvatarSelector>
          <InputItem onChange={(v)=>this.onChange('title',v)}>
            Position
          </InputItem>
          <InputItem onChange={(v)=>this.onChange('company',v)}>
            Company
          </InputItem>
          <InputItem onChange={(v)=>this.onChange('salary',v)}>
            Salary
          </InputItem>
          <TextareaItem
            onChange={(v)=>this.onChange('desc',v)}
            rows={3}
            autoHeight
            title='Description'>
          </TextareaItem>
          <Button
            onClick={()=> {
              this.props.update(this.state)
            }}
             type='primary'>Save</Button>
      </div>
    )
  }
}

export default BossInfo
