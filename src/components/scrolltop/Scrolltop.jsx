import React, { useState, useEffect } from "react";
import "../scrolltop/scrolltop.css";

const Scrolltop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const { scrollY } = window;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.clientHeight;

    const progress = (scrollY / (bodyHeight - windowHeight)) * 100;

    setScrollProgress(progress);

    if (scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-to-top-button ${isVisible ? "show" : "hide"}`}>
      <div
        className="progress-circle"
        style={{
          borderImage: `conic-gradient(#ff7a77 ${scrollProgress}%, transparent 0%) 1`,
        }}
        onClick={scrollToTop}
        role="button"
        tabIndex={0}
      >
        <div className="arrow-up" />
      </div>
    </div>
  );
};

export default Scrolltop;