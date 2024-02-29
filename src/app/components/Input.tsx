import React, { ComponentProps } from 'react';

// -- composition pattern

type InputPrefixProps = ComponentProps<'div'>;
function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />;
}

type InputControlProps = ComponentProps<'input'>;
function InputControl(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none "
      {...props}
    />
  );
}

type InputRootProps = ComponentProps<'div'>;
function InputRoot(props: InputRootProps) {
  /*Use the ring-{width} utilities to apply solid box-shadow of a specific thickness to an element. Rings are a semi-transparent blue color by default, similar to the default focus ring style in many systems. */
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300
   px-3 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100"
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
