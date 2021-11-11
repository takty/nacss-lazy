/**
 *
 * Lazy Loading - Image
 *
 * @author Takuto Yanagida
 * @version 2021-11-11
 *
 */


const BLANK_IMG = 'data:image/gif;base64,R0lGODdhAQABAPAAAP///wAAACwAAAAAAQABAEACAkQBADs=';


function initialize(ts, opts = {}) {
	if (ts.length === 0) return;

	opts = Object.assign({
		offset    : 100,
		blankImage: BLANK_IMG,
	}, opts);

	if (isPolyfillNeeded(HTMLImageElement.prototype)) {  // For Safari
		for (const t of ts) {
			hide(t, opts['blankImage']);
		}
		onIntersect(vs => {
			for (let i = 0; i < ts.length; i += 1) {
				const t = ts[i];
				if (t.dataset.src && vs[i]) {
					show(t);
				}
			}
		}, ts, 0, `* 0px ${opts['offset']}px 0px`);
	}

	window.addEventListener('beforeprint', () => {
		for (const t of ts) {
			if (t.dataset.src) {
				show(t);
			}
			if (t.getAttribute('loading') === 'lazy') {
				t.setAttribute('loading', 'eager');
			}
		}
	}, false);
}

function hide(t, blankImage) {
	saveAttribute(t, 'src', blankImage);
	saveAttribute(t, 'srcset');
	t.style.opacity = 0;
	const h = t.getAttribute('height');
	if (h) {
		t.style.minHeight = h + 'px';
	}
}

function show(t) {
	t.addEventListener('load', () => {
		t.style.minHeight = '';
		t.style.opacity   = '';
	});
	restoreAttribute(t, 'src');
	restoreAttribute(t, 'srcset');
}
