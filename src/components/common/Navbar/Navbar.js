import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import banner from "../../../images/ban.png"
import { Link } from "gatsby"
import { Container } from '@components/global';
import { FiMenu } from "react-icons/fi";
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
} from './style';
// import { ReactComponent as MenuIcon } from '@static/icons/menu.svg';


const NAV_ITEMS = [ ["About", 'Hakkında'], ["Projects", 'Projeler'], ["Travel",'Gezi'], ["Faq", 'Blog']];

class Navbar extends Component {
  state = { 
    mobileMenuOpen: false,
  };

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false });
    }
  };

  getNavAnchorLink = item => (
    <AnchorLink href={`#${item[0].toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item[1]}
    </AnchorLink>
  );

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item[0].toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem[0]}>{this.getNavAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  );

  render() {
    const { mobileMenuOpen } = this.state;

    return (
      <Nav {...this.props}>
        <StyledContainer>
          <Brand> 
        <Link href="" target="_self">
          <img src={banner} alt="banner" width="120px"/>
          </Link>
          </Brand>
          <Mobile>
            <button onClick={this.toggleMobileMenu} style={{backgroundColor:"#8bd8ed", color: 'black', border: "none", }}>
              <FiMenu />
            </button>
          </Mobile>
          <Mobile hide>{this.getNavList({})}</Mobile>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    );
  }
}

export default Navbar;
