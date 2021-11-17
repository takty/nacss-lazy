/**
 *
 * Iframe
 *
 * @author Takuto Yanagida
 * @version 2021-11-11
 *
 */


function initialize(ts, opts = {}) {
	if (ts.length === 0) return;

	opts = Object.assign({
		offset: 100,
	}, opts);

	if (isPolyfillNeeded(HTMLIFrameElement.prototype)) {  // For Safari
		for (const t of ts) {
			hide(t);
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

function hide(t) {
	saveAttribute(t, 'src');
}

function show(t) {
	restoreAttribute(t, 'src');
}
