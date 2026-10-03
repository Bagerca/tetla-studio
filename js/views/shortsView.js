export class ShortsView {
    static render() {
        return `
            <div class="shorts-wrapper">
                <div class="shorts-canvas">
                    
                    <!-- 4 Неоновых угла -->
                    <div class="hud-corner top-left"></div>
                    <div class="hud-corner top-right"></div>
                    <div class="hud-corner bottom-left"></div>
                    <div class="hud-corner bottom-right"></div>

                    <!-- Верхняя панель -->
                    <div class="hud-top">
                        <div class="hud-rec"><span class="dot"></span> REC</div>
                    </div>

                    <!-- Боковые шкалы -->
                    <div class="hud-side-bar left"></div>
                    <div class="hud-side-bar right"></div>

                </div>
            </div>
        `;
    }
}