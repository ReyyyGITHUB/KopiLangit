import MenuCard from "./MenuCard";

export default function MenuCarousel({
  menuItems,
  scrollRef,
  isDragging,
  onMouseDown,
  onMouseLeave,
  onMouseUp,
  onMouseMove,
}) {
  return (
    <div
      ref={scrollRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 px-1 w-full max-w-[1300px]"
      style={{
        cursor: isDragging ? "grabbing" : "grab",
        scrollbarColor: "#A47148 #FAF3E0",
        scrollbarWidth: "thin",
      }}
    >
      {menuItems.map((item, index) => (
        <MenuCard key={`${item.name}-${index}`} item={item} />
      ))}
    </div>
  );
}
