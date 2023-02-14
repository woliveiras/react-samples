import Uncontrolled from "./components/Uncontrolled";
import Controlled from "./components/Controled";
import UsingRef from "./components/UsingRef";

function App() {
  return (
    <>
      <h1>Controlled and Uncontrolled components</h1>
      <h2>Controlled</h2>
      <Controlled />
      <h2>Uncontrolled</h2>
      <Uncontrolled />
      <h2>useRef to set focus</h2>
      <UsingRef />
    </>
  );
}

export default App;
