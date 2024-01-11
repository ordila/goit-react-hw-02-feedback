import { Component } from 'react';
import css from './Buttons.module.css';
export class Button extends Component {
  render() {
    const { handleClick, children, name } = this.props;
    return (
      <button
        name={name}
        className={css.button_item}
        onClick={handleClick}
        type="button"
      >
        {children}
      </button>
    );
  }
}
