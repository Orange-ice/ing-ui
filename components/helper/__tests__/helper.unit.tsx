import {joinClass} from '../index';

describe('joinClass 方法测试', () => {
  it('可接收参数测试', () => {
    expect(joinClass('a')).toEqual('a');
    expect(joinClass('a', 'b')).toEqual('a b');
    expect(joinClass('a', undefined, ' ')).toEqual('a');
    expect(joinClass('a', '中文', '__')).toEqual('a 中文 __');
  });
});
