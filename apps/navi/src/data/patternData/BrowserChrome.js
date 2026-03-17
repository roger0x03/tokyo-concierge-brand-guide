import BrowserChrome from '@repo/ui/BrowserChrome';

export default {
  component: BrowserChrome,
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
    src: '/images/piccalilli-max.png',
    alt: '',
  },
  variants: [
    {
      min: {
        // Use for slot-based content
        // children: 'Content goes here',
        variant: 'min',
        previewBG: '',
        src: '/images/piccalilli-min.png',
        alt: '',
      },
    },
  ],
};
