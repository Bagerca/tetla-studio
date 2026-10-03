import { DisclaimerData } from '../data/disclaimerData.js';

export class DisclaimerView {
    static render() {
        const blocksHtml = DisclaimerData.blocks.map(block => `
            <div class="d-block">
                <div class="d-icon">${block.icon}</div>
                <div class="d-text">
                    <h3>${block.title}</h3>
                    <p>${block.text}</p>
                </div>
            </div>
        `).join('');

        return `
            <div class="disclaimer-wrapper">
                <div class="disclaimer-card">
                    <div class="d-header">
                        <div class="d-badge"><span class="d-dot"></span> ${DisclaimerData.badge}</div>
                        <h1 class="d-title">${DisclaimerData.title}</h1>
                        <p class="d-subtitle">${DisclaimerData.subtitle}</p>
                    </div>
                    
                    <div class="d-blocks">
                        ${blocksHtml}
                    </div>
                    
                    <div class="d-footer">${DisclaimerData.footer}</div>
                </div>
            </div>
        `;
    }
}