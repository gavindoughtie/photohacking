import { useEffect, useRef, useState } from "react";

type ImageSize = {
  width: number;
  height: number;
};

const Caption = ({ imageSize }: { imageSize: ImageSize }) => {
  return <figcaption>{`${imageSize.width} x ${imageSize.height}`}</figcaption>;
};

export default ({
  src,
  alt,
  seq,
  size,
}: {
  src: string;
  alt: string | undefined;
  seq: number;
  size: number;
}) => {
  const imgRef = useRef(null);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const height = size;
  let width = size;
  if (imageSize.width && imageSize.height) {
    const ratio = imageSize.width / imageSize.height;
    width = size * ratio;
  }
  useEffect(() => {
    if (imgRef?.current !== null) {
      const naturalHeight = imgRef.current["naturalHeight"];
      const naturalWidth = imgRef.current["naturalWidth"];
      setImageSize({ width: naturalWidth, height: naturalHeight });
    }
  });
  return (
    <figure className="photo">
      <img
        src={src}
        alt={alt || src}
        id={`${seq}`}
        ref={imgRef}
        width={width}
        height={height}
      />
      <Caption imageSize={imageSize} />
    </figure>
  );
};
