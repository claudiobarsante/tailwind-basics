import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem,20rem) 1fr',
        profile: 'max-content 1fr max-content',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)'
      }
    }
  },
  plugins: []
};
export default config;

/*
This CSS property `grid-template-columns` is used in CSS Grid layouts to define the columns of a grid container. 

In the provided value `max-content 1fr max-content`, there are three column tracks defined:

1. `max-content`: This track will size itself based on the largest content within that column. Essentially, the column will be as wide as its widest content.

2. `1fr`: This track will take up the remaining space available in the grid container after allocating space for other tracks. `1fr` is a unit of the available space divided into fractions. In this case, it means that the second column will take up one fraction of the available space.

3. `max-content`: Similar to the first track, this column will also size itself based on the largest content within it.

So, to summarize:
- The first and third columns will adjust their widths based on their content, taking up only as much space as needed.
- The second column will take up the remaining space in the grid container after accommodating the first and third columns. It will expand or shrink depending on the available space.

This setup is particularly useful when you want some columns to be sized based on their content while others take up the remaining space in the container.
*/
