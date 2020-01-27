import { Component } from 'react';
import { Subject } from 'rxjs';

export class BaseComponent<P = any, S = any> extends Component<P, S> {
  readonly destroyed$ = new Subject<boolean>();

  public componentDidMount(): void {
    window.scrollTo(0, 0);
  }

  componentWillUnmount(): void {
    this.destroyed$.next(true);
  }
}
