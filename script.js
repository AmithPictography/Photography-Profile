document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".gallery");
    const images = [
        "photo1.jpg",
        "photo2.jpg",
        "photo3.jpg"
    ];

    images.forEach(img => {
        let imgElement = document.createElement("img");
        imgElement.src = `images/${img}`;
        gallery.appendChild(imgElement);

        imgElement.addEventListener("click", () => {
            openLightbox(imgElement.src);
        });
    });

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.getElementById("close");

    function openLightbox(src) {
        lightbox.style.display = "flex";
        lightboxImg.src = src;
    }

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
});
