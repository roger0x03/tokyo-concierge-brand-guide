import Heading from '@repo/ui/Heading';

export default {
  component: Heading,
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
    text: 'Ready, set, go!',
  },
  variants: [
    {
      major: {
        // Use for slot-based content
        text: 'Content goes here',
        variant: 'major',
        text: 'Ready, set, go!',
        previewBG: '',
      },
    },
    {
      minor: {
        // Use for slot-based content
        children: 'Ready, set, go!',
        variant: 'minor',
        previewBG: '',
      },
    },
  ],
};
