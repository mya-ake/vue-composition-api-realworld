import { shallowMount, Wrapper } from '@vue/test-utils';
import BaseInput from './BaseInput.vue';

describe('components/base/BaseInput', () => {
  describe('mountable', () => {
    let wrapper: Wrapper<Vue>;

    beforeEach(() => {
      wrapper = shallowMount(BaseInput, { propsData: { value: '' } });
    });

    it('is vue instance', () => {
      expect(wrapper.isVueInstance()).toBe(true);
    });

    it('snapshot', () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
