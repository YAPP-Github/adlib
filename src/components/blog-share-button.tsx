'use client';

import { Check, Share } from 'lucide-react';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { cn } from '@/lib/cn';
import { useCopyButton } from '@/lib/use-copy-button';

export function BlogShareButton({ url }: { url: string }) {
  const [isChecked, onCopy] = useCopyButton(() => {
    void navigator.clipboard.writeText(`${window.location.origin}${url}`);
  });

  return (
    <button type="button" className={cn(buttonVariants({ className: 'gap-2' }))} onClick={onCopy}>
      {isChecked ? <Check className="size-4" /> : <Share className="size-4" />}
      {isChecked ? 'URL 복사됨' : '공유하기'}
    </button>
  );
}
