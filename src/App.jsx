import Canvases from "./canvas";
import Home from "./pages/Home";
import Customizer from "./pages/Customizer";
function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvases />
      <Customizer />
    </main>
  );
}

export default App;
