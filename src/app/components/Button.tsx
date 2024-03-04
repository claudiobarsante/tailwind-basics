import React, { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const button = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active:opacity-80'
  ],

  variants: {
    variant: {
      primary: 'bg-violet-600 text-white hover:bg-violet-700',
      ghost: 'rounded-md px-2 hover:bg-zinc-50 shadow-none text-zinc-500',
      outline: 'border border-zinc-300 text-zinc-700 hover:bg-zinc-50'
    }
  },

  defaultVariants: {
    variant: 'primary'
  }
});

// -- 'typeof button' is the constant created above ☝️
type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>;

// -- passing 'className' as a prop so the className defined on the <Button/>
// -- will merge with the className defined here
export default function Button({ variant, className, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, className })} />;
}
