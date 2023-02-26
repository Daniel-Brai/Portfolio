import { LitElement, html, css } from 'lit';

const tagName = 'code-copy-btn';

export const copyIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFFFFF"><path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"/></svg>`;
export const checkIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#00FF00"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"/></svg>`;

export class CodeBlockCopyButton extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            button {
                position: absolute;
                margin: 0;
                top: 16px;
                right: 16px;
                padding: 0.3rem;
                background: #171717;
                border: none;
                border-radius: 0.25rem;
                color: #FFFFFF;
                cursor: pointer;
            }
            @media(min-width: 728px) {
                button {
                    top: 20px;
                    right: 20px;
                }
            }
        `
    ];
    static get properities() {
        return {
            _isCopied: { type: Boolean }
        }
    }
    constructor() {
        super();
        this._isCopied = false;
    }
    copyCode() {
        let code = document.querySelector('code');
        const range = document.createRange();
        range.selectNode(code);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        
        if (!navigator.clipboard) {
            document.execCommand('copy');
        } else {
            try {
                navigator.clipboard.writeText(range.toString())
                this._isCopied = true;
            } catch (e) {
                console.error(e);
            }
        }
        window.getSelection().removeAllRanges();

        setTimeout(() => { this._isCopied = false }, 1500)

    }
    render() {
        return html`
            <button @click=${this.copyCode}>${this._isCopied === true ? checkIcon: copyIcon}</button>
        `;
    }
}

customElements.define(tagName, CodeBlockCopyButton);