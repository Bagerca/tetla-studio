import { Icons } from '../utils/icons.js';

export const DisclaimerData = {
    badge: "[ LEGAL_NOTICE // FAN_ARCHIVE ]",
    title: "ДИСКЛЕЙМЕР И ПРАВА",
    subtitle: "Информация для зрителей, правообладателей и алгоритмов YouTube",
    footer: "TETLA_OS // OFFICIAL FAN DISCLAIMER CARD",
    blocks: [
        {
            icon: Icons.fan,
            title: "НЕОФИЦИАЛЬНЫЙ ФАН-КАНАЛ",
            text: "Данный канал является <span class='hl-pink'>неофициальным фан-архивом нарезок</span>. Автор канала не является стримером <span class='hl-green'>Ksusha Sher</span> и не выдает себя за нее. Весь видеоматериал публикуется сообществом фанатов."
        },
        {
            icon: Icons.copyright,
            title: "АВТОРСКИЕ ПРАВА И FAIR USE",
            text: "Все права на трансляции, образ, голос и видеоряд принадлежат <span class='hl-green'>Ksusha Sher</span>. Контент распространяется на условиях добросовестного использования (<span class='hl-pink'>Fair Use / ст. 1274 ГК РФ</span>) в ознакомительных и развлекательных целях."
        },
        {
            icon: Icons.dmca,
            title: "ДЛЯ ПРАВООБЛАДАТЕЛЕЙ (DMCA)",
            text: "Если вы являетесь правообладателем какого-либо фрагмента и хотите его удалить или отредактировать — свяжитесь с автором канала напрямую до подачи жалоб. Контент будет удален в течение 24 часов."
        }
    ]
};