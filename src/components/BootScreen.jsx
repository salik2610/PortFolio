import { useEffect } from "react";
import gsap from "gsap";

const AppleLogoIcon = ({
  size = 96,
  color = "#ffffff", // fixed default color
  strokeWidth = 1.5,
  background = "transparent",
  opacity = 1,
  rotation = 0,
  shadow = 0,
  flipHorizontal = false,
  flipVertical = false,
  padding = 0
}) => {
  const transforms = [];
  if (rotation !== 0) transforms.push(`rotate(${rotation}deg)`);
  if (flipHorizontal) transforms.push("scaleX(-1)");
  if (flipVertical) transforms.push("scaleY(-1)");

  const viewBoxSize = 24 + padding * 2;
  const viewBoxOffset = -padding;
  const viewBox = `${viewBoxOffset} ${viewBoxOffset} ${viewBoxSize} ${viewBoxSize}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={size}
      height={size}
      fill={color} // ✅ use fill instead of stroke
      stroke="none"
      strokeWidth={strokeWidth}
      className="mb-14"
      style={{
        opacity,
        transform: transforms.join(" ") || undefined,
        filter:
          shadow > 0
            ? `drop-shadow(0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.3))`
            : undefined,
        backgroundColor:
          background !== "transparent" ? background : undefined
      }}
    >
      <path d="M8.5 7c1.6 0 2.537 1 3.5 1s2.4-1 4-1c1.135 0 2.592.644 3.64 1.933c-.58.382-1.742 1.524-1.742 4.067c0 1.97 1.657 3.523 2.486 3.823c-.901 2.986-2.66 5.677-4.384 5.677c-1.5 0-2.5-1-4-1s-2 1-3.5 1c-2.465 0-5-5.5-5-9.5s3-6 5-6ZM12 6q0-4.5 4.5-4.5Q16.5 6 12 6Z" />
    </svg>
  );
};

const BootScreen = ({ onComplete }) => {
  useEffect(() => {
    gsap.fromTo(
      ".boot-progress",
      { width: "0%" },
      {
        width: "100%",
        duration: 2.5,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.to(".boot-screen", {
            opacity: 0,
            duration: 0.8,
            delay: 0.3,
            onComplete: onComplete
          });
        }
      }
    );
  }, [onComplete]);

  return (
    <div className="boot-screen fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center pointer-events-auto">
      {/* Apple Logo */}
      <AppleLogoIcon size={80} color="#ffffff" />

      {/* Progress Bar */}
      <div className="w-48 sm:w-56 h-1 bg-[#333333] rounded-full overflow-hidden">
        <div className="boot-progress h-full bg-white"></div>
      </div>
    </div>
  );
};

export default BootScreen;