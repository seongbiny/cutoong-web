import { ReactNode, useRef, useState } from "react";

const ACCELERATION_VALUE = 30;

export default function Slider({ children }: { children: ReactNode }) {
  const [startInformation, setStartInformation] = useState({
    value: 0,
    time: new Date(Date.now()),
  });
  const [touchStartX, setTouchStartX] = useState(0);
  const [transX, setTransX] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const mediateScroll = (scrollValue: number) => {
    if (scrollValue > 0) return 0;

    if (ref.current) {
      const maxScroll = ref.current.scrollWidth - ref.current.clientWidth;

      if (maxScroll > -scrollValue) return scrollValue;

      return -maxScroll;
    }

    return 0;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);

    setStartInformation({
      value: transX,
      time: new Date(Date.now()),
    });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const moveWidth = e.touches[0].clientX - touchStartX;
    setTransX((prev) => mediateScroll(prev + moveWidth));
    setTouchStartX(e.touches[0].clientX);
  };

  return (
    <div className="overflow-hidden" style={{ overflow: "hidden" }}>
      <div
        ref={ref}
        className="flex gap-2"
        style={{
          transform: `translateX(${transX}px)`,
          transitionDuration: "300ms",
          //   transitionTimingFunciton: "ease-out",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => {
          const moveDistance =
            (transX - startInformation.value) /
            (new Date().getTime() - startInformation.time.getTime());
          setTransX((prev) =>
            mediateScroll(prev + moveDistance * ACCELERATION_VALUE)
          );
        }}
      >
        {children}
      </div>
    </div>
  );
}
