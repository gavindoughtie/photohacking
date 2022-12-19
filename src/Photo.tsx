export default ({
  src,
  alt,
  size
}: {
  src: string;
  alt: string | undefined;
  size: number;
}) => {
  const outerStyle = { width: `${size}px`, height: `${size}px` };
  return (
    <div className="photo" style={outerStyle}>
      <img src={src} alt={alt || src} />
    </div>
  );
};
