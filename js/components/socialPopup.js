import { Icons } from '../utils/icons.js';

export class SocialPopupManager {
    constructor() {
        this.layer = document.getElementById('overlays-layer');
        this.activePopup = null;
        this.timeoutId = null;
    }

    /**
     * Показывает плашку соцсети
     * @param {Object} data - { platform, handle, accentColor, iconName, duration }
     */
    show({ platform, handle, accentColor, iconName, duration = 5000 }) {
        if (!this.layer) return;

        // Если уже есть активная плашка - убираем её досрочно
        if (this.activePopup) {
            this.activePopup.remove();
            clearTimeout(this.timeoutId);
        }

        // Создаем DOM-элемент
        const popup = document.createElement('div');
        popup.className = 'social-popup sp-anim-enter';
        
        // Передаем цвет акцента в CSS-переменную плашки
        popup.style.setProperty('--popup-accent', accentColor);

        // Формируем разметку
        popup.innerHTML = `
            <div class="sp-icon-wrapper">
                ${Icons[iconName] || Icons.fan}
            </div>
            <div class="sp-content">
                <div class="sp-label">
                    <span class="sp-dot"></span> ${platform}
                </div>
                <div class="sp-handle">${handle}</div>
            </div>
        `;

        // Добавляем на экран
        this.layer.appendChild(popup);
        this.activePopup = popup;

        // Запускаем таймер на скрытие
        this.timeoutId = setTimeout(() => {
            this.hide();
        }, duration);
    }

    hide() {
        if (!this.activePopup) return;
        
        const popup = this.activePopup;
        
        // Меняем анимацию на выход
        popup.classList.remove('sp-anim-enter');
        popup.classList.add('sp-anim-exit');
        
        this.activePopup = null;

        // Ждем окончания анимации (0.6s) и удаляем из DOM
        setTimeout(() => {
            if (popup.parentNode) {
                popup.remove();
            }
        }, 600);
    }
}