import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
  <Aux>
    <Toolbar />
    <main>
      {props.children}
    </main>
  </Aux>
);

export default layout;
