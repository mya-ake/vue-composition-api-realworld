---
to: src/components/<%= category %>/<%= name %>/<%= name %>.spec.ts
---
import { shallowMount, Wrapper } from '@vue/test-utils';
import <%= name %> from './<%= name %>.vue';

describe('components/<%= category %>/<%= name %>', () => {
  describe('mountable', () => {
    let wrapper: Wrapper<Vue>;

    beforeEach(() => {
      wrapper = shallowMount(<%= name %>, {});
    });

    it('is vue instance', () => {
      expect(wrapper.isVueInstance()).toBe(true);
    });

    it('snapshot', () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
