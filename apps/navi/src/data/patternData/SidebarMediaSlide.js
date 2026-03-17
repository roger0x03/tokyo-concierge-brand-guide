import SidebarMediaSlide from '@repo/ui/SidebarMediaSlide';

export default {
  component: SidebarMediaSlide,
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
    summary:
      '“We’re building something ambitious, and we need a design partner who plays at that level.”',
    src: '/images/client-highlight.jpg',
    alt: 'A composition of selected elements from “The Lost Estate” website, featuring bold typography, vintage-inspired illustrations, event details, customer reviews, and booking buttons. The design uses a dark theme with red and gold accents.',
    caption: 'A little caption works nice with [some markdown](#) too if that’s what you fancy',
  },
};
