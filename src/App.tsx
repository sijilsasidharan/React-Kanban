import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/core/Layout";
import Login from "./pages/Login";
import NotFound from "./components/Error/NotFound";
import { ThemeProvider } from "./context/theme-providers";
import ProtectedRoutes from "./components/common/ProtectedRoutes";
import Dashboard from "./pages/Dashboard";
import { Inbox, Settings } from "lucide-react";
import KanbanBoard from "./pages/KanbanBoard";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Layout />}>
            <Route index path="/dashboard" element={<Dashboard />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/boards" element={<KanbanBoard />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
