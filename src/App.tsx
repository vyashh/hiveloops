import { useContext } from "react";
import { Context } from "./Services/Store";

const App: React.FC = () => {
  const { loadingState } = useContext(Context);
  const [loading, setLoading] = loadingState;

  console.log(loading);

  return (
    <div className="App">
      <p>{loading}</p>
    </div>
  );
};

export default App;
