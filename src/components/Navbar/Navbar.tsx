import React from 'react';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import avatar from '../../assets/png/avatar.png';

import './Navbar.scss'
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { HamburgerBtn } from '../SideMenu/HamburgerBtn';
import { Link } from 'react-router-dom';

export class Navbar extends BaseComponent {
    public render() {
        return (
          <header className="topbar">
              <nav className="topbar__navigation">
                  <Link to="/"><div className="topbar__logo"><Logo/></div></Link>
                  <div className="nav-middle-space"/>
                  <div className="topbar__navigation-items">
                      <ul>
                          <li>
                              <Link to="/explore">Explore</Link>
                          </li>
                          <li>
                              <Link to="/subscriptions">Subscriptions</Link>
                          </li>
                          <li>
                              <Link to="/channels">Channels</Link>
                          </li>
                          <li><img alt="" src={avatar}/></li>
                      </ul>
                  </div>
                  <div>
                      <HamburgerBtn/>
                  </div>
              </nav>
          </header>
        );
    }
}
