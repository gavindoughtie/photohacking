import "./styles.css";
import Photo from "./Photo";
import { IMAGES } from "./images";

export default function App() {
  const photos = IMAGES.map((imgData) => (
    <Photo src={imgData.src} size={300} alt="Demo" />
  ));
  const row = <div className="photoRow">{photos}</div>;
  return <div className="App">{row}</div>;
}
