import { s as E, n as g, j as x } from '../chunks/scheduler.ae1baad1.js'
import {
	S as y,
	i as S,
	g as b,
	m as _,
	h as f,
	j as v,
	n as m,
	f as d,
	k as j,
	a as k,
	x as u,
	o as $
} from '../chunks/index.0e1198e2.js'
import { d as q } from '../chunks/singletons.d8d3b1ab.js'
const C = () => {
		const e = q
		return {
			page: { subscribe: e.page.subscribe },
			navigating: { subscribe: e.navigating.subscribe },
			updated: e.updated
		}
	},
	D = {
		subscribe(e) {
			return C().page.subscribe(e)
		}
	}
function H(e) {
	var h
	let s,
		t,
		r = e[0].status + '',
		i,
		p,
		l = ((h = e[0].error) == null ? void 0 : h.message) + '',
		c
	return {
		c() {
			;(s = b('div')), (t = b('h1')), (i = _(r)), (p = _(': ')), (c = _(l)), this.h()
		},
		l(a) {
			s = f(a, 'DIV', { class: !0 })
			var o = v(s)
			t = f(o, 'H1', {})
			var n = v(t)
			;(i = m(n, r)), (p = m(n, ': ')), (c = m(n, l)), n.forEach(d), o.forEach(d), this.h()
		},
		h() {
			j(s, 'class', 'error svelte-2l8l59')
		},
		m(a, o) {
			k(a, s, o), u(s, t), u(t, i), u(t, p), u(t, c)
		},
		p(a, [o]) {
			var n
			o & 1 && r !== (r = a[0].status + '') && $(i, r),
				o & 1 && l !== (l = ((n = a[0].error) == null ? void 0 : n.message) + '') && $(c, l)
		},
		i: g,
		o: g,
		d(a) {
			a && d(s)
		}
	}
}
function I(e, s, t) {
	let r
	return x(e, D, (i) => t(0, (r = i))), [r]
}
let A = class extends y {
	constructor(s) {
		super(), S(this, s, I, H, E, {})
	}
}
export { A as component }
