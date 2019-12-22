import { createComponent, reactive } from '@vue/composition-api';
import { BaseInput, BaseButton } from '@/components/base';
import { LoginFormType } from './LoginForm.type';

export default createComponent({
  components: {
    BaseInput,
    BaseButton,
  },
  props: {
    disabled: { default: false },
  },
  setup(_, { emit }) {
    const values = reactive<LoginFormType.Values>({ email: '', password: '' });
    const onSubmit = () => {
      emit('submit', { ...values });
    };
    return {
      values,
      onSubmit,
    };
  },
});
