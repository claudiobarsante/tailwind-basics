import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
// -- composition pattern

type InputPrefixProps = ComponentProps<'div'>;
function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />;
}

type InputControlProps = ComponentProps<'input'>;
function InputControl(props: InputControlProps) {
  return (
    <input
      className={twMerge(
        'flex-1 border-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none',
        'dark:text-zinc-100 dark:placeholder-zinc-400'
      )}
      {...props}
    />
  );
}

type InputRootProps = ComponentProps<'div'>;
function InputRoot(props: InputRootProps) {
  /*Use the ring-{width} utilities to apply solid box-shadow of a specific thickness to an element. Rings are a semi-transparent blue color by default, similar to the default focus ring style in many systems. */
  return (
    <div
      className={twMerge(
        'flex w-full items-center gap-2 rounded-lg border border-zinc-300',
        'px-3 py-2 shadow-sm',
        'focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100',
        'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20'
      )}
      {...props}
    ></div>
  );
}

export const Input = {
  Prefix: InputPrefix,
  Control: InputControl,
  Root: InputRoot
};

/*The :focus-within pseudo-selector in CSS is a bit unusual, although well-named and rather intuitive. It selects an element if that element contains any children that have :focus. */
/*
'ring-violet-500/20'--> /20 =Control the opacity of an element’s background color using the color opacity modifier.In this case
10 of opacity
*/
