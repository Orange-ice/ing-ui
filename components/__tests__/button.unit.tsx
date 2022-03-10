import {Button} from '../index';
import renderer from 'react-test-renderer';
import React from 'react';

describe('Button 组件测试', () => {
  it('快照检测', () => {
    const dom = renderer.create(<Button/>);
    expect(dom).toMatchSnapshot();
  });
});
