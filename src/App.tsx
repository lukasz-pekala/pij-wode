import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>Pij wodę</h1>
    </div>
  );
};

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

root.render(<App />);
