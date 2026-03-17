import CostingSlide from '@repo/ui/CostingSlide';

export default {
  component: CostingSlide,
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
      'We’re honest about our efficient pricing. It’s based on two week blocks, priced the same for everyone. Every sprint ends with a playback and review to make sure we’re all on track to deliver on time, *and* on budget.',
    price: '£15,000',
    smallPrint: 'Excluding VAT where applicable',
  },
};
