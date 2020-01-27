import React from 'react';
import './HamburgerBtn.scss';
import { BaseComponent } from '../BaseComponent/BaseComponent';

export class HamburgerBtn extends BaseComponent {
  public render() {
    return (
      <button className="hamburger-btn">
        <div className="hamburger-btn__line"/>
        <div className="hamburger-btn__line"/>
        <div className="hamburger-btn__line"/>
      </button>
    )
  }
}
