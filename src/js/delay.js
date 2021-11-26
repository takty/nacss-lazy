/**
 *
 * Delay Loading
 *
 * @author Takuto Yanagida
 * @version 2021-11-11
 *
 */


window['NACSS'] = window['NACSS'] || {};


(function (NS) {

	(function () {
		// @include _image.js
		NS.delayImage         = initialize;
		NS.delayImageIsNeeded = isPolyfillNeeded;
	})();

	(function () {
		// @include _iframe.js
		NS.delayIframe         = initialize;
		NS.delayIframeIsNeeded = isPolyfillNeeded;
	})();

	// @include _style-class.js
	// @include _utility.js
	// @include _common.js

})(window['NACSS']);
