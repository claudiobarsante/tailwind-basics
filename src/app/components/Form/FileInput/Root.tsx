'use client';
import { ComponentProps, createContext, useContext, useId, useState } from 'react';

type RootProps = ComponentProps<'div'>;

type FileInputContextType = {
  id: string;
  files: File[];
  onFilesSelected: (files: File[], isMultiple: boolean) => void;
};
const FileInputContext = createContext({} as FileInputContextType);
function Root(props: RootProps) {
  const id = useId();
  const [files, setFiles] = useState<File[]>([]);

  function onFilesSelected(files: File[], isMultiple: boolean) {
    if (isMultiple) {
      setFiles((previous) => [...previous, ...files]);
    } else {
      setFiles(files);
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  );
}
export const useFileInput = () => useContext(FileInputContext);
export default Root;
