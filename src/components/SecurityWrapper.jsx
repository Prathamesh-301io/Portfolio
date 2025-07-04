// components/SecurityWrapper.jsx
import { useEffect } from "react";

export default function SecurityWrapper({ children }) {
  useEffect(() => {
    // Disable right click
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // Disable dev shortcuts
    const handleKeyDown = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && ["U", "S"].includes(e.key))
      ) {
        e.preventDefault();
        alert("Access blocked!");
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // Funny copy prevention
    const handleCopy = (e) => {
      e.clipboardData.setData("text/plain", "Nice try! 😄");
      e.preventDefault();
    };
    document.addEventListener("copy", handleCopy);

    // Block devtools opened before load
    if (window.outerWidth - window.innerWidth > 100) {
      document.body.innerHTML =
        "<h1 style='text-align:center; margin-top:30vh;'>🚫🚫🚫🚫😄🚫🚫🚫🚫</h1>";
    }

    // Continuous devtools detection
    const interval = setInterval(() => {
      if (
        window.outerWidth - window.innerWidth > 100 ||
        window.outerHeight - window.innerHeight > 100
      ) {
        document.body.innerHTML =
          "<h1 style='text-align:center; margin-top:30vh;'>🚫🚫🚫🚫😄🚫🚫🚫🚫</h1>";
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("copy", handleCopy);
      clearInterval(interval);
    };
  }, []);

  return <>{children}</>;
}
