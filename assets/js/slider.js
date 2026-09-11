
const images = [{
        src: "assets/photos/image 10.png",
        text: "hah"
    },
    {
        src: "assets/photos/image 12.png",
        text: "hihi"
    },
    {
        src: "assets/photos/image 10.png",
        text: "awa"
    }
];

let currentIndex = 0;
const phoneImage = document.getElementById('phoneImage');
const hoverText = document.getElementById('hoverText');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateImage() {
    phoneImage.src = images[currentIndex].src;
    hoverText.textContent = images[currentIndex].text;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

updateImage();

