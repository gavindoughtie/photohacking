import "./styles.css";
import Photo from "./Photo";

const TEST_IMAGE =
  "https://www.design-scapes-inc.com/wp-content/uploads/2021/08/los-angeles-landscape-designers.jpg";

export default function App() {
  return (
    <div className="App">
      <Photo src={TEST_IMAGE} size={300} alt="Demo" />
    </div>
  );
}
