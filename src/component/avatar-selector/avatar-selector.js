import React from 'react'
import {Grid, List} from 'antd-mobile'
class AvatarSelector extends React.Component{

  constructor(props) {
    super(props)
    this.state={}
  }
  render() {
    const avatarList = 'man,woman,boy,girl,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
            .split(',')
            .map(v=>({
              icon:require(`../img/${v}.png`),
              text:v
            }))
    const gridHeader = this.state.text
                      ?(<div>
                        Select
                        <img style={{width:20}} src={this.state.icon} alt=""/>
                      </div>)
                      : <div>Please select avatar</div>
    return (
      <div>
        <List renderHeader={()=>gridHeader}>
          <Grid data={avatarList} columnNum={5}
            onClick={elem=>{
              this.setState(elem)
              this.props.selectAvatar(elem.text)
            }} />
        </List>
      </div>
    )
  }
}

export default AvatarSelector
