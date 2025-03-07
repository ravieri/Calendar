let currentIndex = 0;
const carouselSlide = document.getElementById("carousel-slide");
const carouselItems = document.querySelectorAll(".carousel-item");
const carouselContainer = document.getElementById("carousel-container");

const colors = ["#1a1a2e", "#282846", "#6a0dad", "#494973", "#1a1a2e"]; // Cores para o carrossel

function updateCarousel() {
  const slideWidth = carouselItems[0].clientWidth;
  carouselSlide.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  carouselContainer.style.backgroundColor =
    colors[currentIndex % colors.length]; // Altera a cor de fundo
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
}

setInterval(nextSlide, 8000);

function showSports() {
  document.getElementById("sports").style.display = "block";
  document.getElementById("sport-image").style.display = "none";
}

function showSportImage(sport) {
  const date = document.getElementById("date").value;
  const imgContainer = document.getElementById("sport-img-container");
  imgContainer.innerHTML = ""; // Limpa o container de imagens

  // Mapear imagens para cada esporte e data
  const sportImages = {
    futebol: {
      1: ["brasil2025-3.png", "internacional2025-03.png"],
      2: ["fotos2025/brasilnovo1.png", "fotos2025/INTERNACIONALNOVO1.png"],
      3: ["fotos2025/brasilnovo3.png", "fotos2025/INTERNACIONALNOVO2.png"],
      4: ['fotos2025/brasilnovo4.png', 'fotos2025/INTERNACIONALNOVO3.png'],
      5: ['fotos2025/brasilnovo5.png', 'fotos2025/INTERNACIONALNOVO4.png'],
      6: ['fotos2025/brasilnovo6.png','fotos2025/INTERNACIONALNOVO5.png'], // Em branco
      7: []  // Em branco
    },
    tennis: {
      1: ["manu.webp"],
      2: ["fotos2025/tenisnovo1.png"],
      3: ["manu.webp"],
      4: ['fotos2025/tenisnovo2.png'],
      5: ["manu.webp"],
      6: ["manu.webp"], // Em branco
      7: []  // Em branco
    },
    basquete: {
      1: ["basquete2025-03.png"],
      2: ["fotos2025/basquetenovo1.png"],
      3: ["fotos2025/basquetenovo2.png"],
      4: ['fotos2025/basquetenovo3.png'],
      5: ['fotos2025/basquetenovo4.png'],
      6: ['fotos2025/basquetenovo5.png'], // Em branco
      7: []  // Em branco
    },
    cs: {
      1: ["infelizmente.png"],
      2: ["infelizmente.png"],
      3: ["infelizmente.png"],
      4: ["manu.webp"],
      5: ["infelizmente.png"],
      6: ["infelizmente.png"], // Em branco
      7: []  // Em branco
    },
    mma: {
      1: ["infelizmente.png"],
      2: ["manu.webp"],
      3: ["manu.webp"],
      4: ["manu.webp"],
      5: ["manu.webp"],
      6: ["manu.webp"], // Em branco
      7: []  // Em branco
    },
    vollei: {
      3: ["infelizmente.png"],
      4: ["manu.webp"],
      5: ["vollei23-29.png"],
      6: [],
      7: [], // Mantido como vazio
      8: [], // Em branco
      9: []  // Em branco
    },
  };

  // Verifica se há imagens para o esporte e data selecionados
  if (sportImages[sport] && sportImages[sport][date]) {
    const images = sportImages[sport][date];
    images.forEach((imgSrc) => {
      imgContainer.innerHTML += `<img src="${imgSrc}" alt="${sport} image" style="width: 100%; max-width: 1000px;">`;
    });
    document.getElementById("sport-image").style.display = "block"; // Exibe a seção de imagens
  } else {
    imgContainer.innerHTML = `<p>Imagens não disponíveis para este esporte e data.</p>`;
  }
}
