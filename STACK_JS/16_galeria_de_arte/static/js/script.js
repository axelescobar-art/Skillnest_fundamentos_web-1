const artImage = document.getElementById("art-image");
const artTitle = document.getElementById("art-title");

const originalImg = "static/images/campo.png";
const hoverImg = "static/images/noche.png";

const originalText = "Campo de trigo con cipreses, Vincent van Gogh (1889)";
const hoverText = "La noche estrellada, Vincent van Gogh (1889)";

artImage.addEventListener("mouseover", () => {
    artImage.src = hoverImg;
    artTitle.textContent = hoverText;
});

artImage.addEventListener("mouseout", () => {
    artImage.src = originalImg;
    artTitle.textContent = originalText;
});