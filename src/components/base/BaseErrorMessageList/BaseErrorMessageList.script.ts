import { createComponent } from '@vue/composition-api';

export default createComponent({
  props: {
    messages: {
      required: true,
    },
  },
});
