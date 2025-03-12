"use client";
import { Eclipse, Sun } from "lucide-react";
import { flushSync } from "react-dom";
import { useRef } from "react";
import { useTheme } from "../contexts/ThemeProvider";

function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const ref = useRef<HTMLButtonElement>(null);

  async function toggleTheme() {
    if (
      !ref.current ||
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      if (theme === "dark") setTheme("light");
      if (theme === "light") setTheme("dark");
      return;
    }
    await document.startViewTransition(() => {
      flushSync(() => {
        if (theme === "dark") setTheme("light");
        if (theme === "light") setTheme("dark");
      });
    }).ready;

    const { top, left, width, height } =
      ref.current?.getBoundingClientRect() || {};
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${left + width / 2}px ${top + height / 2}px)`,
          `circle(${maxRadius}px at ${left}px ${top}px)`,
        ],
      },
      {
        duration: 1500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  }

  return (
    <button
      ref={ref}
      onClick={() => toggleTheme()}
      className="cursor-pointer relative w-6 h-6"
    >
      <Sun
        size={24}
        color="white"
        className={`${theme === "light" ? "rotate-[360deg] scale-0" : "rotate-0 scale-100"} duration-[1.5s] absolute top-0 left-0`}
      />
      <Eclipse
        size={24}
        color="#2e2e2e"
        className={`${theme === "dark" ? "rotate-[360deg] scale-0" : "rotate-0 scale-100"} duration-[1.5s] absolute top-0 left-0`}
      />
    </button>
  );
}

export default ToggleTheme;
