import { useRef, useState } from "react";
import MenuHeading from "./MenuHeading";
import MenuHighlight from "./MenuHighlight";
import MenuCarousel from "./MenuCarousel";
import MenuCTA from "./MenuCTA";
import menuItems from "./menuData";

export default function MenuSection() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const drag = useRef({ startX: 0, scrollLeft: 0 });

  const onMouseDown = (e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    drag.current.startX = e.pageX - scrollRef.current.offsetLeft;
    drag.current.scrollLeft = scrollRef.current.scrollLeft;
  };

  const stopDragging = () => setIsDragging(false);

  const onMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - drag.current.startX) * 1.2;
    scrollRef.current.scrollLeft = drag.current.scrollLeft - walk;
  };

  return (
    <section
      id="menu"
      className="w-full px-6 md:px-16 py-24 md:py-32 flex flex-col items-center justify-center"
      style={{ backgroundColor: "#FAF3E0" }}
    >
      <MenuHeading />

      <div className="flex flex-col items-center gap-12 shrink-0 w-full">
        <MenuHighlight />
        <MenuCarousel
          menuItems={menuItems}
          scrollRef={scrollRef}
          isDragging={isDragging}
          onMouseDown={onMouseDown}
          onMouseLeave={stopDragging}
          onMouseUp={stopDragging}
          onMouseMove={onMouseMove}
        />
      </div>

      <MenuCTA />
    </section>
  );
}
