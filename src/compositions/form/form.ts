import { reactive, computed, SetupContext } from '@vue/composition-api';

export const useModel = (
  props: { value: string },
  emit: SetupContext['emit'],
) => {
  const model = computed({
    get: () => props.value,
    set: v => emit('input', v),
  });
  return { model };
};

export const useSubmit = <V>(
  submitListener: (values: V) => void | Promise<void>,
) => {
  const localState = reactive({ processing: false });
  const disabled = computed(() => localState.processing);
  const onSubmit = async (values: V) => {
    localState.processing = true;
    await submitListener(values);
    localState.processing = false;
  };

  return { disabled, onSubmit };
};
