import React, { Component } from 'react';
import { ISectionProps } from './Section.types';

export class Section extends Component<ISectionProps> {
  render() {
    const { title, children } = this.props;
    return (
      <>
        <h2>{title}</h2>
        <div>{children}</div>
      </>
    );
  }
}
