import React from 'react';
import './index.scss';
import {Button} from '../components';

const App = () => {
  return (
    <div className="container">
      <section>
        <h2>Button 组件</h2>
        <div className="wrapper">
          <Button/>
        </div>
      </section>
    </div>
  );
};

export default App;
