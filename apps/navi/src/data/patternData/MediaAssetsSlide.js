import MediaAssetsSlide from '@repo/ui/MediaAssetsSlide';

export default {
  component: MediaAssetsSlide,
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
    heading: 'Logos',
    footerHeading: 'Design and development partnership proposal',
    footerByline: 'February 2026',
    next: '#',
    prev: '#',
    mediaAssets: [
      {
        name: 'Dark logo',
        src: '/images/set-logo-dark.svg',
        alt: '',
        variant: 'default',
        download: {
          src: '/images/set-logo-dark.svg',
          label: 'Download SVG',
        },
      },
      {
        name: 'Light logo',
        src: '/images/set-logo-white.svg',
        alt: '',
        variant: 'dark',
        download: {
          src: '/images/set-logo-dark.svg',
          label: 'Download SVG',
        },
      },
    ],
  },
  variants: [
    {
      grid: {
        heading: 'External assets',
        footerHeading: 'Design and development partnership proposal',
        footerByline: 'February 2026',
        next: '#',
        prev: '#',
        mediaAssets: [
          {
            name: 'Dark logo',
            src: '/images/set-logo-dark.svg',
            alt: '',
            variant: 'default',
            download: {
              src: '/images/set-logo-dark.svg',
              label: 'Download SVG',
            },
          },
          {
            name: 'Light logo',
            src: '/images/set-logo-white.svg',
            alt: '',
            variant: 'dark',
            download: {
              src: '/images/set-logo-dark.svg',
              label: 'Download SVG',
            },
          },
          {
            name: 'Open graph card',
            src: '/images/social-card-asset.png',
            alt: '',
            variant: 'default',
            download: {
              src: '/images/social-card-asset.png',
              label: 'Download SVG',
            },
          },
          {
            name: 'Social media avatar',
            src: '/images/social-avatar-asset.png',
            alt: '',
            width: '250',
            height: '250',
            variant: 'default',
            download: {
              src: '/images/social-avatar-asset.png',
              label: 'Download SVG',
            },
          },
        ],
      },
    },
    {
      fonts: {
        heading: 'Font assets',
        footerHeading: 'Design and development partnership proposal',
        footerByline: 'February 2026',
        next: '#',
        prev: '#',
        mediaAssets: [
          {
            name: "Font stack: 'Moderat', system-ui, sans-serif",
            src: '/images/font-sample-1.svg',
            alt: '',
            variant: 'default',
            download: {
              src: '/images/font-sample-1.svg',
              label: 'Download font',
            },
          },
          {
            name: "Font stack: 'Rosart', 'Georgia Pro', Georgia, serif",
            src: '/images/font-sample-2.svg',
            alt: '',
            variant: 'default',
            download: {
              src: '/images/font-sample-2.svg',
              label: 'Download font',
            },
          },
          {
            name: "Font stack: 'Family', 'Georgia Pro', Georgia, serif",
            src: '/images/font-sample-3.svg',
            alt: '',
            variant: 'default',
            download: {
              src: '/images/font-sample-3.svg',
              label: 'Download font',
            },
          },
          {
            name: "Font stack: 'Roboto Mono', ui-monospace, monospace",
            src: '/images/font-sample-4.svg',
            alt: '',
            variant: 'default',
            download: {
              src: '/images/font-sample-4.svg',
              label: 'Download font',
            },
          },
        ],
      },
    },
  ],
};
