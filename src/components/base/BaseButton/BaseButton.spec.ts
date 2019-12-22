import { shallowMount, Wrapper } from '@vue/test-utils';
import BaseButton from './BaseButton.vue';

describe('components/base/BaseButton', () => {
  describe('mountable', () => {
    let wrapper: Wrapper<Vue>;

    beforeEach(() => {
      wrapper = shallowMount(BaseButton, {});
    });

    it('is vue instance', () => {
      expect(wrapper.isVueInstance()).toBe(true);
    });

    it('snapshot', () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
