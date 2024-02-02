import {
	s as I,
	f as F,
	d as g,
	u as G,
	g as P,
	h as D,
	B as S,
	e as z
} from './scheduler.ae1baad1.js'
import {
	S as H,
	i as J,
	E as B,
	e as k,
	F as q,
	j as w,
	f as m,
	G as b,
	a as N,
	x as K,
	d as L,
	t as M,
	C as O
} from './index.0e1198e2.js'
import { e as j } from './each.e59479a4.js'
function A(o, e) {
	const i = {},
		s = {},
		l = { $$scope: 1 }
	let a = o.length
	for (; a--; ) {
		const c = o[a],
			r = e[a]
		if (r) {
			for (const f in c) f in r || (s[f] = 1)
			for (const f in r) l[f] || ((i[f] = r[f]), (l[f] = 1))
			o[a] = r
		} else for (const f in c) l[f] = 1
	}
	for (const c in s) c in i || (i[c] = void 0)
	return i
}
function Y(o) {
	return typeof o == 'object' && o !== null ? o : {}
}
const C = {
	xmlns: 'http://www.w3.org/2000/svg',
	width: 24,
	height: 24,
	viewBox: '0 0 24 24',
	fill: 'none',
	stroke: 'currentColor',
	'stroke-width': 2,
	'stroke-linecap': 'round',
	'stroke-linejoin': 'round'
}
function y(o, e, i) {
	const s = o.slice()
	return (s[10] = e[i][0]), (s[11] = e[i][1]), s
}
function v(o) {
	let e,
		i = [o[11]],
		s = {}
	for (let l = 0; l < i.length; l += 1) s = g(s, i[l])
	return {
		c() {
			;(e = B(o[10])), this.h()
		},
		l(l) {
			;(e = q(l, o[10], {})), w(e).forEach(m), this.h()
		},
		h() {
			b(e, s)
		},
		m(l, a) {
			N(l, e, a)
		},
		p(l, a) {
			b(e, (s = A(i, [a & 32 && l[11]])))
		},
		d(l) {
			l && m(e)
		}
	}
}
function E(o) {
	let e = o[10],
		i,
		s = o[10] && v(o)
	return {
		c() {
			s && s.c(), (i = k())
		},
		l(l) {
			s && s.l(l), (i = k())
		},
		m(l, a) {
			s && s.m(l, a), N(l, i, a)
		},
		p(l, a) {
			l[10]
				? e
					? I(e, l[10])
						? (s.d(1), (s = v(l)), (e = l[10]), s.c(), s.m(i.parentNode, i))
						: s.p(l, a)
					: ((s = v(l)), (e = l[10]), s.c(), s.m(i.parentNode, i))
				: e && (s.d(1), (s = null), (e = l[10]))
		},
		d(l) {
			l && m(i), s && s.d(l)
		}
	}
}
function Q(o) {
	let e,
		i,
		s,
		l,
		a,
		c = j(o[5]),
		r = []
	for (let t = 0; t < c.length; t += 1) r[t] = E(y(o, c, t))
	const f = o[9].default,
		h = F(f, o, o[8], null)
	let d = [
			C,
			o[6],
			{ width: o[2] },
			{ height: o[2] },
			{ stroke: o[1] },
			{ 'stroke-width': (s = o[4] ? (Number(o[3]) * 24) / Number(o[2]) : o[3]) },
			{ class: (l = `lucide-icon lucide lucide-${o[0]} ${o[7].class ?? ''}`) }
		],
		_ = {}
	for (let t = 0; t < d.length; t += 1) _ = g(_, d[t])
	return {
		c() {
			e = B('svg')
			for (let t = 0; t < r.length; t += 1) r[t].c()
			;(i = k()), h && h.c(), this.h()
		},
		l(t) {
			e = q(t, 'svg', { width: !0, height: !0, stroke: !0, 'stroke-width': !0, class: !0 })
			var n = w(e)
			for (let u = 0; u < r.length; u += 1) r[u].l(n)
			;(i = k()), h && h.l(n), n.forEach(m), this.h()
		},
		h() {
			b(e, _)
		},
		m(t, n) {
			N(t, e, n)
			for (let u = 0; u < r.length; u += 1) r[u] && r[u].m(e, null)
			K(e, i), h && h.m(e, null), (a = !0)
		},
		p(t, [n]) {
			if (n & 32) {
				c = j(t[5])
				let u
				for (u = 0; u < c.length; u += 1) {
					const W = y(t, c, u)
					r[u] ? r[u].p(W, n) : ((r[u] = E(W)), r[u].c(), r[u].m(e, i))
				}
				for (; u < r.length; u += 1) r[u].d(1)
				r.length = c.length
			}
			h &&
				h.p &&
				(!a || n & 256) &&
				G(h, f, t, t[8], a ? D(f, t[8], n, null) : P(t[8]), null),
				b(
					e,
					(_ = A(d, [
						C,
						n & 64 && t[6],
						(!a || n & 4) && { width: t[2] },
						(!a || n & 4) && { height: t[2] },
						(!a || n & 2) && { stroke: t[1] },
						(!a ||
							(n & 28 &&
								s !== (s = t[4] ? (Number(t[3]) * 24) / Number(t[2]) : t[3]))) && {
							'stroke-width': s
						},
						(!a ||
							(n & 129 &&
								l !==
									(l = `lucide-icon lucide lucide-${t[0]} ${
										t[7].class ?? ''
									}`))) && { class: l }
					]))
				)
		},
		i(t) {
			a || (L(h, t), (a = !0))
		},
		o(t) {
			M(h, t), (a = !1)
		},
		d(t) {
			t && m(e), O(r, t), h && h.d(t)
		}
	}
}
function R(o, e, i) {
	const s = ['name', 'color', 'size', 'strokeWidth', 'absoluteStrokeWidth', 'iconNode']
	let l = S(e, s),
		{ $$slots: a = {}, $$scope: c } = e,
		{ name: r } = e,
		{ color: f = 'currentColor' } = e,
		{ size: h = 24 } = e,
		{ strokeWidth: d = 2 } = e,
		{ absoluteStrokeWidth: _ = !1 } = e,
		{ iconNode: t } = e
	return (
		(o.$$set = (n) => {
			i(7, (e = g(g({}, e), z(n)))),
				i(6, (l = S(e, s))),
				'name' in n && i(0, (r = n.name)),
				'color' in n && i(1, (f = n.color)),
				'size' in n && i(2, (h = n.size)),
				'strokeWidth' in n && i(3, (d = n.strokeWidth)),
				'absoluteStrokeWidth' in n && i(4, (_ = n.absoluteStrokeWidth)),
				'iconNode' in n && i(5, (t = n.iconNode)),
				'$$scope' in n && i(8, (c = n.$$scope))
		}),
		(e = z(e)),
		[r, f, h, d, _, t, l, e, c, a]
	)
}
class T extends H {
	constructor(e) {
		super(),
			J(this, e, R, Q, I, {
				name: 0,
				color: 1,
				size: 2,
				strokeWidth: 3,
				absoluteStrokeWidth: 4,
				iconNode: 5
			})
	}
}
const Z = T
export { Z as I, Y as a, A as g }
