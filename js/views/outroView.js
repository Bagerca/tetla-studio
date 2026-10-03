export class OutroView {
    static render() {
        return `
            <div class="outro-wrapper">
                <div class="outro-canvas">
                    
                    <!-- Левое видео (Последний ролик) -->
                    <div class="outro-box box-left">
                        <div class="box-label">
                            <span class="label-dot"></span> 
                            РЕКОМЕНДАЦИЯ СИСТЕМЫ
                        </div>
                    </div>

                    <!-- Правое видео (Плейлист) -->
                    <div class="outro-box box-right">
                        <div class="box-label">
                            <span class="label-dot"></span> 
                            АРХИВ ЗАПИСЕЙ
                        </div>
                    </div>

                    <!-- Центральная кнопка подписки -->
                    <div class="outro-sub-circle">
                        <div class="sub-ring-1"></div>
                        <div class="sub-ring-2"></div>
                        
                        <div class="sub-hint">
                            <i class="fas fa-chevron-up"></i>
                            ПОДТВЕРДИТЬ ДОСТУП
                        </div>
                    </div>

                    <!-- Декоративный подвал -->
                    <div class="outro-footer">
                        <div class="footer-line"></div>
                        <div class="footer-text">TETLA_OS // TERMINAL CLOSED</div>
                        <div class="footer-line"></div>
                    </div>

                </div>
            </div>
        `;
    }
}