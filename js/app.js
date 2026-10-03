import { MenuView } from './views/menuView.js';
import { DisclaimerView } from './views/disclaimerView.js';
import { OutroView } from './views/outroView.js';
import { ShortsView } from './views/shortsView.js';
import { CometEngine } from './comets.js';
import { SocialPopupManager } from './components/socialPopup.js';

class AppRouter {
    constructor() {
        this.appContainer = document.getElementById('app');
        this.comets = new CometEngine();
        this.popupManager = new SocialPopupManager(); // Инициализация менеджера плашек
        this.init();
    }

    init() {
        // Запуск фоновых эффектов
        this.comets.startIdle();

        // Слушаем изменение URL
        window.addEventListener('hashchange', () => this.route());
        // Глобальный бинд клавиш
        this.bindGlobalKeys();
        
        // Первичный рендер
        this.route();
    }

    route() {
        const hash = window.location.hash || '#/';
        this.appContainer.innerHTML = ''; // Очистка экрана перед рендером

        switch (hash) {
            case '#/':
                this.appContainer.innerHTML = MenuView.render();
                break;
            case '#/disclaimer':
                this.appContainer.innerHTML = DisclaimerView.render();
                break;
            case '#/outro':
                this.appContainer.innerHTML = OutroView.render();
                break;
            case '#/shorts':
                this.appContainer.innerHTML = ShortsView.render();
                break;
            case '#/record':
                // Оставляем экран абсолютно пустым для записи футажей
                this.appContainer.innerHTML = '';
                break;
            default:
                window.location.hash = '#/';
                break;
        }
    }

    bindGlobalKeys() {
        document.addEventListener('keydown', (e) => {
            // Возврат в меню по нажатию Escape
            if (e.key === 'Escape' && window.location.hash !== '#/') {
                window.location.hash = '#/';
            }
            
            // Хоткей 'G' (или 'П' на русской раскладке) для хромакея
            if (e.key.toLowerCase() === 'g' || e.key.toLowerCase() === 'п') {
                document.body.classList.toggle('chroma-mode');
            }

            // ==========================================
            // ХОТКЕИ ДЛЯ СОЦ. ПЛАШЕК (LOWER THIRDS)
            // ==========================================
            
            // Нажимаем цифру '1' -> Вылетает Telegram
            if (e.key === '1') {
                this.popupManager.show({
                    platform: 'Telegram',
                    handle: 't.me/pizdeckakoi_to',
                    accentColor: '#00a2ff',
                    iconName: 'telegram',
                    duration: 5000
                });
            }

            // Нажимаем цифру '2' -> Вылетает Twitch
            if (e.key === '2') {
                this.popupManager.show({
                    platform: 'Twitch',
                    handle: 'twitch.tv/ksusha_sher',
                    accentColor: '#b300ff',
                    iconName: 'twitch',
                    duration: 5000
                });
            }
        });
    }
}

// Старт приложения
document.addEventListener('DOMContentLoaded', () => {
    new AppRouter();
});