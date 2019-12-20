import Vue from 'vue';
import { BaseLinkType } from './BaseLink.type';
import { isOutSideLink } from '@/utils/judgers';

type Tag = 'a' | 'router-link';

const selectTag = (to: string): Tag => {
  return isOutSideLink(to) ? 'a' : 'router-link';
};

const buildAttrsATag = (href: string) => {
  return {
    href,
    rel: 'noopener',
    target: '_blank',
  };
};

const buildAttrs = (
  tag: Tag,
  props: BaseLinkType.Props,
): { [key: string]: string } => {
  switch (tag) {
    case 'a':
      return buildAttrsATag(props.to);
    default:
      return {};
  }
};

export default Vue.extend({
  props: {
    to: {
      type: String,
      required: true,
    },

    activeClass: {
      type: String,
      default: undefined,
    },
  },

  render(h) {
    const tag = selectTag(this.to);
    const attrs = buildAttrs(tag, this.$props as BaseLinkType.Props);
    return h(tag, { props: this.$props, attrs }, this.$slots.default);
  },
});
