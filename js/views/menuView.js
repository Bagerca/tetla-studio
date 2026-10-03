export class MenuView {
    static render() {
        return `
            <div class="hub-menu">
                <h1 class="hub-title">TETLA STUDIO</h1>
                <div class="hub-grid">
                    <a href="#/disclaimer" class="hub-btn">
                        <i class="fas fa-balance-scale"></i> Дисклеймер
                    </a>
                    <a href="#/outro" class="hub-btn">
                        <i class="fas fa-door-open"></i> Аутро
                    </a>
                    <a href="#/shorts" class="hub-btn">
                        <i class="fas fa-mobile-alt"></i> Shorts HUD
                    </a>
                    <a href="#/record" class="hub-btn" style="border-color: var(--neon-green); box-shadow: 0 0 10px rgba(57, 255, 20, 0.2);">
                        <i class="fas fa-video" style="color: var(--neon-green);"></i> Чистый экран
                    </a>
                </div>
                <div class="hub-hint" style="line-height: 1.6;">
                    [ ESC ] - Возврат в меню<br>
                    [ G ] - Вкл/Выкл Хромакей (Зеленый фон)<br>
                    [ 1, 2 ] - Запуск оверлеев (плашек)
                </div>
            </div>
        `;
    }
}