import React from 'react';
import { BaseComponent } from '../../components/BaseComponent/BaseComponent';
import { DisplayItem } from '../../components/DisplayItem/DisplayItem';
import { FeedResourceServiceImpl } from '../../core/FeedResourceService';
import { Playbuzz } from '../../core/Playbuzz';
import { Link } from 'react-router-dom';

export class Details extends BaseComponent {
  readonly state = { item: {} };

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <DisplayItem itemData={this.state.item}/>
      </div>
    );
  }

  componentDidMount() {
    FeedResourceServiceImpl.getItems().then((res: any) => {
      const id = window.location.pathname.split('/')[2];
      const items = res.data.items;
      const item = items.find((it: any) => it.videoId === id);

      this.setState({ item });

      if (Playbuzz()) {
        Playbuzz().render(true);
      }
    });
  }
}
