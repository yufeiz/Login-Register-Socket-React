import React from 'react'
import PropTypes from 'prop-types'
import {Card, WingBlank} from 'antd-mobile'
import {withRouter} from 'react-router-dom'

@withRouter
class UserCard extends React.Component {
  static propTypes = {
    userlist : PropTypes.array
  }
  handleClick(v) {
    this.props.history.push(`/chat/${v._id}`)
  }
  render() {
    const Body = Card.Body
    return (
      <WingBlank>
        {this.props.userlist.map(v=>(
          v.avatar?
          <Card
              key={v._id}
              onClick={()=>this.handleClick(v)}>
            <Card.Header
              title={v.user}
              thumb={require(`../img/${v.avatar}.png`)}
              extra={<span>{v.title}</span>}
              ></Card.Header>
            <Body>
              {v.type==='boss'?<div>Company:{v.company}</div>:null}
              {v.type==='boss'?<div>Salary:{v.salary}</div>:null}
              {v.desc.split('\n').map(d=>(
                <div key={d}>{d}</div>
              ))}
            </Body>
          </Card>:null
        ))}
      </WingBlank>
    )
  }
}

export default UserCard
