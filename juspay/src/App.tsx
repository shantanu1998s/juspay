import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Toaster } from "sonner";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DesignDocPage from "./Pages/DesignDocPage/DesignDocPage";
import { ThemeProvider } from "./Context/ThemeContext";

/*
 * Responsibility: Root component of the application.
 * Sets up app routes, global themes and a Toaster for managing notifications
 */

function App() {
  return (
    <ThemeProvider>
      <main className="app">
        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/design" element={<DesignDocPage />} />
        </Routes>
        {/* Toaster component for displaying notifications */}
        <Toaster toastOptions={{ className: "toast" }} />
      </main>
    </ThemeProvider>
  );
}

export default App;
