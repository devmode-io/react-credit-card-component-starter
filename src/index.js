import { render } from 'react-dom';
import React from 'react';
import CreditCard from './CreditCard';

const mountNode = document.getElementById("app");

render(
    <div className='demo-container'><CreditCard /></div>,
    mountNode
);