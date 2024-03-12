import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      borderWidth: {
        6: '6px'
      },
      colors: {
        error: {
          25: '#FFFBFA',
          50: '#FEF3F2',
          100: '#FEE4E2',
          200: '#FECDCA',
          300: '#FDA29B',
          400: '#F97066',
          500: '#F04438',
          600: '#D92D20',
          700: '#B42318',
          800: '#912018',
          900: '#7A271A'
        },
        violet: {
          25: '#fcfaff'
        }
      },
      gridTemplateColumns: {
        app: 'minmax(18rem,20rem) 1fr',
        profile: 'max-content 1fr max-content',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)'
      },
      keyframes: {
        slideDownAndFade: {
          // starts with the element -2px above
          from: { opacity: '0', transform: 'translateY(-2px)' },
          // finishes with the element on it's original position
          to: { opacity: '1', transform: 'translateY(0px)' }
        },
        slideUpAndFade: {
          from: { opacity: '1' },
          to: { opacity: '0' }
        }
      },

      animation: {
        slideDownAndFade: 'slideDownAndFade 0.4s cubic-bezier(0.16, 1, 0.3,1)',
        slideUpAndFade: 'slideUpAndFade 1s linear'
      }
    }
  },
  plugins: []
};
export default config;
/*
The CSS `cubic-bezier()` function is used to define a cubic Bézier curve for timing functions in CSS animations or transitions. This function allows you to create custom easing curves for animations, specifying how the animation progresses over time.

The `cubic-bezier()` function takes four parameters, each representing a control point on the curve. These parameters define the shape of the curve:

1. The first parameter (`0.16` in your example) represents the X coordinate of the first control point.
2. The second parameter (`1` in your example) represents the Y coordinate of the first control point.
3. The third parameter (`0.3` in your example) represents the X coordinate of the second control point.
4. The fourth parameter (`1` in your example) represents the Y coordinate of the second control point.

These control points determine how the animation progresses over time. The values of these parameters typically range from 0 to 1, inclusive. They define how the animation accelerates or decelerates during its duration.

In your example `cubic-bezier(0.16, 1, 0.3, 1)`, the timing function starts with a relatively gradual acceleration, then moves into a more linear progression, and finally slows down gradually at the end. This timing function could be used, for example, to create a smooth and natural-feeling animation effect. */

/*
The CSS transform property is used to modify the appearance of an element in various ways, such as scaling, rotating, skewing, or translating it. In the context of your example, transform: 'translateY(-2px)', it's applying a translation along the vertical (Y) axis.

Let's break it down:

transform: This is the CSS property responsible for transforming the element.
'translateY(-2px)': This is a value applied to the transform property. It specifies a translation along the Y-axis. The -2px indicates that the element will be moved 2 pixels upward (negative direction) relative to its initial position.
So, when you apply transform: 'translateY(-2px)' to an element in CSS, it will shift that element 2 pixels upwards from its original position.

*/

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
