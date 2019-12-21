import { computed, SetupContext } from '@vue/composition-api';

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
