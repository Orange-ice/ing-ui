import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react';
import {Icon} from '../../index';

describe('Icon 组件测试', () => {
  it('快照测试', () => {
    const dom = renderer.create(<Icon name="tiger"/>).toJSON();
    expect(dom).toMatchSnapshot();
  });

  it('name props 测试', () => {
    const {container} = render(<Icon name="tiger"/>);
    expect(container.querySelector('svg use')).not.toEqual(null);
    expect(container.querySelector('svg use')!.getAttribute('xlink:href')).toEqual('#tiger');
  });

  it('click 事件测试', () => {
    const onClick = jest.fn();
    const {container} = render(<Icon name="tiger" onClick={onClick}/>);
    fireEvent.click(container.querySelector('svg') as SVGElement);
    expect(onClick).toBeCalledTimes(1);
  });
});
