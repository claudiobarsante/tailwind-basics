'use client';
import React, { ChangeEvent, ComponentProps } from 'react';
import { useFileInput } from './Root';

type ControlProps = { isMultiple: boolean } & ComponentProps<'input'>;

function Control({ isMultiple = false, ...props }: ControlProps) {
  const { id, onFilesSelected } = useFileInput();

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) return;
    // -- event.target.file returns a FileList object, so
    // -- using Array.from() will convert to a File[]
    const files = Array.from(event.target.files);
    onFilesSelected(files, isMultiple);
  }
  return (
    <input type="file" className="sr-only" id={id} onChange={handleFilesSelected} multiple={isMultiple} {...props} />
  );
}

export default Control;
