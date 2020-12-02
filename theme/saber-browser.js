/* globals __PORTFOLIO_STYLE__ */
import 'normalize.css/normalize.css';
import 'typeface-source-sans-pro/index.css';
import 'grid.css/grid.css';
import HomeSection from './components/HomeSection.vue';

switch(__PORTFOLIO_STYLE__) {
  case 'dark':
    require("prismjs/themes/prism-tomorrow.css");
    break;
  case 'light':
    require("prismjs/themes/prism.css");
    break;
  default:
    require("prismjs/themes/prism.css");
    require("prismjs/themes/prism-tomorrow.css");
}

require("saber-highlight-css/default.css");

require("./css/global.css");

export default (function (_ref) {
  var Vue = _ref.Vue,
      setHead = _ref.setHead;
  Vue.component(HomeSection.name, HomeSection);
  setHead(function (vm) {
    var style = vm.$themeConfig.style;
    /*if(style === 'switch') {
      style = global.preferredTheme ? global.preferredTheme : 'dark';
    }*/
    return {
      bodyAttrs: {
        class: "is-".concat(style, "-style")
      },
      meta: [{
        name: 'description',
        content: vm.$siteConfig.description
      }, {
        name: 'twitter:card',
        content: 'summary'
      }, vm.$themeConfig.twitter && {
        name: 'twitter:creator',
        content: "@".concat(vm.$themeConfig.twitter)
      }],
      link: [vm.$feed && {
        rel: 'alternate',
        type: vm.$feed.type === 'atom' ? 'application/atom+xml' : vm.$feed.type === 'json' ? 'application/json' : 'application/rss+xml',
        href: vm.$feed.permalink
      }].filter(Boolean)
    };
  });
});