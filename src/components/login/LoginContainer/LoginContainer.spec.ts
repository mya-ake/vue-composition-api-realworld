import { shallowMount, Wrapper } from '@vue/test-utils';
import LoginContainer from './LoginContainer.vue';

jest.mock('@/compositions/router', () => ({
  useRouter() {
    const router = {
      push() {},
    };
    return {
      router,
    };
  },
}));

describe('components/login/LoginContainer', () => {
  describe('mountable', () => {
    let wrapper: Wrapper<Vue>;

    beforeEach(() => {
      wrapper = shallowMount(LoginContainer, {
        stubs: {
          BaseErrorMessageList: true,
        },
      });
    });

    it('is vue instance', () => {
      expect(wrapper.isVueInstance()).toBe(true);
    });

    it('snapshot', () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
