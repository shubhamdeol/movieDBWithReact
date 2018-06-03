import React from 'react';
import Styles from './Button.css';

const button = (props) => (
    <button onClick = {props.clicked} className = {[Styles.Button, Styles[props.btnType]].join(" ")}>
        {props.children}
    </button>
);
export default button;