import { Outlet } from "react-router";
import { useEffect, useRef, useState } from "react";
import AlertProvider from "../common/useAlert/AlertProvider";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

/**
 * The layout element that wraps all routes
 * @returns Layout Element
 */

export default function Layout() {
  const htmlElement = useRef(document.querySelector("html"));
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme") == "dark"
      : true,
  );

  useEffect(() => {
    localStorage.setItem("theme", currentTheme ? "dark" : "light");

    htmlElement.current?.setAttribute(
      "data-theme",
      currentTheme ? "dark" : "light",
    );
  }, [currentTheme]);

  return (
    <div className="m-0 min-h-screen flex flex-col">
      <Header
        currentTheme={currentTheme}
        onThemeChange={() => {
          setCurrentTheme(!currentTheme);
        }}
      />
      <AlertProvider>
        <main className="bg-base-100 flex-1 flex">
          <Outlet />
        </main>
      </AlertProvider>
      <Footer />
    </div>
  );
}
