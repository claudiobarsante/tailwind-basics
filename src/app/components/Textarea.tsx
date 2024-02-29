import { ComponentProps } from 'react';

type TextareaProps = ComponentProps<'textarea'>;

function Textarea(props: TextareaProps) {
  {
    /* resize-y to make an element vertically resizable*/
  }
  return (
    <textarea
      {...props}
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
    />
  );
}

export default Textarea;
