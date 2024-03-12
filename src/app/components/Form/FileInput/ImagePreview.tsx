'use client';
import { User } from 'lucide-react';
import { useFileInput } from './Root';
import { useMemo } from 'react';
import Image from 'next/image';
function ImagePreview() {
  const { files } = useFileInput();

  const previewURL = useMemo(() => {
    if (files.length === 0) return null;
    return URL.createObjectURL(files[0]);
  }, [files]);

  if (previewURL === null) {
    return (
      <div className="flex size-16 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10">
        <User className="size-8 text-violet-600 dark:text-violet-300" />
      </div>
    );
  }

  return <Image src={previewURL} alt="" width={64} height={64} className="rounded-full object-cover" />;
}

export default ImagePreview;
