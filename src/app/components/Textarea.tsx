import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type TextareaProps = ComponentProps<'textarea'>;

function Textarea(props: TextareaProps) {
  {
    /* resize-y to make an element vertically resizable*/
  }
  return (
    <textarea
      {...props}
      className={twMerge(
        'min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2',
        'shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100',
        'dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-violet-500',
        'dark:text-zinc-100 dark:placeholder-zinc-400 dark:focus:ring-violet-500/20'
      )}
    />
  );
}

export default Textarea;
