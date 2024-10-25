import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "../../Context/ThemeContext";
import { Moon, Sun } from "../IconSet";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="infobar-button"
      onClick={() => {
        toggleTheme();
      }}
    >
      <AnimatePresence mode="wait">
        {theme === "light" ? (
          <motion.div
            initial={{ scale: 0.5, rotate: 20 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0.5, rotate: -20 }}
            transition={{ duration: 0.2 }}
            key="light-theme"
          >
            <Moon />
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.5, rotate: 20 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0.5, rotate: -20 }}
            transition={{ duration: 0.2 }}
            key="dark-theme"
          >
            <Sun />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeSwitcher;
