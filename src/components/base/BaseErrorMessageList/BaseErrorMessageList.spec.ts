import { shallowMount, Wrapper } from '@vue/test-utils';
import BaseErrorMessageList from './BaseErrorMessageList.vue';

describe('components/base/BaseErrorMessageList', () => {
  describe('mountable', () => {
    let wrapper: Wrapper<Vue>;

    beforeEach(() => {
      wrapper = shallowMount(BaseErrorMessageList, {
        propsData: { errors: [{ code: 'test', message: 'error message' }] },
      });
    });

    it('is vue functional component', () => {
      expect(wrapper.isVueInstance()).toBe(false);
      // @ts-ignore
      expect(wrapper.isFunctionalComponent).toBe(true);
    });

    it('snapshot', () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
