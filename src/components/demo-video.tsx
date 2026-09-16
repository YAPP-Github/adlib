'use client';

import { useRef, useState } from 'react';

export function DemoVideo({ src, poster, title, id }: {
  src: string;
  poster: string;
  title: string;
  id: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);

  async function play() {
    setFailed(false);
    setStarted(true);
    try {
      if (videoRef.current?.error) videoRef.current.load();
      await videoRef.current?.play();
    } catch {
      setStarted(false);
      setFailed(true);
    }
  }

  return (
    <div className="relative bg-black">
      <video
        ref={videoRef}
        data-demo-video
        controls={started}
        playsInline
        preload="none"
        width={1280}
        height={800}
        poster={poster}
        src={src}
        aria-labelledby={`${id}-title`}
        aria-describedby={`${id}-description`}
        className="block aspect-[8/5] w-full"
        onPlay={(event) => {
          setStarted(true);
          document.querySelectorAll<HTMLVideoElement>('video[data-demo-video]').forEach((video) => {
            if (video !== event.currentTarget) video.pause();
          });
        }}
        onError={() => {
          setStarted(false);
          setFailed(true);
        }}
      />
      {!started && (
        <button
          type="button"
          aria-label={`${title} 재생`}
          onClick={play}
          className="absolute inset-0 flex items-center justify-center bg-black/5 transition-colors hover:bg-black/15 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-black/75 text-white shadow-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
      {failed && (
        <p role="alert" className="absolute inset-x-0 bottom-0 bg-black/85 p-3 text-center text-sm text-white">
          영상을 불러오지 못했습니다. 재생 버튼을 눌러 다시 시도해 주세요.
        </p>
      )}
    </div>
  );
}
