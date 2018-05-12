import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class FrontInCampinas extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        :host {
          position: relative;
          width: 355px;
          height: 420px;
          margin: 20px auto;
          background: 
            linear-gradient(to bottom, var(--color-dark, white) 33%, transparent 33%, transparent 66%, var(--color-dark, white) 66%),
            linear-gradient(to bottom, var(--color-dark, white) 33%, transparent 33%, transparent 66%, var(--color-dark, white) 66%),
            /**/
            radial-gradient(ellipse at center, var(--color-dark, white) 90%, transparent 90%),
            radial-gradient(ellipse at center, var(--color-dark, white) 90%, transparent 90%),
            /**/
            radial-gradient(ellipse at center, #1ea049 70%, transparent 70%),
            radial-gradient(ellipse at center, #bf196a 70%, transparent 70%),
            radial-gradient(ellipse at center, #f4a01a 70%, transparent 70%),
            radial-gradient(ellipse at center, #1197cd 70%, transparent 70%),
            radial-gradient(ellipse at center, #20378b 70%, transparent 70%),
            radial-gradient(ellipse at center, #dd3722 70%, transparent 70%),
            /**/
            linear-gradient(36deg, transparent 30%, var(--color-dark-icon, black) 30%, var(--color-dark-icon, black) 50%, transparent 50%),
            linear-gradient(144deg, transparent 30%, var(--color-dark-icon, black) 30%, var(--color-dark-icon, black) 50%, transparent 50%),
            linear-gradient(216deg, transparent 30%, var(--color-dark-icon, black) 30%, var(--color-dark-icon, black) 50%, transparent 50%),
            linear-gradient(324deg, transparent 30%, var(--color-dark-icon, black) 30%, var(--color-dark-icon, black) 50%, transparent 50%),
            /**/
            radial-gradient(ellipse at center, var(--color-dark, white) 70%, transparent 70%);
          background-position:
            12px calc(50%),
            calc(100% - 12px) calc(50%),
            /**/
            167px 77px,
            167px 323px,
            /**/
            0px 96px,
            calc(100% + 1px) 96px,
            0px 283px,
            calc(100% + 1px) 283px,
            50% 0,
            50% calc(100% + 1px),
            /**/
            184px 165px,
            184px 209px,
            116px 209px,
            116px 165px,
            /**/
            center center;
          background-size:
            18px 102px,
            18px 102px,
            /**/
            23px 23px,
            23px 23px,
            /**/
            45px 45px,
            45px 45px,
            45px 45px,
            45px 45px,
            45px 45px,
            45px 45px,
            /**/
            56px 44px,
            56px 44px,
            56px 44px,
            56px 44px,
            /**/
            180px 180px;
          background-repeat: no-repeat;
        }
      
      :host:after,
      :host:before {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          content: '';
          transform: rotate(60deg);
          background: 
              linear-gradient(to bottom, var(--color-dark, white) 33%, transparent 33%, transparent 66%, var(--color-dark, white) 66%),
              linear-gradient(to bottom, var(--color-dark, white) 33%, transparent 33%, transparent 66%, var(--color-dark, white) 66%),
              /**/
              radial-gradient(ellipse at center, var(--color-dark, white) 90%, transparent 90%),
              radial-gradient(ellipse at center, var(--color-dark, white) 90%, transparent 90%);
          background-position: 
              5px calc(50%),
              calc(100% - 5px) calc(50%),
              /**/
              167px 77px,
              167px 323px;
          background-size: 
              18px 102px,
              18px 102px,
              /**/
              23px 23px,
              23px 23px;
          background-repeat: no-repeat;
      }
      
      :host:before {
          transform: rotate(-60deg);
      }
      </style>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'front-in-campinas',
      },
    };
  }
}

window.customElements.define('front-in-campinas', FrontInCampinas);
