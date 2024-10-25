import React, { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import "./DashboardSearch.css";

const DashboardSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isMacOS, setIsMacOS] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast(
      searchTerm
        ? `Search for "${searchTerm}" triggered`
        : "Please enter a search term"
    );
    setSearchTerm("");
  };

  useEffect(() => {
    const isMac = navigator.platform.toLowerCase().includes("mac");
    setIsMacOS(isMac);

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "/") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <form
      role="search"
      className="dashboard-search-form flex items-center"
      onSubmit={handleSubmit}
    >
      <input
        ref={searchInputRef}
        type="search"
        id="search"
        placeholder="Search"
        aria-label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex items-center w-[30px] text-neutral-400">
        {isMacOS ? "⌘" : "Ctrl"} /
      </div>
    </form>
  );
};

export default DashboardSearch;
