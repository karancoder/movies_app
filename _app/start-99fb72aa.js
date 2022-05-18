var rt = Object.defineProperty,
	st = Object.defineProperties;
var it = Object.getOwnPropertyDescriptors;
var de = Object.getOwnPropertySymbols;
var Ve = Object.prototype.hasOwnProperty,
	qe = Object.prototype.propertyIsEnumerable;
var De = (n, e, t) =>
		e in n ? rt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (n[e] = t),
	x = (n, e) => {
		for (var t in e || (e = {})) Ve.call(e, t) && De(n, t, e[t]);
		if (de) for (var t of de(e)) qe.call(e, t) && De(n, t, e[t]);
		return n;
	},
	re = (n, e) => st(n, it(e));
var ze = (n, e) => {
	var t = {};
	for (var s in n) Ve.call(n, s) && e.indexOf(s) < 0 && (t[s] = n[s]);
	if (n != null && de) for (var s of de(n)) e.indexOf(s) < 0 && qe.call(n, s) && (t[s] = n[s]);
	return t;
};
import {
	s as et,
	n as ye,
	S as at,
	i as ot,
	e as ct,
	c as lt,
	a as ft,
	d as V,
	b as ve,
	f as B,
	g as q,
	t as ut,
	h as dt,
	j as pt,
	k as ht,
	l as I,
	m as _t,
	o as M,
	p as T,
	q as F,
	r as C,
	u as mt,
	v as gt,
	w as Ee,
	x as z,
	y as ae,
	z as J,
	A as oe,
	B as ce,
	C as K,
	D as le,
	E as Je
} from './chunks/index-bb418885.js';
import { i as wt } from './chunks/singletons-d1fb5791.js';
const Z = [];
function pe(n, e = ye) {
	let t;
	const s = new Set();
	function l(r) {
		if (et(n, r) && ((n = r), t)) {
			const i = !Z.length;
			for (const a of s) a[1](), Z.push(a, n);
			if (i) {
				for (let a = 0; a < Z.length; a += 2) Z[a][0](Z[a + 1]);
				Z.length = 0;
			}
		}
	}
	function o(r) {
		l(r(n));
	}
	function f(r, i = ye) {
		const a = [r, i];
		return (
			s.add(a),
			s.size === 1 && (t = e(l) || ye),
			r(n),
			() => {
				s.delete(a), s.size === 0 && (t(), (t = null));
			}
		);
	}
	return { set: l, update: o, subscribe: f };
}
let Ke = '',
	tt = '';
function bt(n) {
	(Ke = n.base), (tt = n.assets || Ke);
}
function yt(n) {
	let e, t, s;
	const l = [n[1] || {}];
	var o = n[0][0];
	function f(r) {
		let i = {};
		for (let a = 0; a < l.length; a += 1) i = le(i, l[a]);
		return { props: i };
	}
	return (
		o && (e = new o(f())),
		{
			c() {
				e && z(e.$$.fragment), (t = I());
			},
			l(r) {
				e && ae(e.$$.fragment, r), (t = I());
			},
			m(r, i) {
				e && J(e, r, i), q(r, t, i), (s = !0);
			},
			p(r, i) {
				const a = i & 2 ? oe(l, [ce(r[1] || {})]) : {};
				if (o !== (o = r[0][0])) {
					if (e) {
						M();
						const d = e;
						T(d.$$.fragment, 1, 0, () => {
							K(d, 1);
						}),
							F();
					}
					o
						? ((e = new o(f())), z(e.$$.fragment), C(e.$$.fragment, 1), J(e, t.parentNode, t))
						: (e = null);
				} else o && e.$set(a);
			},
			i(r) {
				s || (e && C(e.$$.fragment, r), (s = !0));
			},
			o(r) {
				e && T(e.$$.fragment, r), (s = !1);
			},
			d(r) {
				r && V(t), e && K(e, r);
			}
		}
	);
}
function vt(n) {
	let e, t, s;
	const l = [n[1] || {}];
	var o = n[0][0];
	function f(r) {
		let i = { $$slots: { default: [Rt] }, $$scope: { ctx: r } };
		for (let a = 0; a < l.length; a += 1) i = le(i, l[a]);
		return { props: i };
	}
	return (
		o && (e = new o(f(n))),
		{
			c() {
				e && z(e.$$.fragment), (t = I());
			},
			l(r) {
				e && ae(e.$$.fragment, r), (t = I());
			},
			m(r, i) {
				e && J(e, r, i), q(r, t, i), (s = !0);
			},
			p(r, i) {
				const a = i & 2 ? oe(l, [ce(r[1] || {})]) : {};
				if ((i & 525 && (a.$$scope = { dirty: i, ctx: r }), o !== (o = r[0][0]))) {
					if (e) {
						M();
						const d = e;
						T(d.$$.fragment, 1, 0, () => {
							K(d, 1);
						}),
							F();
					}
					o
						? ((e = new o(f(r))), z(e.$$.fragment), C(e.$$.fragment, 1), J(e, t.parentNode, t))
						: (e = null);
				} else o && e.$set(a);
			},
			i(r) {
				s || (e && C(e.$$.fragment, r), (s = !0));
			},
			o(r) {
				e && T(e.$$.fragment, r), (s = !1);
			},
			d(r) {
				r && V(t), e && K(e, r);
			}
		}
	);
}
function $t(n) {
	let e, t, s;
	const l = [n[2] || {}];
	var o = n[0][1];
	function f(r) {
		let i = {};
		for (let a = 0; a < l.length; a += 1) i = le(i, l[a]);
		return { props: i };
	}
	return (
		o && (e = new o(f())),
		{
			c() {
				e && z(e.$$.fragment), (t = I());
			},
			l(r) {
				e && ae(e.$$.fragment, r), (t = I());
			},
			m(r, i) {
				e && J(e, r, i), q(r, t, i), (s = !0);
			},
			p(r, i) {
				const a = i & 4 ? oe(l, [ce(r[2] || {})]) : {};
				if (o !== (o = r[0][1])) {
					if (e) {
						M();
						const d = e;
						T(d.$$.fragment, 1, 0, () => {
							K(d, 1);
						}),
							F();
					}
					o
						? ((e = new o(f())), z(e.$$.fragment), C(e.$$.fragment, 1), J(e, t.parentNode, t))
						: (e = null);
				} else o && e.$set(a);
			},
			i(r) {
				s || (e && C(e.$$.fragment, r), (s = !0));
			},
			o(r) {
				e && T(e.$$.fragment, r), (s = !1);
			},
			d(r) {
				r && V(t), e && K(e, r);
			}
		}
	);
}
function kt(n) {
	let e, t, s;
	const l = [n[2] || {}];
	var o = n[0][1];
	function f(r) {
		let i = { $$slots: { default: [Et] }, $$scope: { ctx: r } };
		for (let a = 0; a < l.length; a += 1) i = le(i, l[a]);
		return { props: i };
	}
	return (
		o && (e = new o(f(n))),
		{
			c() {
				e && z(e.$$.fragment), (t = I());
			},
			l(r) {
				e && ae(e.$$.fragment, r), (t = I());
			},
			m(r, i) {
				e && J(e, r, i), q(r, t, i), (s = !0);
			},
			p(r, i) {
				const a = i & 4 ? oe(l, [ce(r[2] || {})]) : {};
				if ((i & 521 && (a.$$scope = { dirty: i, ctx: r }), o !== (o = r[0][1]))) {
					if (e) {
						M();
						const d = e;
						T(d.$$.fragment, 1, 0, () => {
							K(d, 1);
						}),
							F();
					}
					o
						? ((e = new o(f(r))), z(e.$$.fragment), C(e.$$.fragment, 1), J(e, t.parentNode, t))
						: (e = null);
				} else o && e.$set(a);
			},
			i(r) {
				s || (e && C(e.$$.fragment, r), (s = !0));
			},
			o(r) {
				e && T(e.$$.fragment, r), (s = !1);
			},
			d(r) {
				r && V(t), e && K(e, r);
			}
		}
	);
}
function Et(n) {
	let e, t, s;
	const l = [n[3] || {}];
	var o = n[0][2];
	function f(r) {
		let i = {};
		for (let a = 0; a < l.length; a += 1) i = le(i, l[a]);
		return { props: i };
	}
	return (
		o && (e = new o(f())),
		{
			c() {
				e && z(e.$$.fragment), (t = I());
			},
			l(r) {
				e && ae(e.$$.fragment, r), (t = I());
			},
			m(r, i) {
				e && J(e, r, i), q(r, t, i), (s = !0);
			},
			p(r, i) {
				const a = i & 8 ? oe(l, [ce(r[3] || {})]) : {};
				if (o !== (o = r[0][2])) {
					if (e) {
						M();
						const d = e;
						T(d.$$.fragment, 1, 0, () => {
							K(d, 1);
						}),
							F();
					}
					o
						? ((e = new o(f())), z(e.$$.fragment), C(e.$$.fragment, 1), J(e, t.parentNode, t))
						: (e = null);
				} else o && e.$set(a);
			},
			i(r) {
				s || (e && C(e.$$.fragment, r), (s = !0));
			},
			o(r) {
				e && T(e.$$.fragment, r), (s = !1);
			},
			d(r) {
				r && V(t), e && K(e, r);
			}
		}
	);
}
function Rt(n) {
	let e, t, s, l;
	const o = [kt, $t],
		f = [];
	function r(i, a) {
		return i[0][2] ? 0 : 1;
	}
	return (
		(e = r(n)),
		(t = f[e] = o[e](n)),
		{
			c() {
				t.c(), (s = I());
			},
			l(i) {
				t.l(i), (s = I());
			},
			m(i, a) {
				f[e].m(i, a), q(i, s, a), (l = !0);
			},
			p(i, a) {
				let d = e;
				(e = r(i)),
					e === d
						? f[e].p(i, a)
						: (M(),
						  T(f[d], 1, 1, () => {
								f[d] = null;
						  }),
						  F(),
						  (t = f[e]),
						  t ? t.p(i, a) : ((t = f[e] = o[e](i)), t.c()),
						  C(t, 1),
						  t.m(s.parentNode, s));
			},
			i(i) {
				l || (C(t), (l = !0));
			},
			o(i) {
				T(t), (l = !1);
			},
			d(i) {
				f[e].d(i), i && V(s);
			}
		}
	);
}
function Be(n) {
	let e,
		t = n[5] && We(n);
	return {
		c() {
			(e = ct('div')), t && t.c(), this.h();
		},
		l(s) {
			e = lt(s, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, style: !0 });
			var l = ft(e);
			t && t.l(l), l.forEach(V), this.h();
		},
		h() {
			ve(e, 'id', 'svelte-announcer'),
				ve(e, 'aria-live', 'assertive'),
				ve(e, 'aria-atomic', 'true'),
				B(e, 'position', 'absolute'),
				B(e, 'left', '0'),
				B(e, 'top', '0'),
				B(e, 'clip', 'rect(0 0 0 0)'),
				B(e, 'clip-path', 'inset(50%)'),
				B(e, 'overflow', 'hidden'),
				B(e, 'white-space', 'nowrap'),
				B(e, 'width', '1px'),
				B(e, 'height', '1px');
		},
		m(s, l) {
			q(s, e, l), t && t.m(e, null);
		},
		p(s, l) {
			s[5] ? (t ? t.p(s, l) : ((t = We(s)), t.c(), t.m(e, null))) : t && (t.d(1), (t = null));
		},
		d(s) {
			s && V(e), t && t.d();
		}
	};
}
function We(n) {
	let e;
	return {
		c() {
			e = ut(n[6]);
		},
		l(t) {
			e = dt(t, n[6]);
		},
		m(t, s) {
			q(t, e, s);
		},
		p(t, s) {
			s & 64 && pt(e, t[6]);
		},
		d(t) {
			t && V(e);
		}
	};
}
function St(n) {
	let e, t, s, l, o;
	const f = [vt, yt],
		r = [];
	function i(d, R) {
		return d[0][1] ? 0 : 1;
	}
	(e = i(n)), (t = r[e] = f[e](n));
	let a = n[4] && Be(n);
	return {
		c() {
			t.c(), (s = ht()), a && a.c(), (l = I());
		},
		l(d) {
			t.l(d), (s = _t(d)), a && a.l(d), (l = I());
		},
		m(d, R) {
			r[e].m(d, R), q(d, s, R), a && a.m(d, R), q(d, l, R), (o = !0);
		},
		p(d, [R]) {
			let y = e;
			(e = i(d)),
				e === y
					? r[e].p(d, R)
					: (M(),
					  T(r[y], 1, 1, () => {
							r[y] = null;
					  }),
					  F(),
					  (t = r[e]),
					  t ? t.p(d, R) : ((t = r[e] = f[e](d)), t.c()),
					  C(t, 1),
					  t.m(s.parentNode, s)),
				d[4]
					? a
						? a.p(d, R)
						: ((a = Be(d)), a.c(), a.m(l.parentNode, l))
					: a && (a.d(1), (a = null));
		},
		i(d) {
			o || (C(t), (o = !0));
		},
		o(d) {
			T(t), (o = !1);
		},
		d(d) {
			r[e].d(d), d && V(s), a && a.d(d), d && V(l);
		}
	};
}
function Lt(n, e, t) {
	let { stores: s } = e,
		{ page: l } = e,
		{ components: o } = e,
		{ props_0: f = null } = e,
		{ props_1: r = null } = e,
		{ props_2: i = null } = e;
	mt('__svelte__', s), gt(s.page.notify);
	let a = !1,
		d = !1,
		R = null;
	return (
		Ee(() => {
			const y = s.page.subscribe(() => {
				a && (t(5, (d = !0)), t(6, (R = document.title || 'untitled page')));
			});
			return t(4, (a = !0)), y;
		}),
		(n.$$set = (y) => {
			'stores' in y && t(7, (s = y.stores)),
				'page' in y && t(8, (l = y.page)),
				'components' in y && t(0, (o = y.components)),
				'props_0' in y && t(1, (f = y.props_0)),
				'props_1' in y && t(2, (r = y.props_1)),
				'props_2' in y && t(3, (i = y.props_2));
		}),
		(n.$$.update = () => {
			n.$$.dirty & 384 && s.page.set(l);
		}),
		[o, f, r, i, a, d, R, s, l]
	);
}
class Ut extends at {
	constructor(e) {
		super(),
			ot(this, e, Lt, St, et, {
				stores: 7,
				page: 8,
				components: 0,
				props_0: 1,
				props_1: 2,
				props_2: 3
			});
	}
}
const At = 'modulepreload',
	Ye = {},
	Ot = './_app/',
	se = function (e, t) {
		return !t || t.length === 0
			? e()
			: Promise.all(
					t.map((s) => {
						if (((s = `${Ot}${s}`), s in Ye)) return;
						Ye[s] = !0;
						const l = s.endsWith('.css'),
							o = l ? '[rel="stylesheet"]' : '';
						if (document.querySelector(`link[href="${s}"]${o}`)) return;
						const f = document.createElement('link');
						if (
							((f.rel = l ? 'stylesheet' : At),
							l || ((f.as = 'script'), (f.crossOrigin = '')),
							(f.href = s),
							document.head.appendChild(f),
							l)
						)
							return new Promise((r, i) => {
								f.addEventListener('load', r),
									f.addEventListener('error', () => i(new Error(`Unable to preload CSS for ${s}`)));
							});
					})
			  ).then(() => e());
	},
	Nt = {},
	Se = [
		() =>
			se(
				() => import('./pages/__layout.svelte-82e98f99.js'),
				[
					'pages/__layout.svelte-82e98f99.js',
					'assets/pages/__layout.svelte-760fbc68.css',
					'chunks/index-bb418885.js'
				]
			),
		() =>
			se(
				() => import('./error.svelte-02c7fc7d.js'),
				['error.svelte-02c7fc7d.js', 'chunks/index-bb418885.js']
			),
		() =>
			se(
				() => import('./pages/index.svelte-8e5ed99b.js'),
				[
					'pages/index.svelte-8e5ed99b.js',
					'assets/pages/index.svelte-f7702668.css',
					'chunks/index-bb418885.js',
					'chunks/index-8071ad13.js',
					'chunks/MoviesCard-1d28faef.js',
					'assets/MoviesCard-0ac41bb3.css',
					'chunks/singletons-d1fb5791.js'
				]
			),
		() =>
			se(
				() => import('./pages/movie/_id_.svelte-dab2f65e.js'),
				[
					'pages/movie/_id_.svelte-dab2f65e.js',
					'assets/pages/movie/_id_.svelte-09718b08.css',
					'chunks/index-bb418885.js',
					'chunks/index-8071ad13.js'
				]
			),
		() =>
			se(
				() => import('./pages/search/_id_.svelte-1db3c2b3.js'),
				[
					'pages/search/_id_.svelte-1db3c2b3.js',
					'assets/pages/search/_id_.svelte-dcb060a2.css',
					'chunks/index-bb418885.js',
					'chunks/MoviesCard-1d28faef.js',
					'assets/MoviesCard-0ac41bb3.css'
				]
			)
	],
	Pt = { '': [[0, 2], [1]], 'movie/[id]': [[0, 3], [1]], 'search/[id]': [[0, 4], [1]] };
function Me(n) {
	return n instanceof Error || (n && n.name && n.message) ? n : new Error(JSON.stringify(n));
}
function Fe(n) {
	if (n.fallthrough)
		throw new Error(
			'fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching'
		);
	if ('maxage' in n) throw new Error('maxage should be replaced with cache: { maxage }');
	const e = n.status && n.status >= 400 && n.status <= 599 && !n.redirect;
	if (n.error || e) {
		const t = n.status;
		if (!n.error && e) return { status: t || 500, error: new Error() };
		const s = typeof n.error == 'string' ? new Error(n.error) : n.error;
		return s instanceof Error
			? !t || t < 400 || t > 599
				? (console.warn(
						'"error" returned from load() without a valid status code \u2014 defaulting to 500'
				  ),
				  { status: 500, error: s })
				: { status: t, error: s }
			: {
					status: 500,
					error: new Error(
						`"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`
					)
			  };
	}
	if (n.redirect) {
		if (!n.status || Math.floor(n.status / 100) !== 3)
			return {
				status: 500,
				error: new Error(
					'"redirect" property returned from load() must be accompanied by a 3xx status code'
				)
			};
		if (typeof n.redirect != 'string')
			return {
				status: 500,
				error: new Error('"redirect" property returned from load() must be a string')
			};
	}
	if (
		n.dependencies &&
		(!Array.isArray(n.dependencies) || n.dependencies.some((t) => typeof t != 'string'))
	)
		return {
			status: 500,
			error: new Error('"dependencies" property returned from load() must be of type string[]')
		};
	if (n.context)
		throw new Error(
			'You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.'
		);
	return n;
}
function xt(n, e) {
	return n === '/' || e === 'ignore'
		? n
		: e === 'never'
		? n.endsWith('/')
			? n.slice(0, -1)
			: n
		: e === 'always' && !n.endsWith('/')
		? n + '/'
		: n;
}
function It(n) {
	let e = 5381,
		t = n.length;
	if (typeof n == 'string') for (; t; ) e = (e * 33) ^ n.charCodeAt(--t);
	else for (; t; ) e = (e * 33) ^ n[--t];
	return (e >>> 0).toString(36);
}
function Ge(n) {
	let e = n.baseURI;
	if (!e) {
		const t = n.getElementsByTagName('base');
		e = t.length ? t[0].href : n.URL;
	}
	return e;
}
function Re() {
	return { x: pageXOffset, y: pageYOffset };
}
function Xe(n) {
	return n.composedPath().find((t) => t instanceof Node && t.nodeName.toUpperCase() === 'A');
}
function Ze(n) {
	return n instanceof SVGAElement ? new URL(n.href.baseVal, document.baseURI) : new URL(n.href);
}
function He(n) {
	const e = pe(n);
	let t = !0;
	function s() {
		(t = !0), e.update((f) => f);
	}
	function l(f) {
		(t = !1), e.set(f);
	}
	function o(f) {
		let r;
		return e.subscribe((i) => {
			(r === void 0 || (t && i !== r)) && f((r = i));
		});
	}
	return { notify: s, set: l, subscribe: o };
}
function Tt() {
	const { set: n, subscribe: e } = pe(!1),
		t = '1652867804629';
	let s;
	async function l() {
		clearTimeout(s);
		const f = await fetch(`${tt}/_app/version.json`, {
			headers: { pragma: 'no-cache', 'cache-control': 'no-cache' }
		});
		if (f.ok) {
			const { version: r } = await f.json(),
				i = r !== t;
			return i && (n(!0), clearTimeout(s)), i;
		} else throw new Error(`Version check failed: ${f.status}`);
	}
	return { subscribe: e, check: l };
}
function Ct(n, e) {
	let s = `script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(
		typeof n == 'string' ? n : n.url
	)}]`;
	e && typeof e.body == 'string' && (s += `[sveltekit\\:data-body="${It(e.body)}"]`);
	const l = document.querySelector(s);
	if (l && l.textContent) {
		const o = JSON.parse(l.textContent),
			{ body: f } = o,
			r = ze(o, ['body']);
		return Promise.resolve(new Response(f, r));
	}
	return fetch(n, e);
}
const jt = /^(\.\.\.)?(\w+)(?:=(\w+))?$/;
function Dt(n) {
	const e = [],
		t = [];
	let s = !0;
	return {
		pattern:
			n === ''
				? /^\/$/
				: new RegExp(
						`^${decodeURIComponent(n)
							.split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/)
							.map((o, f, r) => {
								const i = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);
								if (i) return e.push(i[1]), t.push(i[2]), '(?:/(.*))?';
								const a = f === r.length - 1;
								return (
									o &&
									'/' +
										o
											.split(/\[(.+?)\]/)
											.map((d, R) => {
												if (R % 2) {
													const [, y, H, G] = jt.exec(d);
													return e.push(H), t.push(G), y ? '(.*?)' : '([^/]+?)';
												}
												return (
													a && d.includes('.') && (s = !1),
													d
														.normalize()
														.replace(/%5[Bb]/g, '[')
														.replace(/%5[Dd]/g, ']')
														.replace(/#/g, '%23')
														.replace(/\?/g, '%3F')
														.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
												);
											})
											.join('')
								);
							})
							.join('')}${s ? '/?' : ''}$`
				  ),
		names: e,
		types: t
	};
}
function Vt(n, e, t, s) {
	const l = {};
	for (let o = 0; o < e.length; o += 1) {
		const f = e[o],
			r = t[o],
			i = n[o + 1] || '';
		if (r) {
			const a = s[r];
			if (!a) throw new Error(`Missing "${r}" param matcher`);
			if (!a(i)) return;
		}
		l[f] = i;
	}
	return l;
}
function qt(n, e, t) {
	return Object.entries(e).map(([l, [o, f, r]]) => {
		const { pattern: i, names: a, types: d } = Dt(l);
		return {
			id: l,
			exec: (R) => {
				const y = i.exec(R);
				if (y) return Vt(y, a, d, t);
			},
			a: o.map((R) => n[R]),
			b: f.map((R) => n[R]),
			has_shadow: !!r
		};
	});
}
const nt = 'sveltekit:scroll',
	W = 'sveltekit:index',
	$e = qt(Se, Pt, Nt),
	zt = Se[0](),
	Jt = Se[1](),
	Qe = {};
let ie = {};
try {
	ie = JSON.parse(sessionStorage[nt]);
} catch {}
function ke(n) {
	ie[n] = Re();
}
function Kt({ target: n, session: e, base: t, trailing_slash: s }) {
	var Ce;
	const l = new Map(),
		o = [],
		f = { url: He({}), page: He({}), navigating: pe(null), session: pe(e), updated: Tt() },
		r = { id: null, promise: null },
		i = { before_navigate: [], after_navigate: [] };
	let a = { branch: [], error: null, session_id: 0, stuff: Qe, url: null },
		d = !1,
		R = !0,
		y = !1,
		H = 1,
		G = null,
		Le,
		Ue,
		Ae = !1;
	f.session.subscribe(async (c) => {
		(Ue = c), Ae && ((H += 1), ge(new URL(location.href), [], !0));
	}),
		(Ae = !0);
	let X = !0,
		j = (Ce = history.state) == null ? void 0 : Ce[W];
	j ||
		((j = Date.now()),
		history.replaceState(re(x({}, history.state), { [W]: j }), '', location.href));
	const he = ie[j];
	he && ((history.scrollRestoration = 'manual'), scrollTo(he.x, he.y));
	let _e = !1,
		me,
		Oe;
	async function Ne(
		c,
		{ noscroll: p = !1, replaceState: w = !1, keepfocus: u = !1, state: h = {} },
		b
	) {
		const _ = new URL(c, Ge(document));
		if (X)
			return be({
				url: _,
				scroll: p ? Re() : null,
				keepfocus: u,
				redirect_chain: b,
				details: { state: h, replaceState: w },
				accepted: () => {},
				blocked: () => {}
			});
		await te(_);
	}
	async function Pe(c) {
		const p = Te(c);
		if (!p) throw new Error('Attempted to prefetch a URL that does not belong to this app');
		return (r.promise = Ie(p, !1)), (r.id = p.id), r.promise;
	}
	async function ge(c, p, w, u) {
		var g, $, S;
		const h = Te(c),
			b = (Oe = {});
		let _ = h && (await Ie(h, w));
		if (
			(!_ &&
				c.origin === location.origin &&
				c.pathname === location.pathname &&
				(_ = await ee({
					status: 404,
					error: new Error(`Not found: ${c.pathname}`),
					url: c,
					routeId: null
				})),
			!_)
		)
			return await te(c), !1;
		if (Oe !== b) return !1;
		if (((o.length = 0), _.redirect))
			if (p.length > 10 || p.includes(c.pathname))
				_ = await ee({ status: 500, error: new Error('Redirect loop'), url: c, routeId: null });
			else
				return (
					X
						? Ne(new URL(_.redirect, c).href, {}, [...p, c.pathname])
						: await te(new URL(_.redirect, location.href)),
					!1
				);
		else
			(($ = (g = _.props) == null ? void 0 : g.page) == null ? void 0 : $.status) >= 400 &&
				(await f.updated.check()) &&
				(await te(c));
		if (((y = !0), u && u.details)) {
			const { details: k } = u,
				E = k.replaceState ? 0 : 1;
			(k.state[W] = j += E), history[k.replaceState ? 'replaceState' : 'pushState'](k.state, '', c);
		}
		if ((d ? ((a = _.state), Le.$set(_.props)) : xe(_), u)) {
			const { scroll: k, keepfocus: E } = u;
			if (!E) {
				const m = document.body,
					A = m.getAttribute('tabindex');
				(S = getSelection()) == null || S.removeAllRanges(),
					(m.tabIndex = -1),
					m.focus({ preventScroll: !0 }),
					A !== null ? m.setAttribute('tabindex', A) : m.removeAttribute('tabindex');
			}
			if ((await Je(), R)) {
				const m = c.hash && document.getElementById(c.hash.slice(1));
				k ? scrollTo(k.x, k.y) : m ? m.scrollIntoView() : scrollTo(0, 0);
			}
		} else await Je();
		(r.promise = null), (r.id = null), (R = !0), (y = !1), _.props.page && (me = _.props.page);
		const v = _.state.branch[_.state.branch.length - 1];
		return (X = (v == null ? void 0 : v.module.router) !== !1), !0;
	}
	function xe(c) {
		a = c.state;
		const p = document.querySelector('style[data-sveltekit]');
		if (
			(p && p.remove(),
			(me = c.props.page),
			(Le = new Ut({ target: n, props: re(x({}, c.props), { stores: f }), hydrate: !0 })),
			(d = !0),
			X)
		) {
			const w = { from: null, to: new URL(location.href) };
			i.after_navigate.forEach((u) => u(w));
		}
	}
	async function we({ url: c, params: p, stuff: w, branch: u, status: h, error: b, routeId: _ }) {
		var m, A;
		const v = u.filter(Boolean),
			g = v.find((U) => {
				var N;
				return (N = U.loaded) == null ? void 0 : N.redirect;
			}),
			$ = {
				redirect: (m = g == null ? void 0 : g.loaded) == null ? void 0 : m.redirect,
				state: { url: c, params: p, branch: u, error: b, stuff: w, session_id: H },
				props: { components: v.map((U) => U.module.default) }
			};
		for (let U = 0; U < v.length; U += 1) {
			const N = v[U].loaded;
			$.props[`props_${U}`] = N ? await N.props : null;
		}
		if (!a.url || c.href !== a.url.href || a.error !== b || a.stuff !== w) {
			$.props.page = { error: b, params: p, routeId: _, status: h, stuff: w, url: c };
			const U = (N, L) => {
				Object.defineProperty($.props.page, N, {
					get: () => {
						throw new Error(`$page.${N} has been replaced by $page.url.${L}`);
					}
				});
			};
			U('origin', 'origin'), U('path', 'pathname'), U('query', 'searchParams');
		}
		const k = v[v.length - 1],
			E = (A = k == null ? void 0 : k.loaded) == null ? void 0 : A.cache;
		if (E) {
			const U = c.pathname + c.search;
			let N = !1;
			const L = () => {
					l.get(U) === $ && l.delete(U), P(), clearTimeout(O);
				},
				O = setTimeout(L, E.maxage * 1e3),
				P = f.session.subscribe(() => {
					N && L();
				});
			(N = !0), l.set(U, $);
		}
		return $;
	}
	async function Q({
		status: c,
		error: p,
		module: w,
		url: u,
		params: h,
		stuff: b,
		props: _,
		routeId: v
	}) {
		const g = {
			module: w,
			uses: { params: new Set(), url: !1, session: !1, stuff: !1, dependencies: new Set() },
			loaded: null,
			stuff: b
		};
		function $(E) {
			const { href: m } = new URL(E, u);
			g.uses.dependencies.add(m);
		}
		_ && g.uses.dependencies.add(u.href);
		const S = {};
		for (const E in h)
			Object.defineProperty(S, E, {
				get() {
					return g.uses.params.add(E), h[E];
				},
				enumerable: !0
			});
		const k = Ue;
		if (w.load) {
			const E = {
					routeId: v,
					params: S,
					props: _ || {},
					get url() {
						return (g.uses.url = !0), u;
					},
					get session() {
						return (g.uses.session = !0), k;
					},
					get stuff() {
						return (g.uses.stuff = !0), x({}, b);
					},
					fetch(A, U) {
						const N = typeof A == 'string' ? A : A.url;
						return $(N), d ? fetch(A, U) : Ct(A, U);
					},
					status: c != null ? c : null,
					error: p != null ? p : null
				},
				m = await w.load.call(null, E);
			if (!m) throw new Error('load function must return a value');
			(g.loaded = Fe(m)),
				g.loaded.stuff && (g.stuff = g.loaded.stuff),
				g.loaded.dependencies && g.loaded.dependencies.forEach($);
		} else _ && (g.loaded = Fe({ props: _ }));
		return g;
	}
	async function Ie({ id: c, url: p, params: w, route: u }, h) {
		var A, U, N;
		if (r.id === c && r.promise) return r.promise;
		if (!h) {
			const L = l.get(c);
			if (L) return L;
		}
		const { a: b, b: _, has_shadow: v } = u,
			g = a.url && {
				url: c !== a.url.pathname + a.url.search,
				params: Object.keys(w).filter((L) => a.params[L] !== w[L]),
				session: H !== a.session_id
			};
		let $ = [],
			S = Qe,
			k = !1,
			E = 200,
			m = null;
		b.forEach((L) => L().catch(() => {}));
		e: for (let L = 0; L < b.length; L += 1) {
			let O;
			try {
				if (!b[L]) continue;
				const P = await b[L](),
					D = a.branch[L];
				if (
					!D ||
					P !== D.module ||
					(g.url && D.uses.url) ||
					g.params.some((Y) => D.uses.params.has(Y)) ||
					(g.session && D.uses.session) ||
					Array.from(D.uses.dependencies).some((Y) => o.some((ue) => ue(Y))) ||
					(k && D.uses.stuff)
				) {
					let Y = {};
					const ue = v && L === b.length - 1;
					if (ue) {
						const ne = await fetch(
							`${p.pathname}${p.pathname.endsWith('/') ? '' : '/'}__data.json${p.search}`,
							{ headers: { 'x-sveltekit-load': 'true' } }
						);
						if (ne.ok) {
							const je = ne.headers.get('x-sveltekit-location');
							if (je) return { redirect: je, props: {}, state: a };
							Y = ne.status === 204 ? {} : await ne.json();
						} else (E = ne.status), (m = new Error('Failed to load data'));
					}
					if (
						(m ||
							(O = await Q({ module: P, url: p, params: w, props: Y, stuff: S, routeId: u.id })),
						O && (ue && (O.uses.url = !0), O.loaded))
					) {
						if (
							(O.loaded.error && ((E = O.loaded.status), (m = O.loaded.error)), O.loaded.redirect)
						)
							return { redirect: O.loaded.redirect, props: {}, state: a };
						O.loaded.stuff && (k = !0);
					}
				} else O = D;
			} catch (P) {
				(E = 500), (m = Me(P));
			}
			if (m) {
				for (; L--; )
					if (_[L]) {
						let P,
							D,
							fe = L;
						for (; !(D = $[fe]); ) fe -= 1;
						try {
							if (
								((P = await Q({
									status: E,
									error: m,
									module: await _[L](),
									url: p,
									params: w,
									stuff: D.stuff,
									routeId: u.id
								})),
								(A = P == null ? void 0 : P.loaded) != null && A.error)
							)
								continue;
							(U = P == null ? void 0 : P.loaded) != null &&
								U.stuff &&
								(S = x(x({}, S), P.loaded.stuff)),
								($ = $.slice(0, fe + 1).concat(P));
							break e;
						} catch {
							continue;
						}
					}
				return await ee({ status: E, error: m, url: p, routeId: u.id });
			} else
				(N = O == null ? void 0 : O.loaded) != null && N.stuff && (S = x(x({}, S), O.loaded.stuff)),
					$.push(O);
		}
		return await we({ url: p, params: w, stuff: S, branch: $, status: E, error: m, routeId: u.id });
	}
	async function ee({ status: c, error: p, url: w, routeId: u }) {
		var v, g;
		const h = {},
			b = await Q({ module: await zt, url: w, params: h, stuff: {}, routeId: u }),
			_ = await Q({
				status: c,
				error: p,
				module: await Jt,
				url: w,
				params: h,
				stuff: (b && b.loaded && b.loaded.stuff) || {},
				routeId: u
			});
		return await we({
			url: w,
			params: h,
			stuff: x(
				x({}, (v = b == null ? void 0 : b.loaded) == null ? void 0 : v.stuff),
				(g = _ == null ? void 0 : _.loaded) == null ? void 0 : g.stuff
			),
			branch: [b, _],
			status: c,
			error: p,
			routeId: u
		});
	}
	function Te(c) {
		if (c.origin !== location.origin || !c.pathname.startsWith(t)) return;
		const p = decodeURI(c.pathname.slice(t.length) || '/');
		for (const w of $e) {
			const u = w.exec(p);
			if (u) return { id: c.pathname + c.search, route: w, params: u, url: c };
		}
	}
	async function be({
		url: c,
		scroll: p,
		keepfocus: w,
		redirect_chain: u,
		details: h,
		accepted: b,
		blocked: _
	}) {
		const v = a.url;
		let g = !1;
		const $ = { from: v, to: c, cancel: () => (g = !0) };
		if ((i.before_navigate.forEach((m) => m($)), g)) {
			_();
			return;
		}
		const S = xt(c.pathname, s),
			k = new URL(c.origin + S + c.search + c.hash);
		if (
			(ke(j),
			b(),
			d && f.navigating.set({ from: a.url, to: k }),
			await ge(k, u, !1, { scroll: p, keepfocus: w, details: h }))
		) {
			const m = { from: v, to: k };
			i.after_navigate.forEach((A) => A(m)), f.navigating.set(null);
		}
	}
	function te(c) {
		return (location.href = c.href), new Promise(() => {});
	}
	return {
		after_navigate: (c) => {
			Ee(
				() => (
					i.after_navigate.push(c),
					() => {
						const p = i.after_navigate.indexOf(c);
						i.after_navigate.splice(p, 1);
					}
				)
			);
		},
		before_navigate: (c) => {
			Ee(
				() => (
					i.before_navigate.push(c),
					() => {
						const p = i.before_navigate.indexOf(c);
						i.before_navigate.splice(p, 1);
					}
				)
			);
		},
		disable_scroll_handling: () => {
			(y || !d) && (R = !1);
		},
		goto: (c, p = {}) => Ne(c, p, []),
		invalidate: (c) => {
			if (typeof c == 'function') o.push(c);
			else {
				const { href: p } = new URL(c, location.href);
				o.push((w) => w === p);
			}
			return (
				G ||
					(G = Promise.resolve().then(async () => {
						await ge(new URL(location.href), [], !0), (G = null);
					})),
				G
			);
		},
		prefetch: async (c) => {
			const p = new URL(c, Ge(document));
			await Pe(p);
		},
		prefetch_routes: async (c) => {
			const w = (c ? $e.filter((u) => c.some((h) => u.exec(h))) : $e).map((u) =>
				Promise.all(u.a.map((h) => h()))
			);
			await Promise.all(w);
		},
		_start_router: () => {
			(history.scrollRestoration = 'manual'),
				addEventListener('beforeunload', (u) => {
					let h = !1;
					const b = { from: a.url, to: null, cancel: () => (h = !0) };
					i.before_navigate.forEach((_) => _(b)),
						h ? (u.preventDefault(), (u.returnValue = '')) : (history.scrollRestoration = 'auto');
				}),
				addEventListener('visibilitychange', () => {
					if (document.visibilityState === 'hidden') {
						ke(j);
						try {
							sessionStorage[nt] = JSON.stringify(ie);
						} catch {}
					}
				});
			const c = (u) => {
				const h = Xe(u);
				h && h.href && h.hasAttribute('sveltekit:prefetch') && Pe(Ze(h));
			};
			let p;
			const w = (u) => {
				clearTimeout(p),
					(p = setTimeout(() => {
						var h;
						(h = u.target) == null ||
							h.dispatchEvent(new CustomEvent('sveltekit:trigger_prefetch', { bubbles: !0 }));
					}, 20));
			};
			addEventListener('touchstart', c),
				addEventListener('mousemove', w),
				addEventListener('sveltekit:trigger_prefetch', c),
				addEventListener('click', (u) => {
					if (
						!X ||
						u.button ||
						u.which !== 1 ||
						u.metaKey ||
						u.ctrlKey ||
						u.shiftKey ||
						u.altKey ||
						u.defaultPrevented
					)
						return;
					const h = Xe(u);
					if (!h || !h.href) return;
					const b = h instanceof SVGAElement,
						_ = Ze(h);
					if (!b && _.origin === 'null') return;
					const v = (h.getAttribute('rel') || '').split(/\s+/);
					if (
						h.hasAttribute('download') ||
						v.includes('external') ||
						h.hasAttribute('sveltekit:reload') ||
						(b ? h.target.baseVal : h.target)
					)
						return;
					const [g, $] = _.href.split('#');
					if ($ !== void 0 && g === location.href.split('#')[0]) {
						(_e = !0), ke(j), f.page.set(re(x({}, me), { url: _ })), f.page.notify();
						return;
					}
					be({
						url: _,
						scroll: h.hasAttribute('sveltekit:noscroll') ? Re() : null,
						keepfocus: !1,
						redirect_chain: [],
						details: { state: {}, replaceState: _.href === location.href },
						accepted: () => u.preventDefault(),
						blocked: () => u.preventDefault()
					});
				}),
				addEventListener('popstate', (u) => {
					if (u.state && X) {
						if (u.state[W] === j) return;
						be({
							url: new URL(location.href),
							scroll: ie[u.state[W]],
							keepfocus: !1,
							redirect_chain: [],
							details: null,
							accepted: () => {
								j = u.state[W];
							},
							blocked: () => {
								const h = j - u.state[W];
								history.go(h);
							}
						});
					}
				}),
				addEventListener('hashchange', () => {
					_e &&
						((_e = !1),
						history.replaceState(re(x({}, history.state), { [W]: ++j }), '', location.href));
				});
		},
		_hydrate: async ({ status: c, error: p, nodes: w, params: u, routeId: h }) => {
			const b = new URL(location.href),
				_ = [];
			let v = {},
				g,
				$;
			try {
				for (let S = 0; S < w.length; S += 1) {
					const k = S === w.length - 1;
					let E;
					if (k) {
						const A = document.querySelector('script[sveltekit\\:data-type="props"]');
						A && (E = JSON.parse(A.textContent));
					}
					const m = await Q({
						module: await w[S],
						url: b,
						params: u,
						stuff: v,
						status: k ? c : void 0,
						error: k ? p : void 0,
						props: E,
						routeId: h
					});
					if ((E && (m.uses.dependencies.add(b.href), (m.uses.url = !0)), _.push(m), m && m.loaded))
						if (m.loaded.error) {
							if (p) throw m.loaded.error;
							$ = { status: m.loaded.status, error: m.loaded.error, url: b, routeId: h };
						} else m.loaded.stuff && (v = x(x({}, v), m.loaded.stuff));
				}
				g = $
					? await ee($)
					: await we({ url: b, params: u, stuff: v, branch: _, status: c, error: p, routeId: h });
			} catch (S) {
				if (p) throw S;
				g = await ee({ status: 500, error: Me(S), url: b, routeId: h });
			}
			g.redirect && (await te(new URL(g.redirect, location.href))), xe(g);
		}
	};
}
async function Mt({
	paths: n,
	target: e,
	session: t,
	route: s,
	spa: l,
	trailing_slash: o,
	hydrate: f
}) {
	const r = Kt({ target: e, session: t, base: n.base, trailing_slash: o });
	wt({ client: r }),
		bt(n),
		f && (await r._hydrate(f)),
		s && (l && r.goto(location.href, { replaceState: !0 }), r._start_router()),
		dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { Mt as start };
