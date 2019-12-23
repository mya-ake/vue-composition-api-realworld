import { createComponent, reactive } from '@vue/composition-api';
import { LoginForm, LoginFormType } from './../LoginForm';
import { BaseErrorMessageList } from '@/components/base';
import { useSubmit } from '@/compositions/form';
import { useRouter } from '@/compositions/router';
import { loginService } from '@/usecases/login';
import { ErrorItem } from '@/types';

export default createComponent({
  components: {
    LoginForm,
    BaseErrorMessageList,
  },
  setup() {
    const state = reactive<{
      errors: ErrorItem[];
    }>({ errors: [] });
    const { router } = useRouter();

    const submitListener = async (values: LoginFormType.Values) => {
      const response = await loginService(values);
      if (!response.ok) {
        state.errors = response.errors;
        return;
      }
      state.errors = [];
      router.push('/');
    };
    const { disabled, onSubmit } = useSubmit(submitListener);
    return { state, disabled, onSubmit };
  },
});
