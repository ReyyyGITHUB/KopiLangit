const DEFAULT_OFFSET = 80;

const scrollToSection = (sectionId, offset = DEFAULT_OFFSET) => {
  if (typeof window === "undefined" || !sectionId) return;
  const target = document.getElementById(sectionId);
  if (!target) return;

  const top =
    target.getBoundingClientRect().top + window.scrollY - (offset ?? 0);

  window.scrollTo({
    top: top < 0 ? 0 : top,
    behavior: "smooth",
  });
};

export default scrollToSection;
