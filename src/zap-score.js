const wrapperDiv = (siteId, customerId, score, numReviews) => {
  const div = document.createElement("div");
  div.setAttribute("itemscope", "itemscope");
  div.setAttribute("itemtype", "https://schema.org/AggregateRating");
  div.classList.add("score_wrap");

  const reviewsSiteUrl = siteId == 5 ?
    `https://www.d.co.il/${customerId || ''}//#page-block-reviews` :
    `https://www.rest.co.il/reviews/restaurant/${customerId || ''}/#customerReviewsBlock`;
  div.onclick = () => window.open(reviewsSiteUrl, '_blank');

  const starFile = siteId == 5 ? 'star.png' : 'rest-star.png';
  const starOverFile = siteId == 5 ? 'star-over.png' : 'rest-star-over.png';
  const logoFile = siteId == 5 ? 'zap-logo2.png' : 'zap-logo-rest-web-b.png';
  div.innerHTML = `
  <div class="score_num" style="float:right; width: 45%">
    <span itemprop="ratingValue">${score || 'טוען...'}</span>
  </div>
  <div class="stars_out" style="float:right; width: 55%">
    <div class="score_stars" aria-label="${score || ''} כוכבים">
      <div class="stars" aria-disabled="true">
        <span>
          <img src="https://zap.dbusiness.co/images/css/${starFile}" class="ca-lazy-image">
        </span>
        <span>
          <img src="https://zap.dbusiness.co/images/css/${starFile}" class="ca-lazy-image">
        </span>
        <span>
          <img src="https://zap.dbusiness.co/images/css/${starFile}" class="ca-lazy-image">
        </span>
        <span>
          <img src="https://zap.dbusiness.co/images/css/${starFile}" class="ca-lazy-image">
        </span>
        <span>
          <img src="https://zap.dbusiness.co/images/css/${starFile}" class="ca-lazy-image">
        </span>
      </div>
      <div class="stars_over" aria-disabled="true" style="width: ${(+score && 20 * score) || 50}%;">
        <span>
          <img src="https://zap.dbusiness.co/images/css/${starOverFile}" class="ca-lazy-image">
        </span>
        <span>
          <img src="https://zap.dbusiness.co/images/css/${starOverFile}" class="ca-lazy-image">
        </span>
        <span>
          <img src="https://zap.dbusiness.co/images/css/${starOverFile}" class="ca-lazy-image">
        </span>
        <span>
          <img src="https://zap.dbusiness.co/images/css/${starOverFile}" class="ca-lazy-image">
        </span>
        <span>
          <img src="https://zap.dbusiness.co/images/css/${starOverFile}" class="ca-lazy-image">
        </span>
      </div>
    </div>
    <div class="score_text" style="position: relative">
      <span itemprop="reviewCount">${numReviews || 0}</span> חוות דעת
    </div>
  </div>
  <div class="score_logo" style="clear:both">
    <img src="https://zap.dbusiness.co/webimages/1000/${logoFile}" class="ca-lazy-image">
  </div>
  `;

  return div;
}

const apiHost = "zap.dbusiness.co";
const cssHostPathProd = "https://zap.dbusiness.co/css";
const cssHostPathTest = "https://github.com/ariel42/csb-zap-reviews/blob/dev/public";

class ZapScoreElement extends HTMLElement {
  connectedCallbackRan = false;
  shadow = null;
  ignoreCssCache = true;
  cssPath = cssHostPathProd;
  theme = "";

  customerId = null;
  siteId = null;

  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "closed" });
  }

  connectedCallback() {
    const isTest = this.getAttribute("isTest");
    const isDev = this.getAttribute("isDev");
    this.ignoreCssCache = isTest || isDev;

    if (isTest) {
      this.cssPath = cssHostPathTest;
    }
    if (isDev) {
      this.cssPath = `${window.location.origin}`;
    }

    if (!document.querySelector("#reviews-font")) {
      const fontsStyleElement = document.createElement("link");
      fontsStyleElement.setAttribute("id", "reviews-font");
      fontsStyleElement.setAttribute("rel", "stylesheet");
      fontsStyleElement.setAttribute("type", "text/css");
      fontsStyleElement.setAttribute("href", "https://fonts.googleapis.com/earlyaccess/opensanshebrew.css");
      document.head.appendChild(fontsStyleElement);
    }

    for (const attribute of ZapScoreElement.observedAttributes) {
      const camelCased = attribute.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
      });
      this[camelCased] = this.getAttribute(attribute)?.trim() || null;
    }
    if (this.customerId) {
      this.customerId = this.customerId.split('_')[0]; //for supporting migrations with customerId_70025020 value in this attribute
    }

    this.renderDefaultHtml();

    if (+this.siteId) {
      this.reloadStyles();

      if (+this.customerId) {
        this.loadAndShowScore();
      }
    }

    this.connectedCallbackRan = true;
  }

  async attributeChangedCallback(name, oldValue, newValue) {
    if (!this.connectedCallbackRan) return;

    const camelCased = name.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
    if (this[camelCased] == newValue) return;

    this[camelCased] = newValue?.trim() || null;

    if (name === 'customer-id' && this.customerId) {
      this.customerId = this.customerId.split('_')[0]; //see above
    }

    if (["site-id", "theme"].includes(name)) {
      this.reloadStyles();
    }

    if (["customer-id", "site-id"].includes(name)) {
      this.renderDefaultHtml();

      if (+this.customerId && +this.siteId) {
        this.loadAndShowScore();
      }
    }
  }

  async reloadStyles() {
    const suffix = this.theme?.trim() ? `-${this.theme?.trim()}` : "";

    const globalStyleTask = fetch(
      `${this.cssPath}/zap-score${suffix}.css`,
      { cache: this.ignoreCssCache ? "no-store" : "default" }
    ).then((res) => res.text());

    let siteFilename = `zap-score-dpz${suffix}`;
    if (this.siteId == 3) {
      siteFilename = `zap-score-rest${suffix}`;
    }
    siteFilename += ".css";

    const siteStyleTask = fetch(
      `${this.cssPath}/${siteFilename}`,
      { cache: this.ignoreCssCache ? "no-store" : "default" }
    ).then((res) => res.text());

    const [globalStyle, siteStyle] = await Promise.all([
      globalStyleTask,
      siteStyleTask,
    ]);

    this.shadow.querySelector(".zap-score-global")?.remove();
    const scoreStyleElement = document.createElement("style");
    scoreStyleElement.classList.add("zap-score-global");
    this.shadow.prepend(scoreStyleElement);
    scoreStyleElement.appendChild(document.createTextNode(globalStyle));

    this.shadow.querySelector(".zap-score-site")?.remove();
    const siteStyleElement = document.createElement("style");
    siteStyleElement.classList.add("zap-score-site");
    scoreStyleElement.after(siteStyleElement);
    siteStyleElement.appendChild(document.createTextNode(siteStyle));
  }

  async loadAndShowScore() {
    if (!(+this.customerId && +this.siteId)) return;

    try {
      const response = await fetch(`https://${apiHost}/DataProxyExtras/customer/${this.customerId}/site/${this.siteId}/score`, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      this.renderHtml(data.MeanScore, data.NumReviews);
    }
    catch (error) {
      console.error(error);
    }
  }

  renderHtml(score, numReviews) {
    this.shadow.querySelector(".score_wrap")?.remove();

    if (numReviews > 0) {
      const siteId = this.siteId || 5;
      const mainDiv = wrapperDiv(siteId, this.customerId, score, numReviews);
      this.shadow.appendChild(mainDiv);
    }
  }

  renderDefaultHtml() {
    this.renderHtml(null, null);
  }

  static get observedAttributes() {
    return ['customer-id', 'site-id', 'theme'];
  }
}

customElements.define('zap-score', ZapScoreElement);