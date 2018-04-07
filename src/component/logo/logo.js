import React from 'react'
import logoImg from './minions.png'
import './logo.css'
class Logo extends React.Component {
  render() {
    return (
      <div className="logo-container">
        <img className="logo-image" src={logoImg} alt="" />
      </div>
    )
  }
}

export default Logo
