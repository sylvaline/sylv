import React, { Component } from 'react'
import CloseButton from './CloseButton'
import SideDrawer from './SideDrawer'
import ToogleButton from './ToogleButton'
import SideDrawerBackDrop from './SideDrawerBackDrop'

export class MenuItem extends Component {

  state = {
    isOnMobile :false
  }

  handleMobileMenuOpen = () =>{
    this.setState({
      isOnMobile : true
    })
  }

  handleClosingMenu = () =>{
    this.setState({
      isOnMobile : false
    })
  }

  render() {
    if(this.state.isOnMobile){
      return (
        <div>
          <CloseButton closeMenu={this.handleClosingMenu}/>
          <SideDrawer isBtnOn={this.state.isOnMobile}/>
          <SideDrawerBackDrop closeMenu={this.handleClosingMenu} />
        </div>
      )
    } else {
      return (
        <div onClick={this.handleMobileMenuOpen}>
          <ToogleButton/>
        </div>
      )
    }
    
  }
}

export default MenuItem
