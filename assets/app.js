(() => {
  const links = [...document.querySelectorAll(".nav a[href^='#']")];
  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  const search = document.querySelector("#manual-search");
  const searchable = [...document.querySelectorAll("section[data-search]")];

  const setActive = () => {
    const y = window.scrollY + 120;
    let current = sections[0];
    for (const s of sections) {
      if (s.offsetTop <= y) current = s;
    }
    links.forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === `#${current.id}`);
    });
  };

  const filter = () => {
    const q = (search?.value || "").trim().toLowerCase();
    searchable.forEach((sec) => {
      const hay = (sec.dataset.search || "") + " " + sec.innerText;
      const ok = !q || hay.toLowerCase().includes(q);
      sec.classList.toggle("hidden-by-search", !ok);
    });
  };

  window.addEventListener("scroll", setActive, { passive: true });
  search?.addEventListener("input", filter);
  setActive();
})();
