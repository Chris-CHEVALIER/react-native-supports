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

  // Le bouton « Copier » d'un bloc relié à un fichier copie le fichier entier, tel qu'injecté
  document.querySelectorAll(".reveal pre[data-fichier]").forEach((pre) => {
    pre.dataset.source = pre.querySelector("code").textContent;
  });

  // Dans le PDF, un fichier plus long que son bloc continue sur des diapos « (suite) »
  if (/print-pdf/.test(location.search)) {
    document.querySelectorAll(".reveal pre[data-fichier]").forEach((pre) => {
      const code = pre.querySelector("code");
      const lignes = pre.dataset.source.split("\n");
      const parPage = 20;
      code.setAttribute("data-line-numbers", "");
      if (lignes.length <= parPage) return;
      code.textContent = lignes.slice(0, parPage).join("\n");
      const diapo = pre.closest("section");
      const titre = diapo.querySelector("h2").innerHTML;
      let precedente = diapo;
      for (let debut = parPage; debut < lignes.length; debut += parPage) {
        const suite = document.createElement("section");
        const bloc = pre.cloneNode(true);
        bloc.className = "mini";
        const morceau = bloc.querySelector("code");
        morceau.textContent = lignes.slice(debut, debut + parPage).join("\n");
        morceau.setAttribute("data-ln-start-from", String(debut + 1));
        suite.innerHTML = `<h2>${titre} (suite)</h2><div class="corps"></div>`;
        suite.querySelector(".corps").appendChild(bloc);
        precedente.after(suite);
        precedente = suite;
      }
    });
  }

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
      const code = pre.dataset.source ?? pre.querySelector("code").innerText.replace(/^\$ /gm, "");
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
