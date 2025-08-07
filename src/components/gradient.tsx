import React from "react";

type GradientHeadingProps = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  useCustomGradient?: boolean;
};

export default function GradientHeading({
  children,
  as: Tag = "h1",
  className = "",
  useCustomGradient = false,
}: GradientHeadingProps) {
  const defaultGradient = "bg-[linear-gradient(to_right,_#194141,_#419396)]";
  const customGradient = "bg-[linear-gradient(to_right,_#419396,_#194141)]";

  // Inline keyframes
  const animationStyle: React.CSSProperties = {
    animation: "fadeInUp 0.3s ease-out forwards",
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(16px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <Tag
        className={`text-transparent bg-clip-text font-bold tracking-tight ${
          useCustomGradient ? customGradient : defaultGradient
        } ${className}`}
        style={animationStyle}
      >
        {children}
      </Tag>
    </>
  );
}
