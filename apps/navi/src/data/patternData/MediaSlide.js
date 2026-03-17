import MediaSlide from '@repo/ui/MediaSlide';

export default {
  component: MediaSlide,
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
    // Use for slot-based content
    footerHeading: 'Design and development partnership proposal',
    footerByline: 'February 2026',
    next: '#',
    prev: '#',
    src: '/images/process.svg',
    alt: 'A dotted line that starts as a very scruffy, messy circle. Over the course of three more circles, it gets neater and neater until it’s nearly perfect.',
    caption: 'The iterative process',
    fill: 'full', // full will set 100% width, so set as anything but 'bleed' to inherit the image size instead
  },
  variants: [
    {
      'full-bleed': {
        footerHeading: 'Design and development partnership proposal',
        footerByline: 'February 2026',
        next: '#',
        prev: '#',
        src: '/images/full-bleed.avif',
        alt: 'Tokyo',
        caption: 'The iterative process',
        fill: 'bleed', // bleed will set 100% width and height, so set as anything but 'full' to inherit the image size instead
      },
    },
    {
      video: {
        footerHeading: 'Design and development partnership proposal',
        footerByline: 'February 2026',
        next: '#',
        prev: '#',
        src: '/videos/video-media.mp4',
        mediaType: 'video',
        alt: 'Tokyo',
        caption: 'A normal video with a caption',
      },
    },
    {
      'video-bleed': {
        footerHeading: 'Design and development partnership proposal',
        footerByline: 'February 2026',
        next: '#',
        prev: '#',
        src: '/videos/video-media.mp4',
        mediaType: 'video',
        alt: 'Tokyo',
        caption: 'A normal video with a caption',
        fill: 'bleed', // bleed will set 100% width and height, so set as anything but 'full' to inherit the image size instead
      },
    },
  ],
};
