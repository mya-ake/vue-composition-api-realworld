import { createComponent } from '@vue/composition-api';

export default createComponent({
  props: {
    type: { default: 'button' },
    disabled: { default: false },
  },
  setup(_, { listeners }) {
    return { listeners: { ...listeners } };
  },
});
