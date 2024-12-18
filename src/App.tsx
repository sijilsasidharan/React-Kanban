import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/core/Layout";
import { ThemeProvider } from "./providers/theme-providers";
import Login from "./pages/Login";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <h1>H1</h1>
            </Layout>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
