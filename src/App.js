import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./router.js";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

function App() {
  const router = useRoutes();
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
        {router}
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
