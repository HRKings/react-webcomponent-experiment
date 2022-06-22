import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';

import { Button } from './components/Button/Button';

const ButtonWC = reactToWebComponent(Button, React, ReactDOM);

customElements.define("react-button", ButtonWC);
