import Prose from '@repo/ui/Prose';

export default {
  component: Prose,
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
    // Use for slot-based content
    // children: 'Content goes here',
    content: `
# Prose content and global styles kitchen sink

We start with a paragraph of text that features various HTML tags, used in flow content. Account for _emphasis_, **strong** and small text. Don’t forget to account for abbreviations too, using the abbr (\`<abbr>\`) element. Lastly you can define ~~deleted text~~ inserted text.

If you are referencing keyboard keys, make sure you use the \`<kbd>\` element like this: shift. Like we have already in these paragraphs, if you are referencing code, use the \`<code>\` element. Don’t forget the \`<samp>\` element either. An example for that element is this: Press F1 to continue.

Use the \`<var>\` element to reference a variable like this: The volume of a box is l × w × h, where l represents the length, w the width and h the height of the box.

If you want an inline quote, use the \`<q>\` element quoted text. Lastly don’t forget the subscript (\`<sub>\`) (H2O) and superscript (\`<sup>\`) (E = MC2), and of course, [link elements](https://example.com/).

Use \`<b>\` as a semantically-neutral element for styling text, without necessarily implying any emphasis. In general, this should only be used when mentioning **TetraLogical** in prose.

## Blockquote styles are the context for this heading level 2 which is long for testing leading and balance

> Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.

> “Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.”
>
> Aldous Huxley, Brave New World

Make sure you only use a cite if the quote source can be linked to.

---

Just a quick paragraph to follow the horizontal rule. A bit of Lipsum? Sure thing: Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.

## Details and summary

Toggle the details element

Previously hidden content until the details element is in its \`open\` state.

## Tables

|   |   |   |
|---|---|---|
A nice caption for this table
|Person|Number|Third Column|
|Someone Lastname|900|Nullam quis risus eget urna mollis ornare vel eu leo.|
|[Person Name](https://tetralogical.com/pattern-library/component-preview/prose/?state=window#)|1200|Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.|
|Another Person|1500|Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh ultricies vehicula ut id elit.|
|Last One|2800|Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.|

Sometimes, a table has column headers

|   |   |   |   |
|---|---|---|---|
A nice caption for this table
||Person|Number|Third Column|
|This column’s heading|Someone Lastname|900|Nullam quis risus eget urna mollis ornare vel eu leo.|
|Another column heading|[Person Name](https://tetralogical.com/pattern-library/component-preview/prose/?state=window#)|1200|Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.|
|Code in tables should have more paired back styles|Another Person|\`1500\`|Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh ultricies vehicula ut id elit.|
|Last column header|Last One|2800|Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.|

## Description lists time

Just a quick paragraph to introduce heading level 3 too.

### Description lists are under-used, but extremely useful

A description list term

A description list detail

Another term

A slightly longer details element to work with.

### Sometimes description lists have multiple details

This term introduces two details

This is the first one

This is the second one, which is a bit longer

## Lists, glorious lists

Lists in various forms.

### A simple undordered list

- List item one
- List item two
- List item three, which is a longer item to make sure our marker styles work well for mult-line list items
- List item four

### Moving on to a nested undordered list

- Unordered List item one
    - Nested list item
        - Level 3, item one
        - Level 3, item two
        - Level 3, item three
        - Level 3, item four
    - List item two
    - List item three
    - List item four
- List item two
- List item three
- List item four

### Order, numbered lists are next

1. List item one
2. List item two
3. List item three, which is a longer item to make sure our marker styles work well for mult-line list items
4. List item four

### Moving on to a nested undordered list

1. Ordered List item one
    1. Nested list item
        1. Level 3, item one
        2. Level 3, item two
        3. Level 3, item three
        4. Level 3, item four
    2. List item two
    3. List item three
    4. List item four
2. List item two
3. List item three
4. List item four

### A mix of both

- Unordered List item one
    1. Nested ordered list item
        - Level 3, item one
        - Level 3, item two
        - Level 3, item three
        - Level 3, item four
    2. List item two
    3. List item three
    4. List item four
- List item two
- List item three
- List item four

## Preformatted text / blocks of code styles follow on next

\`\`\`
.context-alert {
  position: absolute;
  inset: auto 0 calc(100% + 0.5em) 0;
  padding: 0.25em;
  background: var(--color-primary);
  color: var(--color-light);
  font-weight: var(--font-bold);
  text-align: center;
  transition: opacity var(--transition-fade) 200ms,
    transform var(--transition-bounce-fast) 200ms;
}
\`\`\`

## Forms

Email address with placeholder

Number

Password

Search

Telephone number

Text

Url with placeholder

Color

Date

Date and time

Month

Week

Time

Example select           Option number 1           Option number 2           Option number 3           Option number 4           Option number 5         

Example multiple select           Option number 1           Option number 2           Option number 3           Option number 4           Option number 5         

Example datalist

Example textarea

Example textarea with no rows attribute

File input

A disabled input

A readonly input

I am a legend element for radio inputsWe put the label text in a span because we can use \`:has()\` to style radios and checkboxes with flexboxThe second option should de-select option 1This one is disabled and can’t be selected

I am also a legend but this time for checkboxesCheckbox number oneCheckbox number two has a longer label to make sure our CSS is top notchCheckbox number three is disabled and cant’t be checked

Where are buttons? Good question. Not here because we don’t tend to style up default buttons and instead opt to treat them as components with a \`.cta\` class.

## Images, figures, pictures and videos

Under no circumstances should you have an image without an \`alt\` attribute. At a minimum, it should be an empty value like this one. That should only be used for purely decorative images though.

![](https://images.unsplash.com/photo-1579546929518-9e396f3cc809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MjA3NzQ4Mg&ixlib=rb-4.0.3&q=80&w=1080)

### An image in a figure with a caption

![A Tokyo street in the early evening dusk. The shot is from under a steel bridge where there is a store, lit up, which in turn, lights up the surrounding area.](https://images.unsplash.com/photo-1696251143046-2d32fb985b59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4470&q=80)

Tokyo, Japan, looking stunning in the early evening. By [ayumi kubo](https://unsplash.com/@ayumikubo)

### A picture element

![An above shot of some very green leaves](https://images.unsplash.com/photo-1692946573219-2257a4a29cad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80)

### A video element

### An SVG with an image role and alternative text

## All of the headings

We tend to only specifically style up headings up to level 4 in terms of leading and balance because if you’re getting into 5 and 6, you probably want to be simplifying your content. We’ll add them here though to double check they look OK.

# Sed posuere consectetur est at lobortis.

## Sed posuere consectetur est at lobortis.

### Sed posuere consectetur est at lobortis.

#### Sed posuere consectetur est at lobortis.

##### Sed posuere consectetur est at lobortis.

###### Sed posuere consectetur est at lobortis.
    `,
  },
};
