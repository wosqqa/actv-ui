import { mount } from '@vue/test-utils';
import NavHeader from '../../nav-header';

test('render demo header', () => {
  const wrapper = mount(NavHeader);
  expect(wrapper).toMatchSnapshot();
});
