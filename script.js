function openModal(videoSrc) {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("modalVideo");

    video.src = videoSrc;
    modal.style.display = "flex";
    video.play();
}

function closeModal() {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("modalVideo");

    video.pause();
    video.src = "";
    modal.style.display = "none";
}

function openThumbnailModal(imgSrc) {
    const modal = document.getElementById("thumbnailModal");
    const modalImg = document.getElementById("modalImage");

    modalImg.src = imgSrc;
    modal.style.display = "flex";

}

function closeThumbnailModal() {
    const modal = document.getElementById("thumbnailModal");
    modal.style.display = "none";
}



document.addEventListener("DOMContentLoaded", function() {
    const text = "fl0ydsg";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typewrite").textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
});

window.addEventListener('click', function(event) {
    const modal = document.getElementById("thumbnailModal");
    if (event.target === modal) {
        closeThumbnailModal();
    }
});

window.addEventListener('click', function(event) {
    const modal = document.getElementById("videoModal");
    if (event.target === modal) {
        closeModal();
    }
});
