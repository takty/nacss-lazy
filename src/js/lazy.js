/**
 *
 * Lazy Loading
 *
 * @author Takuto Yanagida
 * @version 2021-11-11
 *
 */


window['NACSS'] = window['NACSS'] || {};


(function (NS) {

	(function () {
		// @include _image.js
		NS.lazyImage         = initialize;
		NS.lazyImageIsNeeded = isPolyfillNeeded;
	})();

	(function () {
		// @include _iframe.js
		NS.lazyIframe         = initialize;
		NS.lazyIframeIsNeeded = isPolyfillNeeded;
	})();

	// @include _style-class.js
	// @include _utility.js
	// @include _common.js

})(window['NACSS']);
