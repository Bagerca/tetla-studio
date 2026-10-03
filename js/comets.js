const COMET_COLORS = ['#39ff14', '#ff2d95', '#ff4444', '#ff8c00', '#007bff', '#00ffff', '#ffffff'];

export class CometEngine {
    constructor() {
        this.containerBg = document.getElementById('comet-system');
        this.idleTimeoutId = null;
        this.activeComets = new Set();
    }

    startIdle() {
        if (!this.containerBg) return;
        this.scheduleNextIdleCycle();
        console.log('🌠 [CometEngine] Фоновые кометы запущены');
    }

    stopIdle() {
        if (this.idleTimeoutId) {
            clearTimeout(this.idleTimeoutId);
            this.idleTimeoutId = null;
        }
    }

    scheduleNextIdleCycle() {
        // Спавн кометы каждые 1-4 секунды (чуть чаще)
        const delay = Math.random() * 3000 + 1000; 
        
        this.idleTimeoutId = setTimeout(() => {
            const count = Math.random() > 0.8 ? 2 : 1;
            const side = Math.floor(Math.random() * 4);
            
            for (let i = 0; i < count; i++) {
                setTimeout(() => this.spawnComet(side), i * 300); 
            }
            
            this.scheduleNextIdleCycle();
        }, delay);
    }

    spawnComet(forcedSide = null) {
        if (!this.containerBg) return;

        const comet = document.createElement('div');
        comet.className = 'comet';
        
        const color = COMET_COLORS[Math.floor(Math.random() * COMET_COLORS.length)];
        comet.style.color = color;
        comet.style.background = `linear-gradient(90deg, transparent, ${color}, #fff)`;
        
        const w = window.innerWidth;
        const h = window.innerHeight;
        const offset = 150; 

        const side = forcedSide !== null ? forcedSide : Math.floor(Math.random() * 4);
        let startX, startY, endX, endY;

        switch(side) {
            case 0: startX = Math.random() * w; startY = -offset; endX = Math.random() * w; endY = h + offset; break;
            case 1: startX = w + offset; startY = Math.random() * h; endX = -offset; endY = Math.random() * h; break;
            case 2: startX = Math.random() * w; startY = h + offset; endX = Math.random() * w; endY = -offset; break;
            case 3: startX = -offset; startY = Math.random() * h; endX = w + offset; endY = Math.random() * h; break;
        }

        const deltaX = endX - startX;
        const deltaY = endY - startY;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        // Чуть увеличили минимальную скорость
        let speedBase = Math.random() * 0.4 + 0.3;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const duration = distance / speedBase;

        // Делаем хвосты длиннее и саму комету чуть толще
        const length = Math.min(Math.max(speedBase * 450, 200), 800);
        const thickness = (Math.random() * 2.5 + 1.5);

        comet.style.width = `${length}px`;
        comet.style.height = `${thickness}px`;

        this.containerBg.appendChild(comet);
        this.activeComets.add(comet);

        const animation = comet.animate([
            { transform: `translate(${startX}px, ${startY}px) rotate(${angle}deg)`, opacity: 0 },
            { transform: `translate(${startX + deltaX * 0.15}px, ${startY + deltaY * 0.15}px) rotate(${angle}deg)`, opacity: 1, offset: 0.1 },
            { transform: `translate(${endX}px, ${endY}px) rotate(${angle}deg)`, opacity: 0 }
        ], { duration: duration, easing: 'linear' });

        animation.onfinish = () => {
            if (comet.parentNode) comet.remove();
            this.activeComets.delete(comet);
        };
    }
}