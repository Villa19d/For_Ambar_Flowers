// ═══════════════════════════════════════════════════════════════════
//  WONDER VISUAL ENGINE — Frases Flotantes en Fondo 🌸
//  Las letras principales NO se modifican
// ═══════════════════════════════════════════════════════════════════

// ─── DATOS DE LETRAS (tiempos ajustados) ─────────────────────────
var lyricsData = [
  { text: "You're my sunlight on a rainy day", time: 12 },
  { text: "Would take my heart with you if you walked away", time: 16 },
  { text: "I'm a mess right now, I'm a wreck right now", time: 19 },
  { text: "I'm waiting for the moment that you let me down", time: 21 },
  { text: "If you cut the cord, I don't know what I'd do", time: 24 },
  { text: "Don't wanna skydive without my parachute", time: 27 },
  { text: "I'm a mess right now, baby, help me out", time: 30 },
  { text: "I'm scared I'm gonna wake up and you'll let me down", time: 33 },
  { text: "This feeling doesn't fade no matter how hard that I try", time: 36 },
  { text: "I always think about it at the same time every night", time: 41 },
  { text: "It's 3:05", time: 48 },
  { text: "I'm on a rollercoaster ride", time: 50 },
  { text: "Hoping you don't change your mind", time: 53 },
  { text: "I don't wanna let go, never been so sure in my life", time: 55 },
  { text: "I'm terrified", time: 59 },
  { text: "You'll turn around and say goodbye", time: 61 },
  { text: "Hoping you don't change your mind", time: 64 },
  { text: "I don't wanna let go, I've never been so sure in my life", time: 66 },
  { text: "If there's a door to Heaven, baby, you're the key", time: 72 },
  { text: "And if I had to beg, I'd be on my knees", time: 75 },
  { text: "Oh, please don't say anything has changed", time: 78 },
  { text: "You're the one I wanna wake up next to every day", time: 81 },
  { text: "This feeling doesn't fade no matter how hard that I try", time: 84 },
  { text: "I always think about it at the same time every night", time: 89 },
  { text: "It's 3:05", time: 95 },
  { text: "I'm on a rollercoaster ride", time: 98 },
  { text: "Hoping you don't change your mind", time: 101 },
  { text: "I don't wanna let go, never been so sure in my life", time: 103 },
  { text: "I'm terrified", time: 107 },
  { text: "You'll turn around and say goodbye", time: 109 },
  { text: "Hoping you don't change your mind", time: 112 },
  { text: "I don't wanna let go, I've never been so sure in my life", time: 114 },
  { text: "I want to be with you", time: 122 },
  { text: "I want to fly with you", time: 125 },
  { text: "I want to be with you", time: 128 },
  { text: "It's 3:05", time: 133 },
  { text: "I'm on a rollercoaster ride", time: 136 },
  { text: "Hoping you don't change your mind", time: 139 },
  { text: "I don't wanna let go, never been so sure", time: 141 },
  { text: "Baby, I'm terrified", time: 144 },
  { text: "You'll turn around and say goodbye", time: 147 },
  { text: "Hoping you don't change your mind", time: 150 },
  { text: "I don't wanna let go, I've never been so sure in my life", time: 153 }
];

// ─── FRASES FLOTANTES PARA ÁMBAR  ──
var ambarFloatingPhrases = [
  // Intro - primeros segundos
  { text: "Eres lo más increíble que me ha pasado", time: 5, duration: 4.5 },
  { text: "Me traes completamente enamorado, mujer", time: 9, duration: 4 },
  { text: "Tus ojitos preciosos me tienen loco", time: 13, duration: 4.5 },
  { text: "Mi niña bonita, mi hermosa", time: 17, duration: 4 },
  { text: "Mi mundo es mas bonito desde que llegaste", time: 21, duration: 4 },
  
  // Primer tercio de la canción
  { text: "Quiero besarte hasta que amanezca", time: 25, duration: 4.5 },
  { text: "No hay nadie como tu en este universo", time: 29, duration: 4.5 },
  { text: "Iluminas hasta mis días más grises", time: 33, duration: 4 },
  { text: "Amos a dormir juntos, mi amor", time: 37, duration: 4 },
  { text: "Gracias por existir en mi vida", time: 41, duration: 4.5 },
  
  // Mitad de la canción
  { text: "Eres perfecta tal cual, mi niña hermosa", time: 46, duration: 5 },
  { text: "Cada día te amo más, con todo mi ser", time: 51, duration: 4 },
  { text: "Eres la mujer más maravillosa y hermosa", time: 55, duration: 4 },
  { text: "Que nadie me despierte de este sueño contigo", time: 59, duration: 4.5 },
  { text: "Te amo más que a nada en este mundo", time: 63, duration: 4.5 },
  
  // Segundo tercio
  { text: "Admiro todo de ti, mi inteligente preciosa", time: 68, duration: 4 },
  { text: "Tu sonrisa me mamaa mujer", time: 72, duration: 4 },
  { text: "Y tu risa… aghh, me vuelve adicto", time: 76, duration: 4.5 },
  { text: "¿Por que eres tan maravillosa?", time: 80, duration: 3.5 },
  { text: "Eres un sueño hecho realidad", time: 84, duration: 4 },
  
  // Hacia el final
  { text: "No quiero imaginar mi vida sin ti", time: 89, duration: 4.5 },
  { text: "Quédate a mi lado toda la vida", time: 93, duration: 4 },
  { text: "Quiero vivir miles de recuerdos a tu lado", time: 97, duration: 4 },
  { text: "Eres mi motor, corazón", time: 101, duration: 4 },
  { text: "Eres excelente en todo lo que haces,te admiro", time: 105, duration: 4.5 },
  
  // Últimos compases
  { text: "Tu me haces querer ser mejor", time: 110, duration: 4 },
  { text: "Eres mi mayor tesoro, mi Ámbar", time: 114, duration: 4 },
  { text: "Gracias por elegirme cada día", time: 118, duration: 4 },
  { text: "Eres mi todo, siempre", time: 122, duration: 4.5 },
  { text: "Te amo con cada fibra de mi ser", time: 126, duration: 4 },
  
  // Final de la canción
  { text: "Mi vida hermosa eres la mejor", time: 131, duration: 4.5 },
  { text: "Mi princesa, eres la mas capaz para todo", time: 135, duration: 4 },
  { text: "Eres mi mejor amiga, novia y equipo", time: 139, duration: 4.5 },
  { text: "Gracias por ser quien eres, mi amor", time: 143, duration: 4.5 },
  { text: "Te amo más de lo que las palabras pueden decir", time: 148, duration: 5 },
  { text: "Mi noña bonita, Te Amo", time: 153, duration: 5 } // Un último cierre personal
];

// ─── PALETAS DE COLORES ELEGANTES ────────────────────────────────
var colorPalettes = {
  gold:   ["rgba(255,215,120,",  "rgba(255,200,100,",  "rgba(255,220,140,"],
  rose:   ["rgba(255,200,180,", "rgba(255,170,150,", "rgba(255,190,170,"],
  blue:   ["rgba(140,180,255,",  "rgba(120,160,240,", "rgba(160,200,255,"]
};

// ═══════════════════════════════════════════════════════════════════
//  CÓDIGO PRINCIPAL
// ═══════════════════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", function() {

  // ─── REFERENCIAS AL DOM ─────────────────────────────────────────
  var audio = document.querySelector("audio");
  var lyricsEl = document.querySelector("#lyrics");
  var floatingEl = document.querySelector("#floating-forms");
  var canvas = document.querySelector("#wonder-canvas");
  var ctx = canvas ? canvas.getContext("2d") : null;

  // ─── ZONAS PROHIBIDAS (NO aparecer sobre flores ni sobre el área de letras) ───
  var forbiddenZones = [
  { xMin: 35, xMax: 65, yMin: 58, yMax: 92 },   // Zona de flores (un poco más pequeña)
  { xMin: 38, xMax: 62, yMin: 25, yMax: 48 }    // Zona de letras (más centrada)
];
  
  function isSafePosition(x, y) {
    for (var i = 0; i < forbiddenZones.length; i++) {
      var zone = forbiddenZones[i];
      if (x >= zone.xMin && x <= zone.xMax && y >= zone.yMin && y <= zone.yMax) {
        return false;
      }
    }
    return true;
  }
  
 function getSafePosition() {
  var maxAttempts = 40;
  // Margen de 8% en los bordes para que no se peguen a la pared
  var margin = 8;
  
  for (var i = 0; i < maxAttempts; i++) {
    var x = margin + Math.random() * (100 - margin * 2);
    var y = margin + Math.random() * (100 - margin * 2);
    if (isSafePosition(x, y)) {
      return { x: x, y: y };
    }
  }
  
  // Si no encuentra, devuelve posiciones con más margen
  var side = Math.floor(Math.random() * 4);
  if (side === 0) return { x: margin + Math.random() * 25, y: margin + Math.random() * 40 };
  if (side === 1) return { x: 75 - Math.random() * 25, y: margin + Math.random() * 40 };
  if (side === 2) return { x: margin + Math.random() * 25, y: 60 - Math.random() * 30 };
  return { x: 75 - Math.random() * 25, y: 60 - Math.random() * 30 };
}

  // ─── CONFIGURACIÓN DEL CANVAS ───────────────────────────────────
  function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // ─── PARTÍCULAS DE FONDO ELEGANTES ─────────────────────────────
  function Particle() { this.reset(); }
  
  Particle.prototype.reset = function() {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.radius = Math.random() * 1.5 + 0.3;
    this.opacity = Math.random() * 0.3 + 0.05;
    this.speed = Math.random() * 0.2 + 0.03;
    this.angle = Math.random() * Math.PI * 2;
    this.drift = (Math.random() - 0.5) * 0.2;
    this.pulse = Math.random() * Math.PI * 2;
    this.pulseSpd = Math.random() * 0.02 + 0.005;
    this.isGold = Math.random() > 0.7;
  };
  
  Particle.prototype.update = function() {
    this.y -= this.speed;
    this.x += Math.sin(this.angle) * this.drift;
    this.angle += 0.008;
    this.pulse += this.pulseSpd;
    this.r = this.radius * (1 + Math.sin(this.pulse) * 0.3);
    if (this.y < -20) this.reset();
  };
  
  Particle.prototype.draw = function(c) {
    var col = this.isGold
      ? "rgba(255,215,140," + this.opacity + ")"
      : "rgba(180,200,240," + this.opacity + ")";
    c.save();
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    c.fillStyle = col;
    c.fill();
    c.restore();
  };

  var particles = [];
  for (var i = 0; i < 100; i++) particles.push(new Particle());

  function animateCanvas() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var k = 0; k < particles.length; k++) {
      particles[k].update();
      particles[k].draw(ctx);
    }
    requestAnimationFrame(animateCanvas);
  }
  animateCanvas();

  // ─── FUNCIONES AUXILIARES ──────────────────────────────────────
  function rndColor(palette) {
    var p = colorPalettes[palette] || colorPalettes.gold;
    return p[Math.floor(Math.random() * p.length)];
  }
  
  function addEl(el, dur) {
    if (!floatingEl) return;
    floatingEl.appendChild(el);
    setTimeout(function() { 
      if (el.parentNode) el.parentNode.removeChild(el); 
    }, dur * 1000 + 500);
  }
  
  function trimFloating() {
    if (floatingEl && floatingEl.children.length > 120) {
      while (floatingEl.children.length > 100) {
        floatingEl.removeChild(floatingEl.firstChild);
      }
    }
  }

  // ─── FRASES FLOTANTES DE FONDO (NO TOCAN LAS LETRAS) ────────────
  function createFloatingPhrase(text, palette) {
    var pos = getSafePosition();
    var el = document.createElement("div");
    el.className = "wonder-floating-phrase";
    var c = rndColor(palette);
    var dur = 4 + Math.random() * 2.5;
    var fontSize = 13 + Math.random() * 7;
    var rot = (Math.random() - 0.5) * 12;
    var directionX = (Math.random() - 0.5) * 60;
    var directionY = -40 - Math.random() * 50;
    
    el.textContent = text;
    el.style.cssText = 
      "left:" + pos.x + "%;" +
      "top:" + pos.y + "%;" +
      "font-family:'Cormorant Garamond', serif;" +
      "font-size:" + fontSize + "px;" +
      "font-weight:300;" +
      "font-style:italic;" +
      "color:" + c + "0.85);" +
      "text-shadow:0 0 10px " + c + "0.5);" +
      "letter-spacing:0.02em;" +
      "white-space:nowrap;" +
      "animation: phraseFloatBg " + dur + "s ease-out forwards;" +
      "opacity:0;" +
      "pointer-events:none;" +
      "position:absolute;" +
      "transform:rotate(" + rot + "deg);" +
      "z-index:18;" +
      "--move-x:" + directionX + "px;" +
      "--move-y:" + directionY + "px;";
    
    addEl(el, dur);
  }

  // ─── FORMAS ELEGANTES ──────────────────────────────────────────
  
  // Polvo de estrellas
  function createStardust(palette, count) {
    for (var j = 0; j < count; j++) {
      var pos = getSafePosition();
      var el = document.createElement("div");
      el.className = "wonder-stardust";
      var size = 2 + Math.random() * 4;
      var c = rndColor(palette);
      var dur = 3 + Math.random() * 3;
      var opacity = 0.4 + Math.random() * 0.4;
      
      el.style.cssText = 
        "left:" + pos.x + "%;" +
        "top:" + pos.y + "%;" +
        "width:" + size + "px;" +
        "height:" + size + "px;" +
        "background:" + c + opacity + ");" +
        "border-radius:50%;" +
        "box-shadow:0 0 " + (size * 2) + "px " + c + (opacity * 0.8) + ");" +
        "animation: stardustFloat " + dur + "s ease-out forwards;" +
        "opacity:0;" +
        "pointer-events:none;" +
        "position:absolute;" +
        "z-index:16;";
      
      addEl(el, dur);
    }
  }
  
  // Pétalos sutiles
  function createPetal(palette) {
    var pos = getSafePosition();
    var el = document.createElement("div");
    el.className = "wonder-petal-elegant";
    var size = 6 + Math.random() * 10;
    var c = rndColor(palette);
    var dur = 5 + Math.random() * 3;
    var rot = Math.random() * 360;
    
    el.style.cssText = 
      "left:" + pos.x + "%;" +
      "top:" + pos.y + "%;" +
      "width:" + size + "px;" +
      "height:" + (size * 1.5) + "px;" +
      "background:linear-gradient(135deg, " + c + "0.5), transparent);" +
      "border-radius:50% 50% 50% 0%;" +
      "animation: petalFloat " + dur + "s ease-out forwards;" +
      "transform:rotate(" + rot + "deg);" +
      "opacity:0;" +
      "pointer-events:none;" +
      "position:absolute;" +
      "z-index:16;";
    
    addEl(el, dur);
  }
  
  // Luz suave
  function createGlow(palette) {
    var pos = getSafePosition();
    var el = document.createElement("div");
    el.className = "wonder-glow";
    var size = 60 + Math.random() * 80;
    var c = rndColor(palette);
    var dur = 5 + Math.random() * 3;
    
    el.style.cssText = 
      "left:" + pos.x + "%;" +
      "top:" + pos.y + "%;" +
      "width:" + size + "px;" +
      "height:" + size + "px;" +
      "background:radial-gradient(circle, " + c + "0.1), transparent);" +
      "border-radius:50%;" +
      "animation: glowFloat " + dur + "s ease-out forwards;" +
      "opacity:0;" +
      "pointer-events:none;" +
      "position:absolute;" +
      "filter:blur(12px);" +
      "transform:translate(-50%, -50%);" +
      "z-index:15;";
    
    addEl(el, dur);
  }

  // ─── SPAWN DE FORMAS PARA LETRAS (sutil) ───────────────────────
  function spawnForLyric(text) {
    trimFloating();
    createStardust("gold", 2 + Math.floor(Math.random() * 3));
    if (Math.random() > 0.7) createPetal("rose");
  }

  // ─── SPAWN DE FRASE FLOTANTE PARA ÁMBAR (SOLO FONDO) ───────────
  var activatedPhrases = {};
  
  function spawnAmbarFloatingPhrase(message) {
    var msgKey = message.text + message.time;
    if (activatedPhrases[msgKey]) return;
    activatedPhrases[msgKey] = true;
    
    trimFloating();
    
    // Crear la frase flotante en posición segura (fondo)
    createFloatingPhrase(message.text, "gold");
    
    // Acompañar con elementos visuales
    setTimeout(function() {
      createStardust("gold", 5);
      createStardust("rose", 3);
    }, 200);
    
    setTimeout(function() {
      createGlow("gold");
      createPetal("rose");
    }, 500);
  }

  // ─── FORMAS AMBIENTALES SUTILES ────────────────────────────────
  setInterval(function() {
    if (!audio || audio.paused) return;
    var rand = Math.random();
    
    if (rand < 0.35) {
      createStardust("gold", 1 + Math.floor(Math.random() * 2));
    } else if (rand < 0.6) {
      createPetal("rose");
    }
  }, 2800);

  // ─── ACTUALIZACIÓN DE LETRAS (LAS LETRAS PRINCIPALES NO SE TOCAN) ───
  var currentLineIndex = -1;

  function updateLyrics() {
    if (!audio || !lyricsEl) return;
    var currentTime = audio.currentTime;

    // Verificar frases flotantes de Ámbar (SOLO FONDO, NO MODIFICAN LAS LETRAS)
    for (var a = 0; a < ambarFloatingPhrases.length; a++) {
      var msg = ambarFloatingPhrases[a];
      if (currentTime >= msg.time && currentTime < msg.time + msg.duration) {
        spawnAmbarFloatingPhrase(msg);
        break;
      }
    }

    // --- LETRAS PRINCIPALES (INTOCABLES) ---
    var activeLine = null;
    var activeIndex = -1;
    for (var i = 0; i < lyricsData.length; i++) {
      var line = lyricsData[i];
      var nextLine = lyricsData[i + 1];
      if (currentTime >= line.time && (!nextLine || currentTime < nextLine.time)) {
        activeLine = line;
        activeIndex = i;
        break;
      }
    }

    if (activeIndex !== currentLineIndex) {
      currentLineIndex = activeIndex;
      if (activeLine) {
        var lyricText = activeLine.text;
        lyricsEl.style.opacity = 0;
        setTimeout(function() {
          lyricsEl.innerHTML = lyricText;
          lyricsEl.style.opacity = 1;
          spawnForLyric(lyricText);
        }, 200);
      } else {
        lyricsEl.style.opacity = 0;
        setTimeout(function() { lyricsEl.innerHTML = ""; }, 200);
      }
    }
  }

  setInterval(updateLyrics, 50);
  if (audio) audio.addEventListener("timeupdate", updateLyrics);

  // ─── TÍTULO ────────────────────────────────────────────────────
  function ocultarTitulo() {
    var titulo = document.querySelector(".titulo");
    if (!titulo) return;
    
    titulo.style.display = "block";
    titulo.style.opacity = "1";
    titulo.style.animation = "titleFadeIn 10s ease-in-out forwards";
    
    createStardust("gold", 20);
    createGlow("gold");
    
    setTimeout(function() {
      titulo.style.opacity = "0";
      titulo.style.transition = "opacity 2.5s ease-in-out";
      setTimeout(function() {
        titulo.style.display = "none";
      }, 2500);
    }, 10000);
  }

  setTimeout(ocultarTitulo, 1000);

  // ─── AUTOPLAY ──────────────────────────────────────────────────
  document.body.addEventListener("click", function() {
    if (audio && audio.paused) {
      audio.play().catch(function(e) { 
        console.log("Autoplay:", e); 
      });
    }
  });

  console.log("✨ Wonder Visual Engine - Frases flotantes en fondo listo! 🌸");
  console.log("📝 Las letras principales NO se modifican");
  console.log("💖 Frases para Ámbar aparecen en el fondo en:", ambarFloatingPhrases.map(m => m.time + "s").join(", "));
});