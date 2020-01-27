import React from 'react';
import { BaseComponent } from '../../components/BaseComponent/BaseComponent';

export class Subscriptions extends BaseComponent {
  state = { header: 'Subscriptions' };

  render() {
    return (
      <h1>
        {this.state.header}
      </h1>
    );
  }
}
