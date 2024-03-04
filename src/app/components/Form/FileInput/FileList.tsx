'use client';
import React from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useFileInput } from './Root';
import FileItem from './FileItem';

function FileList() {
  const [parent] = useAutoAnimate();
  const { files } = useFileInput();
  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.length > 0 &&
        files.map((file) => <FileItem key={file.name} name={file.name} size={file.size} state="error" />)}
    </div>
  );
}

export default FileList;
