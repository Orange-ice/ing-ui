import React from 'react';
import {Button} from '../../index';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react';

describe('Button 组件测试', () => {
  it('快照测试', () => {
    const dom = renderer.create(<Button colorScheme="blue" variant="outline">Test</Button>);
    expect(dom).toMatchSnapshot();
  });

  it('props 测试', () => {
    const dom = renderer.create(<Button colorScheme="blue" variant="outline">Test</Button>);
    const instance = dom.root;
    expect(instance.findByType(Button).props.colorScheme).toBe('blue');
    expect(instance.findByType(Button).props.variant).toBe('outline');
  });

  it('click 事件', () => {
    const fn = jest.fn();
    const {container} = render(<Button onClick={fn}>Test</Button>);
    fireEvent.click(container.querySelector('button') as HTMLButtonElement);
    expect(fn).toBeCalledTimes(1);
  });
});
