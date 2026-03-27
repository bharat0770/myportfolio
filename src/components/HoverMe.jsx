import { useState, MouseEvent, useCallback } from "react";

// Throttle function to limit call rate
function throttle(func, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    return func(...args);
  };
}

export const TiltEffect = ({image}) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });


  const onMouseMove = useCallback(
    throttle((e) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();

      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;

      // Adjust divisor (7) to change tilt intensity
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    []
  );

  const onMouseLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <div
      className="card relative h-52 w-52 rounded-xl bg-white transition-all will-change-transform"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}


      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,

        transition: "all 400ms cubic-bezier(0.03,0.98,0.52,0.99) 0s",
      }}
    >
      <div className="flex h-full w-full items-center justify-center rounded-lg">
        <img src={image} alt="my profile" className='object-cover object-center lg:max-h-100 lg:max-w-100 max-h-50 max-w-50 inset-0 rounded-full shadow-lg' />
      </div>
    </div>
  );
};   