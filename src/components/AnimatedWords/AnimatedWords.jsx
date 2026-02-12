import { useEffect, useRef, useState } from "react";

const AnimatedWords = ({ text, className = "", style = {}, as = "h2" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Tag = as;

  // فصل الـ gradient styles عن الـ animation styles
  const hasGradient = style.backgroundImage || style.background;

  return (
    <Tag ref={ref} className={`overflow-hidden ${className}`} style={hasGradient ? style : {}}>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="inline-block mr-2"
          style={{
            ...(hasGradient ? style : {}),
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: `opacity 0.8s ease-out ${i * 0.2}s, transform 0.8s ease-out ${i * 0.2}s`,
          }}
        >
          {word}
        </span>
      ))}
    </Tag>
  );
};

export default AnimatedWords;
