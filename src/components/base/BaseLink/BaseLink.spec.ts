import { shallowMount, Wrapper } from '@vue/test-utils';
import BaseLink from './BaseLink.vue';

describe('components/contents/BaseLink', () => {
  describe('mountable', () => {
    let wrapper: Wrapper<Vue>;

    beforeEach(() => {
      wrapper = shallowMount(BaseLink, {
        propsData: {
          to: '/',
        },
        stubs: {
          RouterLink: true,
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

  describe('toによってタグの種類が変わる', () => {
    it('外部リンクのときはaタグ', () => {
      const wrapper = shallowMount(BaseLink, {
        propsData: {
          to: 'https://example.com',
        },
      });
      expect(wrapper.element.tagName).toBe('A');
    });

    it('内部リンクのときはrouter-link', () => {
      const wrapper = shallowMount(BaseLink, {
        propsData: {
          to: '/',
        },
        stubs: {
          RouterLink: true,
        },
      });
      expect(wrapper.element.tagName).toBe('ROUTERLINK-STUB');
    });
  });
});
