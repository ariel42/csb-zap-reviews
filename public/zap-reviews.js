const commonReviewsCss = `
zap-reviews {
  display: block;
  height: auto;
  text-align: right;
  direction: rtl;
  color: #2b2b2b;
  font-size: 14px;
  font-family: Open Sans Hebrew;
  line-height: 23px;
}

zap-reviews .score_wrap {
  width: 130px;
  height: auto;
  direction: rtl;
  cursor: pointer
}

zap-reviews .sw_vertical {
  width: 180px;
  height: auto
}

zap-reviews .score_num {
  font-weight: bold;
  font-size: 22px;
  text-align: center
}

zap-reviews .sn_vertical {
  font-size: 28px;
  display: table-cell;
  vertical-align: middle
}

zap-reviews .score_text {
  font-size: 18px;
  text-align: center;
  padding-bottom: 10px
}

zap-reviews .st_vertical {
  font-size: 14px;
  padding-bottom: 5px
}

zap-reviews .score_logo {
  text-align: center
}

zap-reviews .score_logo img {
  width: 90px
}

zap-reviews .score_stars {
  position: relative;
  height: auto;
  min-height: 25px;
  margin: auto;
  text-align: justify;
  bottom: 0;
  width: 90px
}

zap-reviews .score_stars_floorforce {
  position: relative;
  height: auto;
  min-height: 25px;
  margin: auto;
  text-align: justify;
  bottom: 0;
  width: 100px
}

zap-reviews .score_stars_floorforce_noID {
  position: relative;
  height: auto;
  min-height: 25px;
  margin: auto;
  text-align: justify;
  bottom: 0
}

zap-reviews .stars {
  position: absolute !important;
  top: 0;
  left: 0;
  direction: ltr;
  font-size: 20px
}

zap-reviews .stars_over {
  position: absolute !important;
  color: #ebca00;
  top: 0;
  left: 0;
  direction: ltr;
  font-size: 20px;
  height: 30px;
  overflow: hidden;
  white-space: nowrap
}

zap-reviews .review_wrap {
  padding: 10px;
  margin-left: auto;
  margin-right: auto
}

zap-reviews .review_flex_content_wrap {
  display: flex
}

zap-reviews .review_wrap .score_stars {
  display: inline-block;
  margin: 5px 5px 0
}

zap-reviews .review_date {
  display: inline-block;
  margin-top: 6px
}

zap-reviews .review_subtitle_f {
  align-items: center;
  display: -webkit-flex
}

zap-reviews .review_subtitle_flex {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column
}

zap-reviews .scores_stars_review {
  margin: 0 10px 0 5px
}

zap-reviews .review_score_text {
  display: inline-block;
  margin-top: 5px
}

zap-reviews .pagination {
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  padding-left: 10px
}

zap-reviews .reviews_link {
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  padding-left: 10px
}

zap-reviews .review_header_ff {
  align-items: center;
  display: -webkit-flex;
  -webkit-justify-content: center
}

zap-reviews .review_headertitle {
  display: inline-block
}

zap-reviews .review_headertext {
  display: inline-block;
  margin-right: 10px
}

zap-reviews .review_imagebox {
  float: right
}

zap-reviews .review_imagebox_f {
  float: left
}

zap-reviews .review_title_wrap {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex
}

zap-reviews .review_title_wrap .review_date {
  margin-top: 0
}

zap-reviews .review_leftinsidewrap {
  overflow: hidden
}

zap-reviews .review_rightinsidewrap {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  margin-left: 50px
}

zap-reviews .review_downinsideright {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -o-justify-content: space-around;
  -webkit-justify-content: space-around;
  justify-content: space-around
}

zap-reviews .review_upinsideright {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex
}

zap-reviews .review_namewrapper {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex
}

zap-reviews .review_datewrapper {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex
}

zap-reviews .review_scorewrapper {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex
}

zap-reviews .review_downinsidehelpful {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex
}

zap-reviews .review_downinsideunhelpful {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex
}

zap-reviews .review_disadvantageswrap {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -o-justify-content: space-between;
  -webkit-justify-content: space-between;
  justify-content: space-between
}

zap-reviews .review_advantageswrap {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -o-justify-content: space-between;
  -webkit-justify-content: space-between;
  justify-content: space-between
}

zap-reviews .review_insidescorewrapper {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column
}

zap-reviews .review_headewrap {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between
}

zap-reviews .review_headertextwrap {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex
}

zap-reviews .review_advantageimage {
  max-height: 43px;
  height: 43px;
  min-width: 40px;
  max-width: 40px;
  width: 40px;
  margin-right: 30px;
  margin-left: 2px
}

zap-reviews .review_disadvantageimage {
  max-height: 43px;
  height: 43px;
  min-width: 40px;
  max-width: 40px;
  width: 40px;
  margin-right: 30px;
  margin-left: 2px
}

zap-reviews .review_unhelpfulimage {
  vertical-align: middle;
  width: 20px;
  height: 20px
}

zap-reviews .review_helpfulimage {
  vertical-align: middle;
  width: 20px;
  height: 20px
}

zap-reviews .review_nametag {
  margin-left: 5px
}

zap-reviews .review_datetag {
  margin-left: 5px
}

zap-reviews .review_headertextzap {
  min-width: 180px
}

zap-reviews .review_helpufl {
  width: 75px;
  max-width: 75px;
  min-width: 75px
}

zap-reviews .review_unhelpufl {
  width: 75px;
  max-width: 75px;
  min-width: 75px
}

zap-reviews .review_seperator {
  width: 1px;
  max-width: 1px;
  min-width: 1px;
  height: 20px;
  background-color: #d1cfcf;
  margin: 0 9px
}
`;

const dpzReviewsCss = (randomId) => `
${commonReviewsCss}

.reviews${randomId}_wp_outer {
  text-align: justify;
  padding-left: 20px;
  padding-right: 20px;
}

.reviews${randomId}_maintitle {
  font-weight: bold;
  font-size: 18px;
  padding-right: 10px;
}

.reviews${randomId}_title {
  font-weight: bold;
  font-size: inherit;
}

.reviews${randomId}_text {
  color: #767676;
}

.reviews${randomId}_date {
  color: #767676;
}

.reviews${randomId}_pagination {
  color: #242424;
}

.reviews${randomId}_wp_outer svg {}

.reviews${randomId}_maintitle svg {}

.reviews${randomId}_title svg {}

.reviews${randomId}_text svg {
  fill: #767676;
}

.reviews${randomId}_date svg {
  fill: #767676;
}

.reviews${randomId}_pagination svg {
  fill: #242424;
}

.reviews${randomId}_maintitle {
  font-weight: bold;
  font-size: 18px;
  padding-top: 10px;
}

.reviews${randomId}_title {
  font-weight: bold;
  font-size: 18px;
}

.reviews${randomId}_text {
  color: #2b2b2b;
}

.reviews${randomId}_date {
  color: #2b2b2b;
}

.reviews${randomId}_pagination {
  color: #940000;
}

.reviews${randomId}_text svg {
  fill: #2b2b2b;
  stroke: #2b2b2b;
}

.reviews${randomId}_date svg {
  fill: #2b2b2b;
  stroke: #2b2b2b;
}

.reviews${randomId}_pagination svg {
  fill: #940000;
  stroke: #940000;
}
`;

const emptyDpzReviews = (customerId, randomId) => `
<div class="reviews">
  <div class="review_wrap">
    <div class="review_content_wrap reviews${randomId}_content_wrap">
      <div class="review_leftinsidewrap reviews${randomId}_leftinsidewrap">
        <div class="review_title reviews${randomId}_title">חוות דעת</div>
        <div class="review_score_text">טוען חוות דעת...</div>
        <div class="score_stars">
          <div class="stars" aria-disabled="true">
            &nbsp;
          </div>
          <div class="stars_over" aria-disabled="true" style="width: 100%">
            &nbsp;
          </div>
        </div>
        <div class="review_date reviews${randomId}_date">&nbsp;</div>
        <div class="review_text reviews${randomId}_text">&nbsp;</div>
      </div>
    </div>
  </div>
</div>
<div class='pagination reviews${randomId}_pagination'>
  <span class='currpage'>1</span>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews${randomId}.getReviews("2")'>2</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews${randomId}.getReviews("3")'>3</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews${randomId}.getReviews("4")'>4</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews${randomId}.getReviews("5")'>5</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews${randomId}.getReviews("2")'>&gt;</a>
  <span>&#160;&#160;</span>
  <span class='reviews${randomId}' style='margin-right: 12px;float: right;'>
    <a target='_blank' href='https://www.d.co.il/${customerId}/#create-review-form'>כתוב חוות
      דעת</a>
    <span>&#160;&#160;&#160;</span>
    <a target='_blank' href='https://www.d.co.il/${customerId}/#page-block-reviews'>קרא באתר דפי
      זהב zap</a>
    <span>&#160;&#160;&#160;</span>
  </span>
</div>
`;

const restReviewsCss = (randomId) => `
${commonReviewsCss}

[data-random-id="${randomId}"] a {
  margin-top: 10px;
  color: #5c0d1e;
}

[data-random-id="${randomId}"] a svg {
  fill: #5c0d1e;
}

.reviews${randomId}_wp_outer {
  text-align: justify;
  margin-left: 40px;
  margin-right: 40px;
}

.reviews${randomId}_content_wrap {
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-width: 0px 0px 1px 0px;
  border-style: dotted;
  border-color: #000000;
  margin-right: 20px;
}

.reviews${randomId}_maintitle {
  font-weight: bold;
  font-size: 18px;
}

.reviews${randomId}_title {
  font-weight: bold;
  font-size: 18px;
  color: #741126;
  margin-left: 15px;
}

.reviews${randomId}_text {
  color: #000000;
  margin-top: 10px;
  line-height: 22px;
}

.reviews${randomId}_date {
  color: #000000;
}

.reviews${randomId}_pagination {
  color: #0066bc;
  padding-right: 18px;
}

.reviews${randomId}_pagination a {
  color: #741126;
  font-weight: bold;
}

.reviews${randomId}_pagination a:hover {
  color: #000000;
}

.reviews${randomId}_imagebox {
  margin-left: 20px;
  width: 60px;
  min-width: 60px;
}

.reviews${randomId}_image {
  width: 50px;
  height: 50px;
  border-width: 6px;
  border-style: solid;
  border-color: #ebe7e4;
}

.reviews${randomId}_header {
  border-width: 0px 0px 1px 0px;
  border-style: solid;
  border-color: #CCCCCC;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.reviews${randomId}_headertitle {
  font-size: 22px;
  line-height: 22px;
}

.reviews${randomId}_username {
  font-size: 13px;
  text-align: center;
  word-wrap: break-word;
  color: #000000;
  word-break: break-word;
}

.reviews${randomId}_wp_outer svg {}

.reviews${randomId}_content_wrap svg {}

.reviews${randomId}_maintitle svg {}

.reviews${randomId}_title svg {
  fill: #741126;
}

.reviews${randomId}_text svg {
  fill: #000000;
}

.reviews${randomId}_date svg {
  fill: #000000;
}

.reviews${randomId}_pagination svg {
  fill: #0066bc;
}

.reviews${randomId}_pagination a svg {
  fill: #741126;
}

.reviews${randomId}_pagination a:hover svg {
  fill: #000000;
}

.reviews${randomId}_imagebox svg {}

.reviews${randomId}_image svg {}

.reviews${randomId}_header svg {}

.reviews${randomId}_headertitle svg {}

.reviews${randomId}_username svg {
  fill: #000000;
}
`;

const emptyRestReviews = (customerId, randomId) => `
<div class="reviews">
  <div class="review_wrap">
    <div class="review_header reviews${randomId}_header">
      <div class="review_headertitle reviews${randomId}_headertitle">חוות דעת</div>
      <div class="review_headertext reviews${randomId}_headertext">טוען חוות דעת...</div>
    </div>
  </div>
</div>
<div class='pagination reviews${randomId}_pagination'>
  <span class='currpage'>1</span>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews${randomId}.getReviews("2")'>2</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews${randomId}.getReviews("3")'>3</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews${randomId}.getReviews("4")'>4</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews${randomId}.getReviews("5")'>5</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews${randomId}.getReviews("2")'>&gt;</a>
  <span>&#160;&#160;</span>
  <span class='reviews${randomId}' style='margin-right: 12px;float: right;'>
    <a target='_blank' href='https://www.rest.co.il/reviews/add/${customerId}/'>הוסף חוות דעת</a>
    <span>&#160;&#160;&#160;</span>
    <a target='_blank' href='https://www.rest.co.il/rest/${customerId}/#reviews'>לכל חוות הדעת</a>
    <span>&#160;&#160;&#160;</span>
  </span>
</div>
`;

const mitchatnimReviewsCss = (randomId) => `
${commonReviewsCss}

[data-random-id="${randomId}"] a {
  margin-right: 2px;
}

.reviews${randomId}_wp_outer {
  text-align: justify;
  margin-left: auto;
  margin-right: auto;
  border-width: 0;
  border-style: solid;
  border-color: #000000;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 10px;
  padding-top: 40px;
}

.reviews${randomId}_maintitle {
  font-size: inherit;
}

.reviews${randomId}_title {
  font-weight: bold;
  font-size: 18px;
  border-width: 0;
  border-style: solid;
  border-color: #000000;
}

.reviews${randomId}_text {
  color: #3e3e3e;
  border-width: 0;
  border-style: solid;
  border-color: #000000;
}

.reviews${randomId}_date {
  color: #999999;
  line-height: 30px;
  vertical-align: top;
}

.reviews${randomId}_pagination {
  color: #62973b;
  margin-right: 78px;
}

.reviews${randomId}_imagebox {
  width: 80px;
}

.reviews${randomId}_image {
  border-width: 5px;
  border-style: solid;
  border-color: #efebe7;
  width: 50px;
  height: 50px;
}

.reviews${randomId}_header {
  border-width: 0px 0px 1px 0px;
  border-style: solid;
  border-color: #cecfce;
  margin-bottom: 20px;
  padding-bottom: 5px;
}

.reviews${randomId}_headertitle {
  font-weight: bold;
  font-size: 24px;
}

.reviews${randomId}_headertext {
  font-weight: bold;
  font-size: 16px;
}

.reviews${randomId}_username {
  font-weight: normal;
  color: #efaed6;
  font-size: 18px;
  font-style: normal;
  text-decoration: none;
}

.reviews${randomId}_scoretext {
  line-height: 30px;
  vertical-align: top;
}

.reviews${randomId}_text svg {
  fill: #3e3e3e;
}

.reviews${randomId}_date svg {
  fill: #999999;
}

.reviews${randomId}_pagination svg {
  fill: #62973b;
}

.reviews${randomId}_username svg {
  fill: #efaed6;
}
`;

const emptyMitchatnimReviews = (customerId, randomId) => `
<div class="reviews">
  <div class="review_wrap">
    <div class="review_header reviews${randomId}_header">
      <div class="review_headertitle reviews${randomId}_headertitle">חוות דעת</div>
      <div class="review_headertext reviews${randomId}_headertext">טוען חוות דעת...</div>
    </div>
  </div>
</div>
<div class='pagination reviews${randomId}_pagination'>
  <span class='currpage'>1</span>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews${randomId}.getReviews("2")'>2</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews${randomId}.getReviews("3")'>3</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews${randomId}.getReviews("4")'>4</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews${randomId}.getReviews("5")'>5</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews${randomId}.getReviews("2")'>&gt;</a>
  <span>&#160;&#160;</span>
  <span class='reviews${randomId}' style='margin-right: 12px;float: right;'>
    <a target='_blank' href='https://www.mitchatnim.co.il/reviews/add/${customerId}/'>כתוב חוות דעת</a>
    <span>&#160;&#160;&#160;</span>
    <a target='_blank' href='https://www.mitchatnim.co.il/business/events-gardens-hall/${customerId}/#reviews'>לקריאת כל חוות
      הדעת</a>
    <span>&#160;&#160;&#160;</span>
  </span>
</div>
`;

const getReviewsCss = (siteId, randomId) => {
  if (siteId == 2) {
    return mitchatnimReviewsCss(randomId);
  }
  else if (siteId == 3) {
    return restReviewsCss(randomId);
  }
  else { //should be siteId 5
    return dpzReviewsCss(randomId);
  }
}

const getEmptyReviewsHtml = (customerId, siteId, randomId) => {
  if (siteId == 2) {
    return emptyMitchatnimReviews(customerId, randomId);
  }
  else if (siteId == 3) {
    return emptyRestReviews(customerId, randomId);
  }
  else { //should be siteId 5
    return emptyDpzReviews(customerId, randomId);
  }
}

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

  constructor(zapReviewsInstance, sResultsPerPage, sCssClass, bShowLinks,
    bLimitNumberOfReviews, iNumOfTotalReviews, iMinScore, bDescendingOrder,
    bIsExpandable, iExpendableHeight, readMoreToken, ariaLabelText) {

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
    const serviceUrl = 'https://tokyo-newapi-branches.d.zapweb.co.il/reviews.asmx/GetReviews';

    const params = {
      sCustomerId: this.zapReviewsInstance.siteId == 3 ?
        `${this.zapReviewsInstance.customerId.split('_')?.[0]}_70025020` : //for Rest it should be customerId_70025020 (Rest's resturants tag id)
        this.zapReviewsInstance.customerId,
      iSiteID: this.zapReviewsInstance.siteId,
      sHeadingCode: "",
      sPageNum,
      sResultsPerPage: this.sResultsPerPage,
      sCssClass: this.sCssClass,
      bShowLinks: this.bShowLinks,
      bLimitNumberOfReviews: this.bLimitNumberOfReviews,
      iNumOfTotalReviews: this.iNumOfTotalReviews,
      iMinScore: this.iMinScore,
      bDescendingOrder: this.bDescendingOrder
    };

    const response = await fetch(serviceUrl, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
    const data = await response.json();

    this.zapReviewsInstance.setReviewsContent(data.d, true);

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
  gotData = false;
  reviewsLoader = null;

  customerId = null;
  siteId = null;

  constructor() {
    super();
  }

  renderDefaultHtml() {
    const emptyReviewsHtml = getEmptyReviewsHtml(
      this.customerId?.split('_')?.[0], //needed for Rest that may get here customerId_70025020 (Rest's resturants tag id) from some migrations
      this.siteId,
      this.randomId
    );
    this.setReviewsContent(emptyReviewsHtml);
  }

  connectedCallback() {
    this.setAttribute('data-random-id', this.randomId);

    if (!this.gotData) {
      this.renderDefaultHtml();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const camelCased = name.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    this[camelCased] = newValue;

    this.renderDefaultHtml();
    this.gotData = false;

    if (+this.siteId && +(this.customerId?.split('_')?.[0])) { //again for supporting customerId_70025020 migrations 
      this.loadFirstReview();
    }
  }

  loadFirstReview() {
    this.initLoader();
    this.reviewsLoader.getReviews("1");
  }

  initLoader() {
    if (!this.reviewsLoader) {
      window[`reviews_reviews${this.randomId}`] = this.reviewsLoader =
        new ZapReviewsLoader(this, "1", `reviews${this.randomId}`, "True", //the output html will have classes and links with this reviews${this.randomId} in their names
          "False", 1000, 3, true,
          false, 45, 'קראו עוד...', 'לחצו להרחיב ולקרוא עוד');
    }
  }

  setReviewsContent(reviewsHtml, isRealData) {
    this.innerHTML = `${reviewsHtml
      ?.replaceAll(`src="/images`, `src="https://zap.dbusiness.co/images`)
      ?.replaceAll(`<div class="score_stars scores_stars_review" />`, `<div class="score_stars scores_stars_review"></div>`)
      }`;

    const fontsLinkElement = document.createElement("link");
    fontsLinkElement.setAttribute("rel", "stylesheet");
    fontsLinkElement.setAttribute("href", "https://fonts.googleapis.com/earlyaccess/opensanshebrew.css");
    this.appendChild(fontsLinkElement);

    const reviewsCss = getReviewsCss(this.siteId, this.randomId);
    const styleElement = globalThis.document.createElement('style');
    styleElement.innerHTML = reviewsCss;
    this.appendChild(styleElement);

    if (isRealData) {
      this.gotData = true;
    }
  }

  static get observedAttributes() {
    return ['customer-id', 'site-id'];
  }
}

customElements.define('zap-reviews', ZapReviewsElement);