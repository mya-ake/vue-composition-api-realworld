import { createComponent } from '@vue/composition-api';

export default createComponent({
  props: {
    errors: {
      required: true,
    },
  },
});
