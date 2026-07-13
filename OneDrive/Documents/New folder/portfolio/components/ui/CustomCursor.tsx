"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.left = followerX + "px";
      follower.style.top = followerY + "px";
      requestAnimationFrame(animateFollower);
    };

    const onMouseEnterLink = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(2)";
      follower.style.transform = "translate(-50%, -50%) scale(1.5)";
      follower.style.borderColor = "rgba(0, 212, 255, 0.8)";
    };

    const onMouseLeaveLink = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      follower.style.transform = "translate(-50%, -50%) scale(1)";
      follower.style.borderColor = "rgba(0, 212, 255, 0.4)";
    };

    document.addEventListener("mousemove", onMouseMove);
    animateFollower();

    const links = document.querySelectorAll("a, button, [role='button']");
    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}
