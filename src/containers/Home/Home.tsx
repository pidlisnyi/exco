import { BaseComponent } from '../../components/BaseComponent/BaseComponent';
import React, { Suspense } from 'react';
import { ItemsList } from '../../components/ItemsList/ItemsList';
import { FeedResourceServiceImpl } from '../../core/FeedResourceService';
import { Playbuzz } from '../../core/Playbuzz';

export class Home extends BaseComponent {
  readonly state = { items: [] };

  render() {
    return (
      <Suspense fallback={'Loading..'}>
        <ItemsList items={this.state.items}/>
      </Suspense>
    );
  }

  componentDidMount() {
    FeedResourceServiceImpl.getItems().then((res: any) => {
      const items = res.data.items;

      this.setState({ items });

      if (Playbuzz()) {
        Playbuzz().render(true);
      }
    });
  }
}
