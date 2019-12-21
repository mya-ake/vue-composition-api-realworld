export namespace BaseButtonType {
  export interface Props {
    type: 'button' | 'submit';
    onClick: (event: Event) => void | Promise<void>;
  }
}
