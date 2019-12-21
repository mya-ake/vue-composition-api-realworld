import * as form from './form';

describe('compositions/form', () => {
  describe('useModel', () => {
    const { useModel } = form;

    it('modelを更新するとその値をemitしている', () => {
      const emitMock = jest.fn();
      const { model } = useModel({ value: '' }, emitMock);
      model.value = 'test';
      expect(emitMock).toBeCalledWith('input', 'test');
    });

    it('modelはpropsの値を参照している', () => {
      const props = { value: '' };
      const { model } = useModel(props, () => {});
      props.value = 'test';
      expect(model.value).toBe('test');
    });
  });
});
