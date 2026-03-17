import Button from '@repo/ui/Button';

export default {
  component: Button,
  type: 'astro',
  interactive: false,
  category: 'components',
  status: 'live',
  keyLinks: [
    {
      label: '',
      url: '',
    },
  ],
  default: {
    href: '#',
    label: 'A default button',
  },
  variants: [
    {
      secondary: {
        // Use for slot-based content
        // children: 'Content goes here',
        variant: 'secondary',
        previewBG: '#222222',
        href: '#',
        label: 'A secondary button',
        variant: 'secondary',
      },
    },
  ],
};
