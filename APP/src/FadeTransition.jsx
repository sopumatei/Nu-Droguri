import { useEffect, useState } from "react";

export default function FadeTransition({ children, triggerKey }) {
  const [show, setShow] = useState(true);
  const [displayedChild, setDisplayedChild] = useState(children);

  useEffect(() => {
    setShow(false);
    const timeout = setTimeout(() => {
      setDisplayedChild(children);
      setShow(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, [triggerKey]);

  return (
    <div
      id="transition-container"
      style={{
        opacity: show ? 1 : 0,
        transition: "opacity 0.3s ease",
        width: "100%",
      }}
    >
      {displayedChild}
    </div>
  );
}
