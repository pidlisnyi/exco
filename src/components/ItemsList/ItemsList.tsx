import React from 'react';
import VideoSourceTypes from '../../core/VideoSourceTypes';
import './ItemsList.scss'
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { DisplayItem } from '../DisplayItem/DisplayItem';
import { pathEq } from 'ramda';

export class ItemsList extends BaseComponent<{ items: any }> {

  get items() {
    return this.supportedItems(this.props.items)
      .map((item: any, index: any) =>
        <DisplayItem key={item.videoId ? item.videoId : index} itemData={item}/>);
  }

  render() {
    return (
      <div className="items-list">
        <div className="item-list__header">
          <h1>Most viewed</h1>
        </div>
        <div className="items-list__content">{this.items}</div>
      </div>
    );
  }

  private supportedItems = (items: any) => {
    return items.filter(({source}: any) => !!VideoSourceTypes.find(pathEq(['name'], source)));
  };
}
