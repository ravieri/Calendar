let currentIndex = 0;
const carouselSlide = document.getElementById("carousel-slide");
const carouselItems = document.querySelectorAll(".carousel-item");
const carouselContainer = document.getElementById("carousel-container");

const colors = ["#1a1a2e", "#282846", "#6a0dad", "#494973", "#1a1a2e"]; // Cores para o carrossel

function updateCarousel() {
  const slideWidth = carouselItems[0].clientWidth;
  carouselSlide.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  carouselContainer.style.backgroundColor = colors[currentIndex % colors.length]; // Altera a cor de fundo
}

// Navegação para o próximo slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
}

// Navegação para o slide anterior
function prevSlide() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
}

// Automação do carrossel
setInterval(nextSlide, 8000);

// Função para exibir esportes
function showSports() {
  document.getElementById("sports").style.display = "block";
  document.getElementById("sport-image").style.display = "none";
}

// Função para exibir imagem do esporte
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
      4: ["fotos2025/brasilnovo4.png", "fotos2025/INTERNACIONALNOVO3.png"],
      5: ["fotos2025/brasilnovo5.png", "fotos2025/INTERNACIONALNOVO4.png"],
      6: ["fotos2025/brasilnovo6.png", "fotos2025/INTERNACIONALNOVO5.png"],
      7: ["fotos2025/brasilnovo7.png", "fotos2025/INTERNACIONALNOVO6.png"]
    },
    tennis: {
      1: ["manu.webp"],
      2: ["fotos2025/tenisnovo1.png"],
      3: ["manu.webp"],
      4: ["fotos2025/tenisnovo2.png"],
      5: ["manu.webp"],
      6: ["manu.webp"],
      7: ["fotos2025/tenisnovo3.png"]
    },
    basquete: {
      1: ["basquete2025-03.png"],
      2: ["fotos2025/basquetenovo1.png"],
      3: ["fotos2025/basquetenovo2.png"],
      4: ["fotos2025/basquetenovo3.png"],
      5: ["fotos2025/basquetenovo4.png"],
      6: ["fotos2025/basquetenovo5.png"],
      7: ["fotos2025/basquetenovo6.png"]
    },
    cs: {
      1: ["infelizmente.png"],
      2: ["infelizmente.png"],
      3: ["infelizmente.png"],
      4: ["manu.webp"],
      5: ["infelizmente.png"],
      6: ["infelizmente.png"],
      7: ["infelizmente.png"]
    },
    mma: {
      1: ["infelizmente.png"],
      2: ["manu.webp"],
      3: ["manu.webp"],
      4: ["manu.webp"],
      5: ["manu.webp"],
      6: ["manu.webp"],
      7: ["fotos2025/MMA1.png"]
    },
    vollei: {
      3: ["infelizmente.png"],
      4: ["manu.webp"],
      5: ["vollei23-29.png"],
      6: [],
      7: [],
      8: [],
      9: []
    }
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

// Adiciona funcionalidade de arrastar ao carrossel
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;

carouselSlide.addEventListener('mousedown', startDragging);
carouselSlide.addEventListener('mousemove', drag);
carouselSlide.addEventListener('mouseup', stopDragging);
carouselSlide.addEventListener('mouseleave', stopDragging);
carouselSlide.addEventListener('touchstart', startDragging);
carouselSlide.addEventListener('touchmove', drag);
carouselSlide.addEventListener('touchend', stopDragging);

function startDragging(e) {
  isDragging = true;
  startPos = getPositionX(e);
  carouselSlide.style.transition = 'none'; // Desativa transição durante o arraste
}

function drag(e) {
  if (isDragging) {
    const currentPosition = getPositionX(e);
    currentTranslate = prevTranslate + currentPosition - startPos;
    carouselSlide.style.transform = `translateX(${currentTranslate}px)`;
  }
}

function stopDragging() {
  if (isDragging) {
    isDragging = false;
    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -100 && currentIndex < carouselItems.length - 1) {
      currentIndex++;
    } else if (movedBy > 100 && currentIndex > 0) {
      currentIndex--;
    }
    prevTranslate = -currentIndex * carouselItems[0].clientWidth; // Ajusta para a posição do slide atual
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    updateCarousel();
  }
}

function getPositionX(e) {
  return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

// Inicialização
updateCarousel();