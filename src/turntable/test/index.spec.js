import { mount } from '@vue/test-utils';
import Turntable from '../../turntable';

test('render demo turntable', () => {
  const wrapper = mount(Turntable);
  expect(wrapper).toMatchSnapshot();
});
