import ProseSlide from '@repo/ui/ProseSlide';

export default {
  component: ProseSlide,
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
    heading: 'Problem space',
    summary: 'What functional and emotional tension do we resolve?',
    prose: `
When travelling to Japan, gaps in language, cultural understanding and local knowledge:

1. Make it harder to find and access authentic experiences
2. Create challenges when difficulties or concerns arise
3. Significantly increase the number of unknowns
`,
  },
  variants: [
    {
      quote: {
        footerHeading: 'Design and development partnership proposal',
        footerByline: 'February 2026',
        next: '#',
        prev: '#',
        heading: 'Brand personality',
        summary: 'How does our brand express itself?',
        prose: `
> “We have an idea called wa, meaning harmony. This is important because it allows contradictory ideologies, aesthetics, and even religions to coexist. This is very Japanese. The contradictory can coexist in harmony.”
>
> Dairik Amae, Japanese tea ceremony master
`,
      },
    },
    {
      'flow-media': {
        footerHeading: 'Design and development partnership proposal',
        footerByline: 'February 2026',
        next: '#',
        prev: '#',
        heading: 'Brand personality',
        summary: 'How does our brand express itself?',
        prose: `
The Japanese concept of wa represents ideas of harmony, mutual respect and the peaceful co-existence of differences. In this spirit, the brand personality is expressed via a set of contradictory attributes, sensitively combined to produce something harmonious.

![](/images/prose-flow-image.svg)
`,
      },
    },
    {
      'sidebar-media': {
        footerHeading: 'Design and development partnership proposal',
        footerByline: 'February 2026',
        next: '#',
        prev: '#',
        heading: 'Problem space',
        summary: 'What functional and emotional tension do we resolve?',
        prose: `
  Three key qualities define Tokyo Concierge’s difference, and provide the foundation for how the brand competes:

  1. **Effective**: dependable, competent, facilitating, a badge of honour
  2. **Grounded**: authentic, stable, rooted in local knowledge, humble
  3. **Partner**: human, mutual respect, tailored support, a local ally

  ‘Effective’ is the primary positioning attribute: to be a concierge is a badge of honour — effectively facilitating authentic experience and calm assurance.
    `,
        media: {
          src: '/images/prose-sidebar-image.svg',
          alt: '',
        },
      },
    },
  ],
};
