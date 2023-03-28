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
const assetsProdHost = "zap.dbusiness.co";
const assetsTestHost = "so3zmf-3000.csb.app";

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
          ? `${this.zapReviewsInstance.customerId.split("_")?.[0]}_70025020` //for Rest it should be customerId_70025020 (Rest's resturants tag id)
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
  randomId = Math.floor(Math.random() * 1000000);
  reviewsLoader = null;
  isTest = false;
  cssPath = `https://${assetsProdHost}/css`;
  theme = "";

  customerId = null;
  siteId = null;

  constructor() {
    super();
  }

  connectedCallback() {
    this.isTest = this.getAttribute("isTest");
    if (this.isTest) {
      this.cssPath = `https://${assetsTestHost}`;
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

    this.reloadStyles();
    this.renderDefaultHtml();
    this.loadFirstReview();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const camelCased = name.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
    this[camelCased] = newValue?.trim() || "";

    if (["site-id", "theme"].includes(name)) {
      this.reloadStyles();
    }

    if (["customer-id", "site-id"].includes(name)) {
      this.renderDefaultHtml();
      this.loadFirstReview();
    }
  }

  reloadStyles() {
    [...this.querySelectorAll(".zap-reviews-css")].forEach((e) =>
      e.remove()
    );

    const suffix = this.theme?.trim() ? `-${this.theme?.trim()}` : "";

    const reviewsStyleElement = document.createElement("link");
    reviewsStyleElement.classList.add("zap-reviews-css");
    reviewsStyleElement.setAttribute("id", `reviews-style${suffix}`);
    reviewsStyleElement.setAttribute("rel", "stylesheet");
    reviewsStyleElement.setAttribute("type", "text/css");
    reviewsStyleElement.setAttribute("href",
      `${this.cssPath}/zap-reviews${suffix}.css${this.isTest ? "?r=" + Math.random() : ""}`
    );
    this.prepend(reviewsStyleElement);

    if (+this.siteId) {
      const siteStyleElement = document.createElement("link");
      siteStyleElement.classList.add("zap-reviews-css");
      siteStyleElement.setAttribute("id", `reviews-style-${this.siteId}${suffix}`);
      siteStyleElement.setAttribute("rel", "stylesheet");
      siteStyleElement.setAttribute("type", "text/css");

      let filename = `zap-reviews-dpz${suffix}`;
      if (this.siteId == 2) {
        filename = `zap-reviews-mitchatnim${suffix}`;
      } else if (this.siteId == 3) {
        filename = `zap-reviews-rest${suffix}`;
      }
      siteStyleElement.setAttribute("href",
        `${this.cssPath}/${filename}.css${this.isTest ? "?r=" + Math.random() : ""}`
      );

      reviewsStyleElement.after(siteStyleElement);
    }
  }

  renderDefaultHtml() {
    const emptyReviewsHtml = getEmptyReviewsHtml(
      this.customerId?.split("_")?.[0] || "", //needed for Rest that may get here customerId_70025020 (Rest's resturants tag id) from some migrations
      this.siteId
    );
    this.setReviewsContent(emptyReviewsHtml);
  }

  loadFirstReview() {
    if (+this.siteId && +this.customerId?.split("_")?.[0]) { //again for supporting customerId_70025020 migrations
      this.initLoaderIfNeeded();
      this.reviewsLoader.getReviews("1");
    }
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

  setReviewsContent(reviewsHtml) {
    this.querySelector(".reviews")?.remove();
    this.querySelector(".pagination")?.remove();
    
    this.insertAdjacentHTML('beforeend',
      `${(reviewsHtml || '')
        .trim()
        .replaceAll(`src="/images`, `src="https://${assetsProdHost}/images`)
        .replaceAll(
          `<div class="score_stars scores_stars_review" />`,
          `<div class="score_stars scores_stars_review"></div>`
        )}`
    );
  }

  static get observedAttributes() {
    return ["customer-id", "site-id", "theme"];
  }
}

customElements.define("zap-reviews", ZapReviewsElement);
