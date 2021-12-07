/**
 *
 * Delay Loading
 *
 * @author Takuto Yanagida
 * @version 2021-12-07
 *
 */


'use strict';

window['NACSS'] = window['NACSS'] || {};


(function (NS) {

	{
		// @include _image.js
		NS.delayImage         = initialize;
		NS.delayImageIsNeeded = isPolyfillNeeded;
	}

	{
		// @include _iframe.js
		NS.delayIframe         = initialize;
		NS.delayIframeIsNeeded = isPolyfillNeeded;
	}

	// @include _common.js
	// @include _style-class.js
	// @include _utility.js

})(window['NACSS']);
