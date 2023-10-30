import { useRoutes } from "react-router-dom";
import rootRouter from "./routes/rootRouter";

function App() {
  const routes = useRoutes(rootRouter);

  return <>{routes}</>;
}

export default App;
