// ═══════════════════════════════════════════════════════════════════
//  WONDER VISUAL ENGINE — Para Ambar ✨
//  anim.js - Versión Completa Corregida
// ═══════════════════════════════════════════════════════════════════

// ─── DATOS DE LETRAS (tiempos ajustados para tu MP3) ───────────

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

// ─── MENSAJES ESPECIALES PARA ÁMBAR ─────────────────────────────
var ambarMessages = [
  { text: "Eres lo más maravilloso de mi vida",          time: 44,  duration: 4 },
  { text: "Tienes unos ojos preciosos Ámbar",               time: 70,  duration: 4.5 },
  { text: "Eres mi vida entera, corazón",                time: 120, duration: 4 },
  { text: "Te amo más que a nada en este mundo 🌸",      time: 159, duration: 5 },
  { text: "Gracias por existir mi amor", time: 105, duration: 4 },
  { text: "Eres perfecta tal como eres pinche niña hermosaa", time: 140, duration: 4 }
];


// ─── MAPEO DE FRASES A TIPOS DE FORMAS ──────────────────────────
var phraseToVisual = {
  "You're my sunlight on a rainy day": { type: "orb", color: "gold", count: 6 },
  "Would take my heart with you if you walked away": { type: "crystal", color: "rose", count: 5 },
  "I'm a mess right now, I'm a wreck right now": { type: "wave", color: "blue", count: 5 },
  "I'm waiting for the moment that you let me down": { type: "thread", color: "silver", count: 4 },
  "If you cut the cord, I don't know what I'd do": { type: "thread", color: "silver", count: 6 },
  "Don't wanna skydive without my parachute": { type: "star", color: "white", count: 8 },
  "I'm a mess right now, baby, help me out": { type: "wave", color: "blue", count: 5 },
  "I'm scared I'm gonna wake up and you'll let me down": { type: "wave", color: "blue", count: 6 },
  "This feeling doesn't fade no matter how hard that I try": { type: "petal", color: "gold", count: 6 },
  "I always think about it at the same time every night": { type: "orb", color: "silver", count: 7 },
  "It's 3:05": { type: "star", color: "gold", count: 10, symbol: "3:05" },
  "I'm on a rollercoaster ride": { type: "wave", color: "mixed", count: 6 },
  "Hoping you don't change your mind": { type: "crystal", color: "silver", count: 5 },
  "I don't wanna let go, never been so sure in my life": { type: "orb", color: "warm", count: 6 },
  "I'm terrified": { type: "wave", color: "blue", count: 7 },
  "You'll turn around and say goodbye": { type: "thread", color: "silver", count: 5 },
  "I don't wanna let go, I've never been so sure in my life": { type: "orb", color: "warm", count: 6 },
  "If there's a door to Heaven, baby, you're the key": { type: "star", color: "gold", count: 10 },
  "And if I had to beg, I'd be on my knees": { type: "petal", color: "rose", count: 5 },
  "Oh, please don't say anything has changed": { type: "wave", color: "mixed", count: 5 },
  "You're the one I wanna wake up next to every day": { type: "orb", color: "warm", count: 7 },
  "I want to be with you": { type: "petal", color: "rose", count: 7 },
  "I want to fly with you": { type: "star", color: "gold", count: 10 },
  "I don't wanna let go, never been so sure": { type: "orb", color: "warm", count: 6 },
  "Baby, I'm terrified": { type: "wave", color: "blue", count: 6 }
};

// ─── PALETAS DE COLORES ─────────────────────────────────────────
var colorPalettes = {
  gold:   ["rgba(255,215,80,",  "rgba(255,180,40,",  "rgba(255,240,140,"],
  silver: ["rgba(180,210,255,", "rgba(200,230,255,", "rgba(150,190,240,"],
  rose:   ["rgba(255,180,180,", "rgba(255,140,160,", "rgba(255,200,200,"],
  blue:   ["rgba(80,160,255,",  "rgba(100,200,255,", "rgba(60,140,220,"],
  warm:   ["rgba(255,200,100,", "rgba(255,230,150,", "rgba(240,180,80,"],
  white:  ["rgba(255,255,255,", "rgba(240,248,255,", "rgba(255,250,240,"],
  mixed:  ["rgba(255,215,80,",  "rgba(100,200,255,", "rgba(255,180,180,"]
};

// ═══════════════════════════════════════════════════════════════════
//  TODO EL CÓDIGO QUE TOCA EL DOM DENTRO DE DOMContentLoaded
// ═══════════════════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", function() {

  // ─── REFERENCIAS AL DOM ─────────────────────────────────────────
  var audio = document.querySelector("audio");
  var lyricsEl = document.querySelector("#lyrics");
  var floatingEl = document.querySelector("#floating-forms");
  var canvas = document.querySelector("#wonder-canvas");
  var ctx = canvas ? canvas.getContext("2d") : null;

  // ─── CONFIGURACIÓN DEL CANVAS DE PARTÍCULAS ────────────────────
  function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // ─── PARTÍCULAS DE FONDO ───────────────────────────────────────
  function Particle() { this.reset(); }
  
  Particle.prototype.reset = function() {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.radius = Math.random() * 2.5 + 0.5;
    this.opacity = Math.random() * 0.5 + 0.1;
    this.speed = Math.random() * 0.4 + 0.08;
    this.angle = Math.random() * Math.PI * 2;
    this.drift = (Math.random() - 0.5) * 0.4;
    this.pulse = Math.random() * Math.PI * 2;
    this.pulseSpd = Math.random() * 0.03 + 0.008;
    this.isGold = Math.random() > 0.6;
  };
  
  Particle.prototype.update = function() {
    this.y -= this.speed;
    this.x += Math.sin(this.angle) * this.drift;
    this.angle += 0.015;
    this.pulse += this.pulseSpd;
    this.r = this.radius * (1 + Math.sin(this.pulse) * 0.4);
    if (this.y < -20) this.reset();
  };
  
  Particle.prototype.draw = function(c) {
    var col = this.isGold
      ? "rgba(255,215,120," + this.opacity + ")"
      : "rgba(180,210,255," + this.opacity + ")";
    c.save();
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    c.fillStyle = col;
    c.fill();
    
    var grd = c.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r * 5);
    grd.addColorStop(0, col.replace(/[\d.]+\)$/, "0.2)"));
    grd.addColorStop(1, "rgba(0,0,0,0)");
    c.beginPath();
    c.arc(this.x, this.y, this.r * 5, 0, Math.PI * 2);
    c.fillStyle = grd;
    c.fill();
    c.restore();
  };

  var particles = [];
  for (var i = 0; i < 150; i++) particles.push(new Particle());

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
  
  function rndPos() {
    return { x: 5 + Math.random() * 90, y: 5 + Math.random() * 80 };
  }
  
  function addEl(el, dur) {
    if (!floatingEl) return;
    floatingEl.appendChild(el);
    setTimeout(function() { 
      if (el.parentNode) el.parentNode.removeChild(el); 
    }, dur * 1000 + 800);
  }
  
  function trimFloating() {
    if (floatingEl && floatingEl.children.length > 100) {
      while (floatingEl.children.length > 80) {
        floatingEl.removeChild(floatingEl.firstChild);
      }
    }
  }

  // ─── CREACIÓN DE FORMAS VISUALES ───────────────────────────────
  function createOrb(palette, size) {
    var el = document.createElement("div");
    el.className = "wonder-orb";
    var p = rndPos();
    var s = size || (15 + Math.random() * 85);
    var c = rndColor(palette);
    var dur = 5 + Math.random() * 7;
    var op = 0.4 + Math.random() * 0.55;
    
    el.style.cssText = 
      "left:" + p.x + "%;" +
      "top:" + p.y + "%;" +
      "width:" + s + "px;" +
      "height:" + s + "px;" +
      "background:radial-gradient(circle at 35% 35%, " + c + "0.9), " + c + "0.1);" +
      "--dur:" + dur + "s;" +
      "--max-opacity:" + op + ";" +
      "--blur:" + (s * 0.2) + "px;" +
      "--tx1:" + (Math.random() * 60 - 30) + "px;" +
      "--tx2:" + (Math.random() * 90 - 45) + "px;" +
      "--ty2:-" + (20 + Math.random() * 60) + "px;" +
      "--tx3:" + (Math.random() * 70 - 35) + "px;" +
      "--ty3:-" + (50 + Math.random() * 70) + "px;" +
      "--tx4:" + (Math.random() * 50 - 25) + "px;" +
      "--ty4:-" + (80 + Math.random() * 80) + "px;";
    
    addEl(el, dur);
  }

  function createThread(palette) {
    var el = document.createElement("div");
    el.className = "wonder-thread";
    var p = rndPos();
    var len = 70 + Math.random() * 160;
    var rot = Math.random() * 180 - 90;
    var c = rndColor(palette);
    var dur = 7 + Math.random() * 8;
    var w = 0.8 + Math.random() * 2.5;
    
    el.style.cssText =
      "left:" + p.x + "%;" +
      "top:" + p.y + "%;" +
      "width:" + w + "px;" +
      "height:" + len + "px;" +
      "background:linear-gradient(to top, transparent, " + c + "0.85), " + c + "0.4));" +
      "border-radius:4px;" +
      "--rot:" + rot + "deg;" +
      "--dur:" + dur + "s;" +
      "--max-opacity:" + (0.5 + Math.random() * 0.45) + ";";
    
    addEl(el, dur);
  }

  function createCrystal(palette) {
    var el = document.createElement("div");
    el.className = "wonder-crystal";
    var p = rndPos();
    var s = 8 + Math.random() * 18;
    var c = rndColor(palette);
    var dur = 6 + Math.random() * 6;
    
    el.style.cssText =
      "left:" + p.x + "%;" +
      "top:" + p.y + "%;" +
      "width:" + s + "px;" +
      "height:" + s + "px;" +
      "background:" + c + "0.9);" +
      "box-shadow:0 0 " + (s * 2.5) + "px " + c + "0.7),0 0 " + (s * 5) + "px " + c + "0.3);" +
      "transform:rotate(45deg);" +
      "--dur:" + dur + "s;" +
      "--max-opacity:" + (0.5 + Math.random() * 0.45) + ";";
    
    addEl(el, dur);
  }

  function createStar(palette, symbolText) {
    var el = document.createElement("div");
    el.className = "wonder-star";
    var p = rndPos();
    var s = 10 + Math.random() * 22;
    var c = rndColor(palette);
    var dur = 4.5 + Math.random() * 6;
    
    if (symbolText && symbolText.length > 1) {
      el.style.cssText =
        "left:" + p.x + "%;" +
        "top:" + p.y + "%;" +
        "font-family:'Montserrat',sans-serif;" +
        "font-size:" + (s * 0.9) + "px;" +
        "font-weight:300;" +
        "letter-spacing:0.1em;" +
        "color:" + c + "0.95);" +
        "text-shadow:0 0 30px " + c + "0.8);" +
        "--dur:" + dur + "s;" +
        "--max-opacity:0.85;";
      el.textContent = symbolText;
    } else {
      el.style.cssText =
        "left:" + p.x + "%;" +
        "top:" + p.y + "%;" +
        "width:" + s + "px;" +
        "height:" + s + "px;" +
        "background:radial-gradient(circle, " + c + "1.0), " + c + "0.0));" +
        "border-radius:50%;" +
        "box-shadow:0 0 " + (s * 2) + "px " + c + "0.9),0 0 " + (s * 4) + "px " + c + "0.4);" +
        "--dur:" + dur + "s;" +
        "--max-opacity:" + (0.7 + Math.random() * 0.3) + ";";
    }
    
    addEl(el, dur);
  }

  function createPetal(palette) {
    var el = document.createElement("div");
    el.className = "wonder-petal";
    var p = rndPos();
    var s = 12 + Math.random() * 24;
    var c = rndColor(palette);
    var dur = 7 + Math.random() * 7;
    
    el.style.cssText =
      "left:" + p.x + "%;" +
      "top:" + p.y + "%;" +
      "width:" + s + "px;" +
      "height:" + (s * 1.5) + "px;" +
      "background:linear-gradient(135deg, " + c + "0.7), transparent);" +
      "box-shadow:inset 0 0 " + (s * 0.8) + "px " + c + "0.4);" +
      "--rot:" + (Math.random() * 360) + "deg;" +
      "--dur:" + dur + "s;" +
      "--max-opacity:" + (0.35 + Math.random() * 0.4) + ";";
    
    addEl(el, dur);
  }

  function createWave(palette) {
    var el = document.createElement("div");
    el.className = "wonder-wave";
    var p = rndPos();
    var s = 25 + Math.random() * 50;
    var c = rndColor(palette);
    var dur = 3.5 + Math.random() * 4;
    
    el.style.cssText =
      "left:calc(" + p.x + "% - " + (s / 2) + "px);" +
      "top:calc(" + p.y + "% - " + (s / 2) + "px);" +
      "width:" + s + "px;" +
      "height:" + s + "px;" +
      "border:1.5px solid " + c + "0.6);" +
      "box-shadow:0 0 15px " + c + "0.3);" +
      "--dur:" + dur + "s;" +
      "--max-opacity:0.6;";
    
    addEl(el, dur);
  }

  function spawnOne(type, palette, symbol) {
    switch (type) {
      case "orb": createOrb(palette); break;
      case "thread": createThread(palette); break;
      case "crystal": createCrystal(palette); break;
      case "star": createStar(palette, symbol); break;
      case "petal": createPetal(palette); break;
      case "wave": createWave(palette); break;
      default: createOrb(palette);
    }
  }

  // ─── SPAWN DE FORMAS SEGÚN LETRAS ──────────────────────────────
  function spawnForLyric(text) {
    trimFloating();
    var cfg = phraseToVisual[text] || { type: "orb", color: "gold", count: 6 };
    var actualCount = Math.min(cfg.count + 3, 14);
    
    for (var i = 0; i < actualCount; i++) {
      (function(idx) {
        setTimeout(function() {
          spawnOne(cfg.type, cfg.color, cfg.symbol || null);
          if (idx % 2 === 0 && Math.random() > 0.6) {
            setTimeout(function() {
              createOrb("silver", 12 + Math.random() * 30);
            }, idx * 80);
          }
        }, idx * 140);
      })(i);
    }
    
    for (var j = 0; j < 6; j++) {
      (function(jdx) {
        setTimeout(function() { 
          createOrb("silver", 12 + Math.random() * 30);
          if (Math.random() > 0.75) createStar("gold", null);
        }, jdx * 220 + 120);
      })(j);
    }
  }

  function spawnForAmbar() {
    trimFloating();
    for (var i = 0; i < 25; i++) {
      (function(idx) {
        setTimeout(function() {
          createStar("gold", null);
          createCrystal("gold");
          createOrb("rose", 12 + Math.random() * 35);
          if (idx % 3 === 0) createPetal("rose");
          if (idx % 4 === 0) createWave("gold");
        }, idx * 100);
      })(i);
    }
    
    for (var j = 0; j < 15; j++) {
      setTimeout(function() {
        createOrb("gold", 20 + Math.random() * 45);
      }, j * 180);
    }
  }

  // ─── FORMAS AMBIENTALES CONTINUAS ──────────────────────────────
  setInterval(function() {
    if (!audio || audio.paused) return;
    var ambPalette = ["gold", "silver", "white", "warm"];
    var c = ambPalette[Math.floor(Math.random() * ambPalette.length)];
    
    if (Math.random() > 0.65) createOrb(c, 10 + Math.random() * 35);
    if (Math.random() > 0.75) createThread(c);
    if (Math.random() > 0.8) createCrystal(c);
    if (Math.random() > 0.85) createStar(c, null);
    if (Math.random() > 0.9) createPetal(c);
  }, 400);

  // ─── ACTUALIZACIÓN DE LETRAS ───────────────────────────────────
  var currentLineIndex = -1;
  var currentAmbarIndex = -1;

  function updateLyrics() {
    if (!audio || !lyricsEl) return;
    var currentTime = audio.currentTime;

    // Verificar mensajes de Ámbar
    var ambarActive = null;
    for (var a = 0; a < ambarMessages.length; a++) {
      var msg = ambarMessages[a];
      if (currentTime >= msg.time && currentTime < msg.time + msg.duration) {
        ambarActive = msg;
        break;
      }
    }

    if (ambarActive) {
      if (currentAmbarIndex !== ambarActive.text) {
        currentAmbarIndex = ambarActive.text;
        currentLineIndex = -1;
        lyricsEl.style.opacity = 0;
        setTimeout(function() {
          lyricsEl.innerHTML = ambarActive.text;
          lyricsEl.style.opacity = 1;
          lyricsEl.className = "ambar-message";
          spawnForAmbar();
        }, 200);
      }
      return;
    }

    // Salir del modo Ámbar
    if (lyricsEl.className === "ambar-message") {
      lyricsEl.className = "";
      currentAmbarIndex = -1;
    }

    // Buscar línea activa de la canción
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
          lyricsEl.className = "";
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

  // ─── FUNCIÓN DEL TÍTULO (más duradero) ────────────────────────
  function ocultarTitulo() {
    var titulo = document.querySelector(".titulo");
    if (!titulo) return;
    
    titulo.style.display = "block";
    titulo.style.opacity = "1";
    titulo.style.animation = "titleFadeIn 10s ease-in-out forwards";
    
    // Generar formas especiales para el título
    for (var i = 0; i < 35; i++) {
      setTimeout(function() {
        createStar("gold", null);
        createOrb("gold", 15 + Math.random() * 40);
        if (Math.random() > 0.7) createCrystal("gold");
        if (Math.random() > 0.8) createPetal("rose");
      }, i * 150);
    }
    
    // Ocultar después de 12 segundos
    setTimeout(function() {
      titulo.style.opacity = "0";
      titulo.style.transition = "opacity 2.5s ease-in-out";
      setTimeout(function() {
        titulo.style.display = "none";
      }, 2500);
    }, 12000);
  }

  setTimeout(ocultarTitulo, 1000);

  // ─── AUTOPLAY (requiere interacción del usuario) ───────────────
  document.body.addEventListener("click", function() {
    if (audio && audio.paused) {
      audio.play().catch(function(e) { 
        console.log("Autoplay bloqueado por el navegador:", e); 
      });
    }
  });

  // ─── MOSTRAR QUE TODO ESTÁ LISTO ───────────────────────────────
  console.log("✨ Wonder Visual Engine listo! 🌸");
  console.log("📝 Líneas de canción: " + lyricsData.length);
  console.log("💖 Mensajes para Ámbar: " + ambarMessages.length);
  console.log("🎨 Formas visuales activas");
  
  // Pequeña demo visual al cargar
  setTimeout(function() {
    if (!audio || audio.paused) {
      for (var i = 0; i < 8; i++) {
        setTimeout(function() {
          createOrb("gold", 20 + Math.random() * 50);
          createStar("silver", null);
        }, i * 200);
      }
    }
  }, 500);
  
}); // fin DOMContentLoaded