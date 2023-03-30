const emptyDpzReviews = (customerId) => `
<div class="reviews">
  <div class="review_wrap">
    <div class="review_content_wrap reviews_content_wrap">
      <div class="review_leftinsidewrap reviews_leftinsidewrap">
        <div class="review_title reviews_title">חוות דעת</div>
        <div class="review_score_text">טוען חוות דעת...</div>
        <div class="score_stars">
          <div class="stars" aria-disabled="true">
            &nbsp;
          </div>
          <div class="stars_over" aria-disabled="true" style="width: 100%">
            &nbsp;
          </div>
        </div>
        <div class="review_date reviews_date">&nbsp;</div>
        <div class="review_text reviews_text">&nbsp;</div>
      </div>
    </div>
  </div>
</div>
<div class='pagination reviews_pagination'>
  <span class='currpage'>1</span>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews.getReviews("2")'>2</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews.getReviews("3")'>3</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews.getReviews("4")'>4</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews.getReviews("5")'>5</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews.getReviews("2")'>&gt;</a>
  <span>&#160;&#160;</span>
  <span class='reviews' style='margin-right: 12px;float: right;'>
    <a target='_blank' href='https://www.d.co.il/${customerId}/#create-review-form'>כתוב חוות
      דעת</a>
    <span>&#160;&#160;&#160;</span>
    <a target='_blank' href='https://www.d.co.il/${customerId}/#page-block-reviews'>קרא באתר דפי
      זהב zap</a>
    <span>&#160;&#160;&#160;</span>
  </span>
</div>
`;

const emptyRestReviews = (customerId) => `
<div class="reviews">
  <div class="review_wrap">
    <div class="review_header reviews_header">
      <div class="review_headertitle reviews_headertitle">חוות דעת</div>
      <div class="review_headertext reviews_headertext">טוען חוות דעת...</div>
    </div>
  </div>
</div>
<div class='pagination reviews_pagination'>
  <span class='currpage'>1</span>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews.getReviews("2")'>2</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews.getReviews("3")'>3</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews.getReviews("4")'>4</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews.getReviews("5")'>5</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews.getReviews("2")'>&gt;</a>
  <span>&#160;&#160;</span>
  <span class='reviews' style='margin-right: 12px;float: right;'>
    <a target='_blank' href='https://www.rest.co.il/reviews/add/${customerId}/'>הוסף חוות דעת</a>
    <span>&#160;&#160;&#160;</span>
    <a target='_blank' href='https://www.rest.co.il/rest/${customerId}/#reviews'>לכל חוות הדעת</a>
    <span>&#160;&#160;&#160;</span>
  </span>
</div>
`;

const emptyMitchatnimReviews = (customerId) => `
<div class="reviews">
  <div class="review_wrap">
    <div class="review_header reviews_header">
      <div class="review_headertitle reviews_headertitle">חוות דעת</div>
      <div class="review_headertext reviews_headertext">טוען חוות דעת...</div>
    </div>
  </div>
</div>
<div class='pagination reviews_pagination'>
  <span class='currpage'>1</span>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews.getReviews("2")'>2</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews.getReviews("3")'>3</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews.getReviews("4")'>4</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews.getReviews("5")'>5</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews.getReviews("2")'>&gt;</a>
  <span>&#160;&#160;</span>
  <span class='reviews' style='margin-right: 12px;float: right;'>
    <a target='_blank' href='https://www.mitchatnim.co.il/reviews/add/${customerId}/'>כתוב חוות דעת</a>
    <span>&#160;&#160;&#160;</span>
    <a target='_blank' href='https://www.mitchatnim.co.il/business/events-gardens-hall/${customerId}/#reviews'>לקריאת כל חוות
      הדעת</a>
    <span>&#160;&#160;&#160;</span>
  </span>
</div>
`;

const getEmptyReviewsHtml = (customerId, siteId) => {
  if (siteId == 2) {
    return emptyMitchatnimReviews(customerId);
  } else if (siteId == 3) {
    return emptyRestReviews(customerId);
  } else {
    //should be siteId 5
    return emptyDpzReviews(customerId);
  }
};

const apiHost = "tokyo-newapi-branches.d.zapweb.co.il";
const assetsOriginProd = "https://zap.dbusiness.co";
const cssHostPathProd = `${assetsOriginProd}/css`;
const cssHostPathTest = "https://github.com/ariel42/csb-zap-reviews/blob/dev/public";

class ZapReviewsLoader {
  zapReviewsInstance = null;
  sResultsPerPage = null;
  sCssClass = null;
  bShowLinks = null;
  bLimitNumberOfReviews = null;
  iNumOfTotalReviews = null;
  iMinScore = null;
  bDescendingOrder = null;

  bIsExpandable = null;
  iExpendableHeight = null;
  readMoreToken = null;
  ariaLabelText = null;

  constructor(
    zapReviewsInstance,
    sResultsPerPage,
    sCssClass,
    bShowLinks,
    bLimitNumberOfReviews,
    iNumOfTotalReviews,
    iMinScore,
    bDescendingOrder,
    bIsExpandable,
    iExpendableHeight,
    readMoreToken,
    ariaLabelText
  ) {
    this.zapReviewsInstance = zapReviewsInstance;
    this.sResultsPerPage = sResultsPerPage;
    this.sCssClass = sCssClass;
    this.bShowLinks = bShowLinks;
    this.bLimitNumberOfReviews = bLimitNumberOfReviews;
    this.iNumOfTotalReviews = iNumOfTotalReviews;
    this.iMinScore = iMinScore;
    this.bDescendingOrder = bDescendingOrder;

    this.bIsExpandable = bIsExpandable;
    this.iExpendableHeight = iExpendableHeight;
    this.readMoreToken = readMoreToken;
    this.ariaLabelText = ariaLabelText;

    // if (this.bIsExpandable) {
    //   $('.' + this.sCssClass + '_text').readmore({
    //     maxHeight: this.iExpendableHeight,
    //     moreLink: '<a aria-label="' + this.ariaLabelText + '">' + this.readMoreToken + '</a>',
    //     lessLink: '',
    //     heightMargin: 1
    //   });
    // }
  }

  async getReviews(sPageNum) {
    const serviceUrl = `https://${apiHost}/reviews.asmx/GetReviews`;

    const params = {
      sCustomerId:
        this.zapReviewsInstance.siteId == 3
          ? `${this.zapReviewsInstance.customerId}_70025020` //for Rest it should be customerId_70025020 (Rest's resturants tag id)
          : this.zapReviewsInstance.customerId,
      iSiteID: this.zapReviewsInstance.siteId,
      sHeadingCode: "",
      sPageNum,
      sResultsPerPage: this.sResultsPerPage,
      sCssClass: this.sCssClass,
      bShowLinks: this.bShowLinks,
      bLimitNumberOfReviews: this.bLimitNumberOfReviews,
      iNumOfTotalReviews: this.iNumOfTotalReviews,
      iMinScore: this.iMinScore,
      bDescendingOrder: this.bDescendingOrder,
    };

    const response = await fetch(serviceUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();

    this.zapReviewsInstance.setReviewsContent(data.d);

    //   if (this.bIsExpandable) {
    //     $('#' + this.sCssClass + ' .' + staticCssClass + '_text').readmore({
    //       maxHeight: this.iExpendableHeight,
    //       moreLink: '<a>' + this.readMoreToken + '</a>',
    //       lessLink: '',
    //       heightMargin: 1
    //     });
    //   }
    // });
  }
}

class ZapReviewsElement extends globalThis.HTMLElement {
  connectedCallbackRan = false;
  shadow = null;
  randomId = Math.floor(Math.random() * 1000000);
  reviewsLoader = null;
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

    for (const attribute of ZapReviewsElement.observedAttributes) {
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
        this.loadFirstReview();
      }
    }

    this.connectedCallbackRan = true;
  }

  attributeChangedCallback(name, oldValue, newValue) {
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
        this.loadFirstReview();
      }
    }
  }

  async reloadStyles() {
    const suffix = this.theme?.trim() ? `-${this.theme?.trim()}` : "";

    const globalStyleTask = fetch(
      `${this.cssPath}/zap-reviews${suffix}.css`,
      { cache: this.ignoreCssCache ? "no-store" : "default" }
    ).then((res) => res.text());

    let siteFilename = `zap-reviews-dpz${suffix}`;
    if (this.siteId == 2) {
      siteFilename = `zap-reviews-mitchatnim${suffix}`;
    } else if (this.siteId == 3) {
      siteFilename = `zap-reviews-rest${suffix}`;
    }
    siteFilename += '.css';

    const siteStyleTask = fetch(
      `${this.cssPath}/${siteFilename}`,
      { cache: this.ignoreCssCache ? "no-store" : "default" }
    ).then((res) => res.text());

    const [globalStyle, siteStyle] = await Promise.all([
      globalStyleTask,
      siteStyleTask,
    ]);

    this.shadow.querySelector(".zap-reviews-global")?.remove();
    const reviewsStyleElement = document.createElement("style");
    reviewsStyleElement.classList.add("zap-reviews-global");
    this.shadow.prepend(reviewsStyleElement);
    reviewsStyleElement.appendChild(document.createTextNode(globalStyle));

    this.shadow.querySelector(".zap-reviews-site")?.remove();
    const siteStyleElement = document.createElement("style");
    siteStyleElement.classList.add("zap-reviews-site");
    reviewsStyleElement.after(siteStyleElement);
    siteStyleElement.appendChild(document.createTextNode(siteStyle));
  }

  loadFirstReview() {
    if (!(+this.customerId && +this.siteId)) return;

    this.initLoaderIfNeeded();
    this.reviewsLoader.getReviews("1");
  }

  setReviewsContent(reviewsHtml) {
    this.shadow.querySelector(".reviews")?.remove();
    this.shadow.querySelector(".pagination")?.remove();

    this.shadow.innerHTML += `${(reviewsHtml || "")
      .trim()
      .replaceAll(`src="/images`, `src="${assetsOriginProd}/images`)
      .replaceAll(
        `<div class="score_stars scores_stars_review" />`,
        `<div class="score_stars scores_stars_review"></div>`
      )}`;
  }

  renderDefaultHtml() {
    const emptyReviewsHtml = getEmptyReviewsHtml(this.customerId, this.siteId);
    this.setReviewsContent(emptyReviewsHtml);
  }

  initLoaderIfNeeded() {
    if (!this.reviewsLoader) {
      this.reviewsLoader = new ZapReviewsLoader(
        this,
        "1",
        `reviews${this.randomId}`,
        "True", //the output html will have links and classes with this reviews${this.randomId} in their names
        "False",
        1000,
        3,
        true,
        false,
        45,
        "קראו עוד...",
        "לחצו להרחיב ולקרוא עוד"
      );

      window[`reviews_reviews${this.randomId}`] = this.reviewsLoader; //so the links will work
    }
  }

  static get observedAttributes() {
    return ["customer-id", "site-id", "theme"];
  }
}

customElements.define("zap-reviews", ZapReviewsElement);
