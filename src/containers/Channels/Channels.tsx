import React from 'react';
import { BaseComponent } from '../../components/BaseComponent/BaseComponent';

export class Channels extends BaseComponent {
  state = { header: 'Channels' };

  render() {
    return (
      <h1>
        {this.state.header}
      </h1>
    );
  }
}
