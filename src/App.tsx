import { createRoot } from "react-dom/client";
import Ingredient from "./Ingredient";

const App = () => {
  return (
    <div>
      <h1>Pij wodę</h1>
      <Ingredient name="woda"></Ingredient>
    </div>
  );
};

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

root.render(<App />);
