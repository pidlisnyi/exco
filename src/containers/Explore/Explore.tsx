import React from 'react';
import { BaseComponent } from '../../components/BaseComponent/BaseComponent';

export class Explore extends BaseComponent {
  state = { header: 'Explore' };

  render() {
    return (
      <h1>
        {this.state.header}
      </h1>
    );
  }
}
