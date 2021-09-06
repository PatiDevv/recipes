import { useGesture } from 'react-use-gesture';
import { animated, to, useSpring } from 'react-spring';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 70%;
  margin: 4%;
  pointer-events: none;
  cursor: pointer;
`;

const calcX = (y: number, ly: number) => -(y - ly - window.innerHeight / 2) / 20;
const calcY = (x: number, lx: number) => (x - lx - window.innerWidth / 2) / 20;

document.addEventListener('gesturestart', (e) => e.preventDefault());
document.addEventListener('gesturechange', (e) => e.preventDefault());

interface CardInterface {
  image: React.ReactNode;
}

function CardUseGesture({ image }: CardInterface) {
  const domTarget = useRef(null);
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, set] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 0.8,
    zoom: 0,
    x: 0,
    y: 0,
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const [drag, setDrag] = useState(false);

  useGesture(
    {
      onDragStart: () => setDrag(true),
      onDrag: ({ offset: [x, y] }) => set({ x, y, rotateX: 0, rotateY: 0, scale: 0.8 }),
      onDragEnd: () => setDrag(false),
      onPinch: ({ offset: [d, a] }) => set({ zoom: d / 200, rotateZ: a }),
      onMove: ({ xy: [px, py], dragging }) => !dragging && set({ rotateX: calcX(py, y.get()), rotateY: calcY(px, x.get()), scale: 0.8 }),
      onHover: ({ hovering }) => !hovering && set({ rotateX: 0, rotateY: 0, scale: 0.8 }),
    },
    { domTarget, eventOptions: { passive: false } },
  );

  return (
    <animated.div
      ref={domTarget}
      className={`${drag ? 'dragging' : ''}`}
      style={{ transform: 'perspective(600px)', x, y, scale: to([scale, zoom], (s, z) => s + z), rotateX, rotateY, rotateZ }}>
      {image}
    </animated.div>
  );
}
export default CardUseGesture;
