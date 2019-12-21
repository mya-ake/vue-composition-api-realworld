import { createComponent } from '@vue/composition-api';
import { useModel } from '@/compositions/form';
import { BaseInputType } from './BaseInput.type';

export default createComponent({
  props: {
    type: { default: 'text' },
    value: { required: true },
  },
  setup(props: BaseInputType.Props, { emit }) {
    const { model } = useModel(props, emit);
    return { model };
  },
});
