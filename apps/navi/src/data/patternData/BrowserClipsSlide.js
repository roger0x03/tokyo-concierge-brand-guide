import BrowserClipsSlide from '@repo/ui/BrowserClipsSlide';

export default {
  component: BrowserClipsSlide,
  type: 'astro',
  interactive: false,
  category: 'regions',
  status: 'live',
  keyLinks: [
    {
      label: '',
      url: '',
    },
  ],
  default: {
    footerHeading: 'Design and development partnership proposal',
    footerByline: 'February 2026',
    next: '#',
    prev: '#',
    min: {
      src: '/images/piccalilli-min.png',
      alt: '',
    },
    max: {
      src: '/images/piccalilli-max.png',
      alt: '',
    },
    caption: 'An optional caption that supports **Markdown**.',
  },
  variants: [
    {
      'min-only': {
        // Use for slot-based content
        // children: 'Content goes here',
        variant: 'min-only',
        previewBG: '',
        footerHeading: 'Design and development partnership proposal',
        footerByline: 'February 2026',
        next: '#',
        prev: '#',
        min: {
          src: '/images/piccalilli-min.png',
          alt: '',
        },
      },
    },
    {
      'max-only': {
        // Use for slot-based content
        // children: 'Content goes here',
        variant: 'max-only',
        previewBG: '',
        footerHeading: 'Design and development partnership proposal',
        footerByline: 'February 2026',
        next: '#',
        prev: '#',
        max: {
          src: '/images/piccalilli-max.png',
          alt: '',
        },
      },
    },
  ],
};
