import React from 'react';
import { VariantProps, tv } from 'tailwind-variants';
import { CheckCircle2, Trash2, UploadCloud } from 'lucide-react';
import Button from '../../Button';
import { formatBytes } from '@/utils/format-bytes';

const fileItem = tv({
  slots: {
    container: 'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    icon: 'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600',
    deleteButton: '',
    progressBar: 'h-2 rounded-full bg-violet-600'
  },

  variants: {
    state: {
      inProgress: {
        container: '',
        progressBar: 'w-4/5'
      },
      completed: {
        container: 'border-violet-500',
        progressBar: 'w-5/5'
      },
      hasError: {
        container: 'bg-error-25 border-error-300',
        icon: 'border-error-50 bg-error-100 text-error-600',
        deleteButton: 'text-error-700 hover:text-error-900'
      }
    }
  },

  defaultVariants: {
    state: 'inProgress'
  }
});

type FileItemProps = {
  name: string;
  size: number;
} & VariantProps<typeof fileItem>;

function FileItem({ name, size, state }: FileItemProps) {
  const { container, icon, deleteButton, progressBar } = fileItem({ state });
  return (
    <div className={container()}>
      <div className={icon()}>
        <UploadCloud className="size-4" />
      </div>

      {state === 'hasError' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-error-700 text-sm font-medium">Upload failed, please try again.</span>
            <span className="text-error-600 text-sm">{name}</span>
          </div>

          <button type="button" className="text-error-700 hover:text-error-900 text-sm font-semibold">
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700">{name}</span>
            <span className="text-sm text-zinc-500">{formatBytes(size)}</span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100">
              <div className={progressBar()} />
            </div>
            <span className="text-sm font-medium text-zinc-700">{state === 'completed' ? '100%' : '80%'}</span>
          </div>
        </div>
      )}
      {state === 'completed' ? (
        <CheckCircle2 className="text h-5 w-5 fill-violet-600 text-white" />
      ) : (
        <Button type="button" variant="ghost" className={deleteButton()}>
          <Trash2 className="size-5 text-zinc-500" />
        </Button>
      )}
    </div>
  );
}

export default FileItem;
