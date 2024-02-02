import {
	s as S,
	n as M,
	i as le,
	c as H,
	d as I,
	e as O,
	f as P,
	u as z,
	g as F,
	h as U,
	j as ae,
	k as B
} from '../chunks/scheduler.ae1baad1.js'
import {
	S as w,
	i as C,
	g as h,
	m as j,
	h as p,
	j as v,
	n as D,
	f,
	k as g,
	a as T,
	x as $,
	r as y,
	u as k,
	v as E,
	d as m,
	t as d,
	w as N,
	y as re,
	p as Z,
	b as G,
	s as A,
	c as V,
	z as J,
	A as L,
	e as R
} from '../chunks/index.0e1198e2.js'
import { t as K } from '../chunks/config.f4ded0b2.js'
import { I as Q, g as W, a as X } from '../chunks/Icon.c2880df6.js'
import { w as oe } from '../chunks/index.648b4cba.js'
const ce = !0
async function ie({ url: r }) {
	return { url: r.pathname }
}
const Re = Object.freeze(
	Object.defineProperty({ __proto__: null, load: ie, prerender: ce }, Symbol.toStringTag, {
		value: 'Module'
	})
)
function ue(r) {
	let e,
		l,
		s = K + '',
		t,
		n,
		a = new Date().getFullYear() + '',
		o
	return {
		c() {
			;(e = h('footer')), (l = h('p')), (t = j(s)), (n = j(' © ')), (o = j(a)), this.h()
		},
		l(i) {
			e = p(i, 'FOOTER', { class: !0 })
			var c = v(e)
			l = p(c, 'P', { class: !0 })
			var u = v(l)
			;(t = D(u, s)), (n = D(u, ' © ')), (o = D(u, a)), u.forEach(f), c.forEach(f), this.h()
		},
		h() {
			g(l, 'class', 'svelte-k2ae0s'), g(e, 'class', 'svelte-k2ae0s')
		},
		m(i, c) {
			T(i, e, c), $(e, l), $(l, t), $(l, n), $(l, o)
		},
		p: M,
		i: M,
		o: M,
		d(i) {
			i && f(e)
		}
	}
}
class fe extends w {
	constructor(e) {
		super(), C(this, e, null, ue, S, {})
	}
}
function _e(r) {
	const e = r - 1
	return e * e * e + 1
}
function me(r, { delay: e = 0, duration: l = 400, easing: s = le } = {}) {
	const t = +getComputedStyle(r).opacity
	return { delay: e, duration: l, easing: s, css: (n) => `opacity: ${n * t}` }
}
function x(
	r,
	{ delay: e = 0, duration: l = 400, easing: s = _e, x: t = 0, y: n = 0, opacity: a = 0 } = {}
) {
	const o = getComputedStyle(r),
		i = +o.opacity,
		c = o.transform === 'none' ? '' : o.transform,
		u = i * (1 - a),
		[_, b] = H(t),
		[te, ne] = H(n)
	return {
		delay: e,
		duration: l,
		easing: s,
		css: (q, se) => `
			transform: ${c} translate(${(1 - q) * _}${b}, ${(1 - q) * te}${ne});
			opacity: ${i - u * se}`
	}
}
function de(r) {
	let e
	const l = r[2].default,
		s = P(l, r, r[3], null)
	return {
		c() {
			s && s.c()
		},
		l(t) {
			s && s.l(t)
		},
		m(t, n) {
			s && s.m(t, n), (e = !0)
		},
		p(t, n) {
			s && s.p && (!e || n & 8) && z(s, l, t, t[3], e ? U(l, t[3], n, null) : F(t[3]), null)
		},
		i(t) {
			e || (m(s, t), (e = !0))
		},
		o(t) {
			d(s, t), (e = !1)
		},
		d(t) {
			s && s.d(t)
		}
	}
}
function $e(r) {
	let e, l
	const s = [{ name: 'moon' }, r[1], { iconNode: r[0] }]
	let t = { $$slots: { default: [de] }, $$scope: { ctx: r } }
	for (let n = 0; n < s.length; n += 1) t = I(t, s[n])
	return (
		(e = new Q({ props: t })),
		{
			c() {
				y(e.$$.fragment)
			},
			l(n) {
				k(e.$$.fragment, n)
			},
			m(n, a) {
				E(e, n, a), (l = !0)
			},
			p(n, [a]) {
				const o = a & 3 ? W(s, [s[0], a & 2 && X(n[1]), a & 1 && { iconNode: n[0] }]) : {}
				a & 8 && (o.$$scope = { dirty: a, ctx: n }), e.$set(o)
			},
			i(n) {
				l || (m(e.$$.fragment, n), (l = !0))
			},
			o(n) {
				d(e.$$.fragment, n), (l = !1)
			},
			d(n) {
				N(e, n)
			}
		}
	)
}
function he(r, e, l) {
	let { $$slots: s = {}, $$scope: t } = e
	const n = [['path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' }]]
	return (
		(r.$$set = (a) => {
			l(1, (e = I(I({}, e), O(a)))), '$$scope' in a && l(3, (t = a.$$scope))
		}),
		(e = O(e)),
		[n, e, s, t]
	)
}
class pe extends w {
	constructor(e) {
		super(), C(this, e, he, $e, S, {})
	}
}
const ge = pe
function ve(r) {
	let e
	const l = r[2].default,
		s = P(l, r, r[3], null)
	return {
		c() {
			s && s.c()
		},
		l(t) {
			s && s.l(t)
		},
		m(t, n) {
			s && s.m(t, n), (e = !0)
		},
		p(t, n) {
			s && s.p && (!e || n & 8) && z(s, l, t, t[3], e ? U(l, t[3], n, null) : F(t[3]), null)
		},
		i(t) {
			e || (m(s, t), (e = !0))
		},
		o(t) {
			d(s, t), (e = !1)
		},
		d(t) {
			s && s.d(t)
		}
	}
}
function be(r) {
	let e, l
	const s = [{ name: 'sun' }, r[1], { iconNode: r[0] }]
	let t = { $$slots: { default: [ve] }, $$scope: { ctx: r } }
	for (let n = 0; n < s.length; n += 1) t = I(t, s[n])
	return (
		(e = new Q({ props: t })),
		{
			c() {
				y(e.$$.fragment)
			},
			l(n) {
				k(e.$$.fragment, n)
			},
			m(n, a) {
				E(e, n, a), (l = !0)
			},
			p(n, [a]) {
				const o = a & 3 ? W(s, [s[0], a & 2 && X(n[1]), a & 1 && { iconNode: n[0] }]) : {}
				a & 8 && (o.$$scope = { dirty: a, ctx: n }), e.$set(o)
			},
			i(n) {
				l || (m(e.$$.fragment, n), (l = !0))
			},
			o(n) {
				d(e.$$.fragment, n), (l = !1)
			},
			d(n) {
				N(e, n)
			}
		}
	)
}
function ye(r, e, l) {
	let { $$slots: s = {}, $$scope: t } = e
	const n = [
		['circle', { cx: '12', cy: '12', r: '4' }],
		['path', { d: 'M12 2v2' }],
		['path', { d: 'M12 20v2' }],
		['path', { d: 'm4.93 4.93 1.41 1.41' }],
		['path', { d: 'm17.66 17.66 1.41 1.41' }],
		['path', { d: 'M2 12h2' }],
		['path', { d: 'M20 12h2' }],
		['path', { d: 'm6.34 17.66-1.41 1.41' }],
		['path', { d: 'm19.07 4.93-1.41 1.41' }]
	]
	return (
		(r.$$set = (a) => {
			l(1, (e = I(I({}, e), O(a)))), '$$scope' in a && l(3, (t = a.$$scope))
		}),
		(e = O(e)),
		[n, e, s, t]
	)
}
class ke extends w {
	constructor(e) {
		super(), C(this, e, ye, be, S, {})
	}
}
const Ee = ke,
	Ne = localStorage.getItem('color-scheme'),
	ee = oe(Ne ?? 'dark')
function Se() {
	ee.update((r) => {
		const e = r === 'dark' ? 'light' : 'dark'
		return (
			document.documentElement.setAttribute('color-scheme', e),
			localStorage.setItem('color-scheme', e),
			e
		)
	})
}
function Te(r) {
	let e,
		l,
		s,
		t,
		n = 'Dark',
		a,
		o
	return (
		(l = new ge({})),
		{
			c() {
				;(e = h('div')),
					y(l.$$.fragment),
					(s = A()),
					(t = h('span')),
					(t.textContent = n),
					this.h()
			},
			l(i) {
				e = p(i, 'DIV', { class: !0 })
				var c = v(e)
				k(l.$$.fragment, c),
					(s = V(c)),
					(t = p(c, 'SPAN', { 'data-svelte-h': !0 })),
					J(t) !== 'svelte-397x2m' && (t.textContent = n),
					c.forEach(f),
					this.h()
			},
			h() {
				g(e, 'class', 'svelte-114mtci')
			},
			m(i, c) {
				T(i, e, c), E(l, e, null), $(e, s), $(e, t), (o = !0)
			},
			i(i) {
				o ||
					(m(l.$$.fragment, i),
					i &&
						(a ||
							B(() => {
								;(a = L(e, x, { y: -10 })), a.start()
							})),
					(o = !0))
			},
			o(i) {
				d(l.$$.fragment, i), (o = !1)
			},
			d(i) {
				i && f(e), N(l)
			}
		}
	)
}
function we(r) {
	let e,
		l,
		s,
		t,
		n = 'Light',
		a,
		o
	return (
		(l = new Ee({})),
		{
			c() {
				;(e = h('div')),
					y(l.$$.fragment),
					(s = A()),
					(t = h('span')),
					(t.textContent = n),
					this.h()
			},
			l(i) {
				e = p(i, 'DIV', { class: !0 })
				var c = v(e)
				k(l.$$.fragment, c),
					(s = V(c)),
					(t = p(c, 'SPAN', { 'data-svelte-h': !0 })),
					J(t) !== 'svelte-30gjga' && (t.textContent = n),
					c.forEach(f),
					this.h()
			},
			h() {
				g(e, 'class', 'svelte-114mtci')
			},
			m(i, c) {
				T(i, e, c), E(l, e, null), $(e, s), $(e, t), (o = !0)
			},
			i(i) {
				o ||
					(m(l.$$.fragment, i),
					i &&
						(a ||
							B(() => {
								;(a = L(e, x, { y: 10 })), a.start()
							})),
					(o = !0))
			},
			o(i) {
				d(l.$$.fragment, i), (o = !1)
			},
			d(i) {
				i && f(e), N(l)
			}
		}
	)
}
function Ce(r) {
	let e, l, s, t, n, a
	const o = [we, Te],
		i = []
	function c(u, _) {
		return u[0] === 'dark' ? 0 : 1
	}
	return (
		(l = c(r)),
		(s = i[l] = o[l](r)),
		{
			c() {
				;(e = h('button')), s.c(), this.h()
			},
			l(u) {
				e = p(u, 'BUTTON', { 'aria-label': !0, class: !0 })
				var _ = v(e)
				s.l(_), _.forEach(f), this.h()
			},
			h() {
				g(e, 'aria-label', 'Toggle theme'), g(e, 'class', 'svelte-114mtci')
			},
			m(u, _) {
				T(u, e, _), i[l].m(e, null), (t = !0), n || ((a = re(e, 'click', Se)), (n = !0))
			},
			p(u, [_]) {
				let b = l
				;(l = c(u)),
					l !== b &&
						(Z(),
						d(i[b], 1, 1, () => {
							i[b] = null
						}),
						G(),
						(s = i[l]),
						s || ((s = i[l] = o[l](u)), s.c()),
						m(s, 1),
						s.m(e, null))
			},
			i(u) {
				t || (m(s), (t = !0))
			},
			o(u) {
				d(s), (t = !1)
			},
			d(u) {
				u && f(e), i[l].d(), (n = !1), a()
			}
		}
	)
}
function Ie(r, e, l) {
	let s
	return ae(r, ee, (t) => l(0, (s = t))), [s]
}
class Me extends w {
	constructor(e) {
		super(), C(this, e, Ie, Ce, S, {})
	}
}
function Ae(r) {
	let e,
		l,
		s,
		t = K + '',
		n,
		a,
		o,
		i
	return (
		(o = new Me({})),
		{
			c() {
				;(e = h('nav')),
					(l = h('a')),
					(s = h('b')),
					(n = j(t)),
					(a = A()),
					y(o.$$.fragment),
					this.h()
			},
			l(c) {
				e = p(c, 'NAV', { class: !0 })
				var u = v(e)
				l = p(u, 'A', { href: !0, class: !0 })
				var _ = v(l)
				s = p(_, 'B', {})
				var b = v(s)
				;(n = D(b, t)),
					b.forEach(f),
					_.forEach(f),
					(a = V(u)),
					k(o.$$.fragment, u),
					u.forEach(f),
					this.h()
			},
			h() {
				g(l, 'href', '/'),
					g(l, 'class', 'title svelte-bs11bt'),
					g(e, 'class', 'svelte-bs11bt')
			},
			m(c, u) {
				T(c, e, u), $(e, l), $(l, s), $(s, n), $(e, a), E(o, e, null), (i = !0)
			},
			p: M,
			i(c) {
				i || (m(o.$$.fragment, c), (i = !0))
			},
			o(c) {
				d(o.$$.fragment, c), (i = !1)
			},
			d(c) {
				c && f(e), N(o)
			}
		}
	)
}
class Ve extends w {
	constructor(e) {
		super(), C(this, e, null, Ae, S, {})
	}
}
function Y(r) {
	let e, l, s
	const t = r[2].default,
		n = P(t, r, r[1], null)
	return {
		c() {
			;(e = h('div')), n && n.c(), this.h()
		},
		l(a) {
			e = p(a, 'DIV', { class: !0 })
			var o = v(e)
			n && n.l(o), o.forEach(f), this.h()
		},
		h() {
			g(e, 'class', 'transition svelte-vcdv4c')
		},
		m(a, o) {
			T(a, e, o), n && n.m(e, null), (s = !0)
		},
		p(a, o) {
			n && n.p && (!s || o & 2) && z(n, t, a, a[1], s ? U(t, a[1], o, null) : F(a[1]), null)
		},
		i(a) {
			s ||
				(m(n, a),
				a &&
					(l ||
						B(() => {
							;(l = L(e, me, {})), l.start()
						})),
				(s = !0))
		},
		o(a) {
			d(n, a), (s = !1)
		},
		d(a) {
			a && f(e), n && n.d(a)
		}
	}
}
function je(r) {
	let e = r[0],
		l,
		s,
		t = Y(r)
	return {
		c() {
			t.c(), (l = R())
		},
		l(n) {
			t.l(n), (l = R())
		},
		m(n, a) {
			t.m(n, a), T(n, l, a), (s = !0)
		},
		p(n, [a]) {
			a & 1 && S(e, (e = n[0]))
				? (Z(), d(t, 1, 1, M), G(), (t = Y(n)), t.c(), m(t, 1), t.m(l.parentNode, l))
				: t.p(n, a)
		},
		i(n) {
			s || (m(t), (s = !0))
		},
		o(n) {
			d(t), (s = !1)
		},
		d(n) {
			n && f(l), t.d(n)
		}
	}
}
function De(r, e, l) {
	let { $$slots: s = {}, $$scope: t } = e,
		{ url: n } = e
	return (
		(r.$$set = (a) => {
			'url' in a && l(0, (n = a.url)), '$$scope' in a && l(1, (t = a.$$scope))
		}),
		[n, t, s]
	)
}
class Oe extends w {
	constructor(e) {
		super(), C(this, e, De, je, S, { url: 0 })
	}
}
function Pe(r) {
	let e
	const l = r[1].default,
		s = P(l, r, r[2], null)
	return {
		c() {
			s && s.c()
		},
		l(t) {
			s && s.l(t)
		},
		m(t, n) {
			s && s.m(t, n), (e = !0)
		},
		p(t, n) {
			s && s.p && (!e || n & 4) && z(s, l, t, t[2], e ? U(l, t[2], n, null) : F(t[2]), null)
		},
		i(t) {
			e || (m(s, t), (e = !0))
		},
		o(t) {
			d(s, t), (e = !1)
		},
		d(t) {
			s && s.d(t)
		}
	}
}
function ze(r) {
	let e, l, s, t, n, a, o, i
	return (
		(l = new Ve({})),
		(n = new Oe({ props: { url: r[0].url, $$slots: { default: [Pe] }, $$scope: { ctx: r } } })),
		(o = new fe({})),
		{
			c() {
				;(e = h('div')),
					y(l.$$.fragment),
					(s = A()),
					(t = h('main')),
					y(n.$$.fragment),
					(a = A()),
					y(o.$$.fragment),
					this.h()
			},
			l(c) {
				e = p(c, 'DIV', { class: !0 })
				var u = v(e)
				k(l.$$.fragment, u), (s = V(u)), (t = p(u, 'MAIN', { class: !0 }))
				var _ = v(t)
				k(n.$$.fragment, _),
					_.forEach(f),
					(a = V(u)),
					k(o.$$.fragment, u),
					u.forEach(f),
					this.h()
			},
			h() {
				g(t, 'class', 'svelte-sdkn5t'), g(e, 'class', 'layout svelte-sdkn5t')
			},
			m(c, u) {
				T(c, e, u),
					E(l, e, null),
					$(e, s),
					$(e, t),
					E(n, t, null),
					$(e, a),
					E(o, e, null),
					(i = !0)
			},
			p(c, [u]) {
				const _ = {}
				u & 1 && (_.url = c[0].url), u & 4 && (_.$$scope = { dirty: u, ctx: c }), n.$set(_)
			},
			i(c) {
				i || (m(l.$$.fragment, c), m(n.$$.fragment, c), m(o.$$.fragment, c), (i = !0))
			},
			o(c) {
				d(l.$$.fragment, c), d(n.$$.fragment, c), d(o.$$.fragment, c), (i = !1)
			},
			d(c) {
				c && f(e), N(l), N(n), N(o)
			}
		}
	)
}
function Fe(r, e, l) {
	let { $$slots: s = {}, $$scope: t } = e,
		{ data: n } = e
	return (
		(r.$$set = (a) => {
			'data' in a && l(0, (n = a.data)), '$$scope' in a && l(2, (t = a.$$scope))
		}),
		[n, s, t]
	)
}
class Ye extends w {
	constructor(e) {
		super(), C(this, e, Fe, ze, S, { data: 0 })
	}
}
export { Ye as component, Re as universal }
