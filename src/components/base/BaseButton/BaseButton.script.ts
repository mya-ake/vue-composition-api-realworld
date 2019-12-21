import { createComponent, reactive, computed } from '@vue/composition-api';
import { BaseButtonType } from './BaseButton.type';

export const useButton = (clickFunc: BaseButtonType.Props['onClick']) => {
  const localState = reactive({ processing: false });
  const disabled = computed(() => localState.processing);

  const onClick = async (event: Event) => {
    localState.processing = true;
    await clickFunc(event);
    localState.processing = false;
  };

  return {
    disabled,
    onClick,
  };
};

export default createComponent({
  props: {
    type: {
      default: 'button',
    },
    onClick: {
      default: () => {},
    },
  },
  setup(props: BaseButtonType.Props) {
    const { disabled, onClick } = useButton(props.onClick);
    return {
      disabled,
      clickListener: onClick,
    };
  },
});
