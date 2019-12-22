import { createComponent, reactive } from '@vue/composition-api';
import { LoginForm, LoginFormType } from './../LoginForm';
import { BaseErrorMessageList } from '@/components/base';
import { useSubmit } from '@/compositions/form';

export default createComponent({
  components: {
    LoginForm,
    BaseErrorMessageList,
  },
  setup() {
    const state = reactive<{
      messages: string[];
    }>({ messages: [] });
    const submitListener = (values: LoginFormType.Values) => {
      // TODO login process
      console.log(values);
    };
    const { disabled, onSubmit } = useSubmit(submitListener);
    return { state, disabled, onSubmit };
  },
});
