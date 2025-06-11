"use client";

import { Image } from "@heroui/image";
import { use } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export function BlankImageDisplay({error}) {
  return (
    <div className="w-[450px] h-[450px] flex justify-center items-center bg-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 12 11 11 9 14 19 14 15 8 12 12z"></path>
        <path d="m20,2h-12c-1.1,0-2,.9-2,2v12c0,1.1.9,2,2,2h12c1.1,0,2-.9,2-2V4c0-1.1-.9-2-2-2Zm-12,14V4h12v12s-12,0-12,0Z"></path>
        <path d="m4,8h-2v12c0,1.1.9,2,2,2h12v-2H4v-12Z"></path>
      </svg>
      <div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}

export function ImageDisplay({ imageData, w, h, open, setOpen }) {
  if (!imageData) {
    return <BlankImageDisplay />;
  }
  const image = use(imageData);
  if (!image) {
    return <BlankImageDisplay error="生成失败"/>;
  }
  return (
    <>
      <Image
        alt="HeroUI Fruit Image with Zoom"
        width={w}
        height={h}
        src={image.images[0].url}
        onClick={() => setOpen(true)}
      />
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: image.images[0].url }]}
      />
    </>
  );
}
