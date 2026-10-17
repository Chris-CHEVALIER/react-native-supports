/* ==========================================================================
   Habillage des diapositives (charte neutre, sans logo)
   - ajoute les éléments décoratifs selon data-layout
   - ajoute le pied de page et le numéro de diapositive
   - ajoute un bouton « Copier » sur chaque bloc de code
   - initialise reveal.js
   ========================================================================== */
(function () {
  const COULEURS_FOND = { titre: "#1B1E3C", sommaire: "#1B1E3C", section: "#1B1E3C", contenu: "#FFFFFF" };

  const DECORS = {
    titre: `<div class="grille-points"></div><div class="trait"></div><div class="telephone"></div>`,
    sommaire: `<div class="grille-points"></div><div class="telephone"></div>`,
    section: `<div class="grille-points"></div><div class="telephone"></div>`,
    contenu: `<div class="lisere"></div><div class="puce-titre"></div>`,
  };

  const piedDePage = document.body.dataset.pied || "";
  const diapos = [...document.querySelectorAll(".reveal .slides section")].filter(
    (s) => !s.querySelector("section")
  );

  diapos.forEach((diapo, index) => {
    const layout = diapo.dataset.layout || "contenu";
    diapo.classList.add("l-" + layout);

    // Les titres sont en display:flex : on enveloppe leur contenu pour préserver les espaces
    diapo.querySelectorAll(":scope > h1, :scope > h2").forEach((titre) => {
      titre.innerHTML = `<span>${titre.innerHTML}</span>`;
    });
    diapo.dataset.backgroundColor = COULEURS_FOND[layout];

    const deco = document.createElement("div");
    deco.className = "deco";
    deco.setAttribute("aria-hidden", "true");
    deco.innerHTML = DECORS[layout];
    diapo.prepend(deco);

    if (layout === "contenu") {
      diapo.insertAdjacentHTML(
        "beforeend",
        `<div class="pied">${piedDePage}</div><div class="numero-diapo">${index + 1} / ${diapos.length}</div>`
      );
    }
  });

  document.querySelectorAll(".reveal pre").forEach((pre) => {
    const bouton = document.createElement("button");
    bouton.className = "copier";
    bouton.type = "button";
    bouton.textContent = "Copier";
    bouton.addEventListener("click", async () => {
      const code = pre.querySelector("code").innerText.replace(/^\$ /gm, "");
      try {
        await navigator.clipboard.writeText(code);
        bouton.textContent = "Copié !";
      } catch {
        bouton.textContent = "Échec";
      }
      setTimeout(() => (bouton.textContent = "Copier"), 1500);
    });
    pre.appendChild(bouton);
  });

  Reveal.initialize({
    width: 1280,
    height: 720,
    margin: 0,
    center: false,
    hash: true,
    controls: true,
    progress: true,
    transition: "fade",
    transitionSpeed: "fast",
    pdfSeparateFragments: false,
    plugins: [RevealHighlight, RevealNotes],
  });
})();
