import React from 'react'
import PropTypes from 'prop-types'
import {Card, WingBlank} from 'antd-mobile'
class UserCard extends React.Component {
  static propTypes = {
    userlist : PropTypes.array
  }
  render() {
    const Body = Card.Body
    return (
      <WingBlank>
        {this.props.userlist.map(v=>(
          v.avatar?<Card key={v._id}>
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
