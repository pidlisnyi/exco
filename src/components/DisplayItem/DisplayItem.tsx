import React, { ReactText } from 'react';
import { Link } from 'react-router-dom';
import VideoSourceTypes from '../../core/VideoSourceTypes'
import './DisplayItem.scss'
import { BaseComponent } from '../BaseComponent/BaseComponent';

export class DisplayItem extends BaseComponent<{ itemData: any }> {
    readonly dateStrOption = { year: 'numeric', month: 'short', day: 'numeric' };

    isValidItem({ type, source, views, length, date }: any): boolean {
        return type && source && views && length && date;
    }

    numberToReadableText(num: number): ReactText {
        const number = Math.abs(Number(num));
        return number >= 1.0e+9 ?
          number / 1.0e+9 + "B" : number >= 1.0e+6 ?
            Math.round((number / 1.0e+6) * 10) / 10 + "M" : number >= 1.0e+3 ?
              number / 1.0e+3 + "K" : number;
    }

    secondsToTimeText(num: number): string {
        let minutes = Math.floor(num / 60);
        let seconds = num - minutes * 60;

        return `${minutes}:${seconds}m`;
    }

    render() {
        const videoSourceConfig = VideoSourceTypes.find(source => {
            return this.props.itemData.source && source.name === this.props.itemData.source;
        });

        if (this.isValidItem(this.props.itemData)) {
            const dateStr = new Date(this.props.itemData.date).toLocaleDateString("en-US", this.dateStrOption);
            const readableViewsNumber = this.numberToReadableText(this.props.itemData.views);
            const videoDuration = this.secondsToTimeText(this.props.itemData.length);

            return (
              <div className="display-item">
                  {videoSourceConfig?.getPlayer(this.props.itemData[videoSourceConfig.id])}
                  <div className="display-item__details">
                      <Link
                        to={'/feed/' + this.props.itemData[videoSourceConfig ? videoSourceConfig.id : '']}>{this.props.itemData.title}</Link>
                      <div className="display-item__info">
                          <p>{`${dateStr} - ${readableViewsNumber}`}</p>
                      </div>
                      <div className="display-item__bottom-bar">
                          <div>{videoSourceConfig?.getIcon()}</div>
                          <div className="display-item__bottom-bar__duration">{videoDuration}</div>
                      </div>
                  </div>
              </div>

            );
        }
        return (
          <div className="display-item error-item">
              <div>VIDEO NOT AVAILABLE</div>
          </div>
        );
    }
}
