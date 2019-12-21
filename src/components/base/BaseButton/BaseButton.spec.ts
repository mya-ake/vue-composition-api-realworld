import { shallowMount, Wrapper } from '@vue/test-utils';
import BaseButton from './BaseButton.vue';
import { useButton } from './BaseButton.script';

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

  describe('useButton', () => {
    describe('onClick', () => {
      it('onClickの関数が実行中はdisabledになる', () => {
        const onClickMock = jest
          .fn()
          .mockReturnValue(new Promise(resolve => resolve()));
        const { disabled, onClick } = useButton(onClickMock);
        onClick({} as any);
        expect(disabled.value).toBe(true);
      });
    });
  });
});
