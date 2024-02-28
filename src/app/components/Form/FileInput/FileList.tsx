'use client';
import React from 'react';
import { useFileInput } from './Root';
import { Trash, Trash2, UploadCloud } from 'lucide-react';
import { formatBytes } from './../../../../utils/format-bytes';

type FileLIstProps = {};

function FileList({}: FileLIstProps) {
  const { files } = useFileInput();
  return (
    <div className="mt-4 space-y-4">
      {files.length > 0 &&
        files.map((file) => (
          <div key={file.name} className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4">
            <div className="rounded-full border-4  border-violet-100 bg-violet-200 p-2 text-violet-600">
              <UploadCloud className="size-4" />
            </div>
            <div className="flex flex-1 flex-col items-start gap-1">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-700">{file.name}</span>
                <span className="text-xs text-zinc-500">{formatBytes(file.size)}</span>
              </div>
              <div className="flex w-full items-center gap-3">
                <div className="h-2 w-full rounded-full bg-zinc-100">
                  <div className="h-2 w-4/5 rounded-full bg-violet-600" />
                </div>
                <span className="text-sm font-medium text-zinc-700">80%</span>
              </div>
            </div>
            <button type="button" className="ml-auto rounded-md p-2 hover:bg-gray-50">
              <Trash2 className="size-5 text-zinc-500" />
            </button>
          </div>
        ))}
    </div>
  );
}

export default FileList;