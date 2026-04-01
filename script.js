/* ПРОВЕРКА: Если ты видишь винный фон, значит CSS работает */
body {
    background-color: #2B0011 !important;
}

@font-face {
    font-family: 'GrtskGiga';
    src: url('GrtskGiga-Regular.ttf') format('truetype');
    font-weight: 400;
}
@font-face {
    font-family: 'GrtskGiga';
    src: url('GrtskGiga-Bold.ttf') format('truetype');
    font-weight: 700;
}
@font-face {
    font-family: 'CSTM';
    src: url('CSTM-Italic.otf.otf') format('opentype');
    font-weight: normal;
}

:root {
    --bg-wine: #2B0011;
    --accent-red: #FF0022;
    --text-light: #F5F5F5;
    --font-main: 'CSTM', serif; 
    --font-bold: 'GrtskGiga', sans-serif;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    background-color: var(--bg-wine);
    color: var(--text-light);
    font-family: var(--font-main);
    overflow: hidden;
}

.noise-overlay {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    pointer-events: none; z-index: 9999; opacity: 0.04;
    background-image: url('data:image/svg+xml;utf8,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E');
}

.hero-section {
    height: 100vh; display: flex; flex-direction: column;
    justify-content: center; align-items: center; text-align: center;
}

.hero-monogram {
    position: absolute; top: 5vh; width: 90px; height: 65px;
    border: 1px solid var(--accent-red); border-radius: 50%;
    display: flex; justify-content: center; align-items: center;
}

.hero-monogram span {
    font-family: var(--font-main); font-size: 2.2rem;
    color: var(--accent-red); font-style: italic; margin-top: -5px;
}

.hero-title {
    font-family: var(--font-main); font-style: italic;
    font-size: clamp(3rem, 10vw, 11rem); text-transform: uppercase;
    line-height: 0.85; color: var(--accent-red);
}

.font-plans {
    font-family: var(--font-bold); font-weight: 700; font-style: normal;
    font-size: clamp(3.5rem, 12vw, 14rem); letter-spacing: -0.05em;
    display: block; margin: 0.05em 0; color: var(--accent-red);
}

.hero-subtitle {
    position: absolute; bottom: 5vh; font-family: var(--font-bold);
    font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.4em;
    color: rgba(255, 255, 255, 0.3);
}

/* Скрываем текст до начала анимации */
.word { display: inline-block; transform: translateY(110%); }
.line { display: block; overflow: hidden; }
