'use client';
import React, { ChangeEvent, ComponentProps } from 'react';
import { useFileInput } from './Root';

type ControlProps = ComponentProps<'input'>;

function Control(props: ControlProps) {
  const { id, onFilesSelected } = useFileInput();

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) return;
    // -- event.target.file returns a FileList object, so
    // -- using Array.from() will convert to a File[]
    const files = Array.from(event.target.files);
    onFilesSelected(files);
  }
  return <input type="file" className="sr-only" id={id} onChange={handleFilesSelected} {...props} />;
}

export default Control;
