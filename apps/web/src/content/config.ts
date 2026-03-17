import { defineCollection, z } from 'astro:content';

const slides = defineCollection({
  type: 'content',
  schema: z.object({
    template: z.enum([
      'CoverSlide',
      'BrandSlide',
      'BrowserClipsSlide',
      'SidebarMediaSlide',
      'CostingSlide',
      'HeadlineSlide',
      'MediaSlide',
      'QuoteSlide',
      'ProseSlide',
      'SwatchesSlide',
      'MediaAssetsSlide',
      'NavSlide',
    ]),
    navItem: z.boolean().optional(),
    heading: z.string().optional(),
    summary: z.string().optional(),
    quote: z.string().optional(),
    cite: z.string().optional(),
    caption: z.string().optional(),
    src: z.string().optional(),
    alt: z.string().optional(),
    min: z
      .object({
        src: z.string().optional(),
        alt: z.string().optional(),
      })
      .optional(),
    max: z
      .object({
        src: z.string().optional(),
        alt: z.string().optional(),
      })
      .optional(),
    media: z
      .object({
        src: z.string().optional(),
        alt: z.string().optional(),
      })
      .optional(),
    price: z.string().optional(),
    prose: z.string().optional(),
    smallPrint: z.string().optional(),
    fill: z.string().optional(),
    mediaType: z.string().optional(),
    swatches: z
      .array(
        z.object({
          name: z.string(),
          color: z.string(),
          values: z
            .array(
              z.object({
                key: z.string().optional(),
                value: z.string().optional(),
              })
            )
            .optional(),
        })
      )
      .optional(),
    mediaAssets: z
      .array(
        z.object({
          name: z.string(),
          src: z.string(),
          alt: z.string(),
          variant: z.string(),
          width: z.string().optional(),
          height: z.string().optional(),
          download: z.object({ src: z.string(), label: z.string() }),
        })
      )
      .optional(),
  }),
});

export const collections = { slides };
