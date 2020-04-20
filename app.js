(function() {
    var urlParams = new URLSearchParams(window.location.search);

    if (!urlParams.has("corrige")) {
        document.querySelectorAll("input").forEach(function (e) {
            e.value = "";
            e.checked = false;
        });

        document.querySelectorAll("textarea").forEach(function (e) {
            e.innerText = "";
        });

        document.querySelectorAll(".mots-caches .reponse").forEach(function (e) {
            e.className = "";
        });
    }

    var corrige = document.createElement("div");
    corrige.innerHTML = `
<a href="?corrige" class="button primary">Voir les réponses</a>
<a href="?" class="button primary">Masquer les réponses</a>
<a href="index.html" class="button primary">Retour à l'accueil</a>`;
    corrige.classList.add("footer");
    document.body.append(corrige);
})();