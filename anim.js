// ========== LETRAS CORREGIDAS (usando los tiempos exactos de Spotify) ==========
var lyricsData = [
  { text: "You're my sunlight on a rainy day", time: 13 },
  { text: "Would take my heart with you if you walked away", time: 16 },
  { text: "I'm a mess right now, I'm a wreck right now", time: 19 },
  { text: "I'm waiting for the moment that you let me down", time: 21 },
  { text: "If you cut the cord, I don't know what I'd do", time: 25 },
  { text: "Don't wanna skydive without my parachute", time: 27 },
  { text: "I'm a mess right now, baby, help me out", time: 30 },
  { text: "I'm scared I'm gonna wake up and you'll let me down", time: 33 },
  { text: "This feeling doesn't fade no matter how hard that I try", time: 36 },
  { text: "I always think about it at the same time every night", time: 41 },
  { text: "It's 3:05", time: 48 },
  { text: "I'm on a rollercoaster ride", time: 50 },
  { text: "Hoping you don't change your mind", time: 53 },
  { text: "I don't wanna let go, never been so sure in my life", time: 55 },
  { text: "I'm terrified", time: 60 },
  { text: "You'll turn around and say goodbye", time: 62 },
  { text: "Hoping you don't change your mind", time: 65 },
  { text: "I don't wanna let go, I've never been so sure in my life", time: 67 },
  { text: "If there's a door to Heaven, baby, you're the key", time: 72 },
  { text: "And if I had to beg, I'd be on my knees", time: 77 },
  { text: "Oh, please don't say anything has changed", time: 79 },
  { text: "You're the one I wanna wake up next to every day", time: 81 },
  { text: "This feeling doesn't fade no matter how hard that I try", time: 84 },
  { text: "I always think about it at the same time every night", time: 90 },
  { text: "It's 3:05", time: 96 },
  { text: "I'm on a rollercoaster ride", time: 98 },
  { text: "Hoping you don't change your mind", time: 101 },
  { text: "I don't wanna let go, never been so sure in my life", time: 103 },
  { text: "I'm terrified", time: 108 },
  { text: "You'll turn around and say goodbye", time: 110 },
  { text: "Hoping you don't change your mind", time: 113 },
  { text: "I don't wanna let go, I've never been so sure in my life", time: 115 },
  { text: "I want to be with you", time: 123 },
  { text: "I want to fly with you", time: 126 },
  { text: "I want to be with you", time: 129 },
  { text: "It's 3:05", time: 134 },
  { text: "I'm on a rollercoaster ride", time: 137 },
  { text: "Hoping you don't change your mind", time: 140 },
  { text: "I don't wanna let go, never been so sure", time: 142 },
  { text: "Baby, I'm terrified", time: 145 },
  { text: "You'll turn around and say goodbye", time: 148 },
  { text: "Hoping you don't change your mind", time: 151 },
  { text: "I don't wanna let go, I've never been so sure in my life", time: 154 }
];

// ========== VARIABLES GLOBALES ==========
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var currentLineIndex = -1; // Para saber qué línea está mostrando

// ========== FUNCIÓN PRINCIPAL CORREGIDA ==========
function updateLyrics() {
  if (!audio) return;
  
  // Obtener el tiempo actual SIN REDONDEAR
  var currentTime = audio.currentTime;
  
  // Buscar la línea que debería estar activa
  var activeLine = null;
  var activeIndex = -1;
  
  for (var i = 0; i < lyricsData.length; i++) {
    var line = lyricsData[i];
    var nextLine = lyricsData[i + 1];
    
    // Si es la última línea o estamos entre esta línea y la siguiente
    if (currentTime >= line.time && (!nextLine || currentTime < nextLine.time)) {
      activeLine = line;
      activeIndex = i;
      break;
    }
  }
  
  // Si cambió la línea activa
  if (activeIndex !== currentLineIndex) {
    currentLineIndex = activeIndex;
    
    if (activeLine) {
      // Mostrar la nueva línea
      lyrics.style.opacity = 1;
      lyrics.innerHTML = activeLine.text;
      
      // Opcional: efecto de fade out antes de cambiar
      setTimeout(function() {
        if (currentLineIndex === activeIndex) {
          // Mantener visible
        }
      }, 100);
    } else {
      // No hay línea activa
      lyrics.style.opacity = 0;
      lyrics.innerHTML = "";
    }
  }
}

// ========== ACTUALIZAR MÁS FRECUENTEMENTE ==========
// Cambiar de cada 1 segundo a cada 50ms para mejor precisión
setInterval(updateLyrics, 50);

// También actualizar cuando el audio se reproduce
if (audio) {
  audio.addEventListener('timeupdate', updateLyrics);
}

// ========== FUNCIÓN PARA DEPURAR (OPCIONAL) ==========
// Muestra en consola el tiempo actual y la línea activa
function debugInfo() {
  if (audio) {
    var currentTime = audio.currentTime.toFixed(1);
    var active = lyricsData.find(line => currentTime >= line.time && 
      (!lyricsData[lyricsData.indexOf(line) + 1] || 
       currentTime < lyricsData[lyricsData.indexOf(line) + 1].time));
    
    if (active) {
      console.log(`⏱️ Tiempo: ${currentTime}s | Letra: "${active.text.substring(0, 30)}..."`);
    }
  }
}

// Descomentar para depuración (abrir consola F12)
// setInterval(debugInfo, 2000);

// ========== FUNCIÓN PARA EL TÍTULO ==========
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.display = "block";
    setTimeout(function() {
      titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    }, 9000);
    setTimeout(function() {
      titulo.style.display = "none";
    }, 12000);
  }
}

setTimeout(ocultarTitulo, 1000);

// ========== CONTROL DE REPRODUCCIÓN (por si el audio no arranca) ==========
// Algunos navegadores requieren interacción del usuario
document.body.addEventListener('click', function() {
  if (audio && audio.paused) {
    audio.play().catch(e => console.log("Auto-play no permitido:", e));
  }
});

console.log("✅ Letras cargadas correctamente!");
console.log(`📝 Total de líneas: ${lyricsData.length}`);