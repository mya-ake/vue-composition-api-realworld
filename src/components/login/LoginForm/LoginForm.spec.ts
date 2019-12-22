import { shallowMount, Wrapper } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('components/login/LoginForm', () => {
  describe('mountable', () => {
    let wrapper: Wrapper<Vue>;

    beforeEach(() => {
      wrapper = shallowMount(LoginForm, {});
    });

    it('is vue instance', () => {
      expect(wrapper.isVueInstance()).toBe(true);
    });

    it('snapshot', () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
