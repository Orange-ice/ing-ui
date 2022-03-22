import React from 'react';
import './index.scss';
import {Button, Icon} from '../components';

const App = () => {
  return (
    <div className="container">
      <section>
        <h2>Button 组件</h2>
        <div className="wrapper">
          <Button>Default</Button>
          <Button colorScheme="blue">Default</Button>
          <Button colorScheme="orange">Default</Button>
          <Button colorScheme="red">Default</Button>
          <Button colorScheme="green">Default</Button>
        </div>
      </section>

      <section>
        <h2>Icon 组件</h2>
        <div className="wrapper">
          <Icon name="tiger" style={{width: '36px', height: '36px'}}/>
        </div>
      </section>
    </div>
  );
};

export default App;
