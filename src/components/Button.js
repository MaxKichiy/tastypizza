import React from 'react';
import classNames from 'classnames';

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={classNames('button', props.className)}
    >
      {props.children}
    </button>
  );
}

export default Button;
