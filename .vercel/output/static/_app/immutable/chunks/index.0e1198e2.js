var Q = Object.defineProperty
var X = (t, e, n) =>
	e in t ? Q(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n)
var h = (t, e, n) => (X(t, typeof e != 'symbol' ? e + '' : e, n), n)
import {
	n as v,
	r as b,
	l as D,
	k as H,
	i as Y,
	m as B,
	p as Z,
	q as tt,
	v as et,
	w as nt,
	x as j,
	y as it,
	z as st,
	A as rt
} from './scheduler.ae1baad1.js'
const G = typeof window < 'u'
let lt = G ? () => window.performance.now() : () => Date.now(),
	L = G ? (t) => requestAnimationFrame(t) : v
const x = new Set()
function I(t) {
	x.forEach((e) => {
		e.c(t) || (x.delete(e), e.f())
	}),
		x.size !== 0 && L(I)
}
function ot(t) {
	let e
	return (
		x.size === 0 && L(I),
		{
			promise: new Promise((n) => {
				x.add((e = { c: t, f: n }))
			}),
			abort() {
				x.delete(e)
			}
		}
	)
}
let S = !1
function at() {
	S = !0
}
function ct() {
	S = !1
}
function ft(t, e, n, i) {
	for (; t < e; ) {
		const s = t + ((e - t) >> 1)
		n(s) <= i ? (t = s + 1) : (e = s)
	}
	return t
}
function ut(t) {
	if (t.hydrate_init) return
	t.hydrate_init = !0
	let e = t.childNodes
	if (t.nodeName === 'HEAD') {
		const l = []
		for (let o = 0; o < e.length; o++) {
			const u = e[o]
			u.claim_order !== void 0 && l.push(u)
		}
		e = l
	}
	const n = new Int32Array(e.length + 1),
		i = new Int32Array(e.length)
	n[0] = -1
	let s = 0
	for (let l = 0; l < e.length; l++) {
		const o = e[l].claim_order,
			u =
				(s > 0 && e[n[s]].claim_order <= o
					? s + 1
					: ft(1, s, (d) => e[n[d]].claim_order, o)) - 1
		i[l] = n[u] + 1
		const f = u + 1
		;(n[f] = l), (s = Math.max(f, s))
	}
	const a = [],
		r = []
	let c = e.length - 1
	for (let l = n[s] + 1; l != 0; l = i[l - 1]) {
		for (a.push(e[l - 1]); c >= l; c--) r.push(e[c])
		c--
	}
	for (; c >= 0; c--) r.push(e[c])
	a.reverse(), r.sort((l, o) => l.claim_order - o.claim_order)
	for (let l = 0, o = 0; l < r.length; l++) {
		for (; o < a.length && r[l].claim_order >= a[o].claim_order; ) o++
		const u = o < a.length ? a[o] : null
		t.insertBefore(r[l], u)
	}
}
function dt(t, e) {
	t.appendChild(e)
}
function F(t) {
	if (!t) return document
	const e = t.getRootNode ? t.getRootNode() : t.ownerDocument
	return e && e.host ? e : t.ownerDocument
}
function _t(t) {
	const e = M('style')
	return (e.textContent = '/* empty */'), ht(F(t), e), e.sheet
}
function ht(t, e) {
	return dt(t.head || t, e), e.sheet
}
function mt(t, e) {
	if (S) {
		for (
			ut(t),
				(t.actual_end_child === void 0 ||
					(t.actual_end_child !== null && t.actual_end_child.parentNode !== t)) &&
					(t.actual_end_child = t.firstChild);
			t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

		)
			t.actual_end_child = t.actual_end_child.nextSibling
		e !== t.actual_end_child
			? (e.claim_order !== void 0 || e.parentNode !== t) &&
			  t.insertBefore(e, t.actual_end_child)
			: (t.actual_end_child = e.nextSibling)
	} else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e)
}
function pt(t, e, n) {
	t.insertBefore(e, n || null)
}
function $t(t, e, n) {
	S && !n ? mt(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null)
}
function E(t) {
	t.parentNode && t.parentNode.removeChild(t)
}
function Bt(t, e) {
	for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
}
function M(t) {
	return document.createElement(t)
}
function U(t) {
	return document.createElementNS('http://www.w3.org/2000/svg', t)
}
function P(t) {
	return document.createTextNode(t)
}
function jt() {
	return P(' ')
}
function kt() {
	return P('')
}
function zt(t, e, n, i) {
	return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i)
}
function yt(t, e, n) {
	n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}
function Ot(t, e) {
	for (const n in e) yt(t, n, e[n])
}
function qt(t) {
	return t.dataset.svelteH
}
function gt(t) {
	return Array.from(t.childNodes)
}
function V(t) {
	t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 })
}
function W(t, e, n, i, s = !1) {
	V(t)
	const a = (() => {
		for (let r = t.claim_info.last_index; r < t.length; r++) {
			const c = t[r]
			if (e(c)) {
				const l = n(c)
				return (
					l === void 0 ? t.splice(r, 1) : (t[r] = l),
					s || (t.claim_info.last_index = r),
					c
				)
			}
		}
		for (let r = t.claim_info.last_index - 1; r >= 0; r--) {
			const c = t[r]
			if (e(c)) {
				const l = n(c)
				return (
					l === void 0 ? t.splice(r, 1) : (t[r] = l),
					s ? l === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = r),
					c
				)
			}
		}
		return i()
	})()
	return (a.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), a
}
function J(t, e, n, i) {
	return W(
		t,
		(s) => s.nodeName === e,
		(s) => {
			const a = []
			for (let r = 0; r < s.attributes.length; r++) {
				const c = s.attributes[r]
				n[c.name] || a.push(c.name)
			}
			a.forEach((r) => s.removeAttribute(r))
		},
		() => i(e)
	)
}
function Gt(t, e, n) {
	return J(t, e, n, M)
}
function It(t, e, n) {
	return J(t, e, n, U)
}
function xt(t, e) {
	return W(
		t,
		(n) => n.nodeType === 3,
		(n) => {
			const i = '' + e
			if (n.data.startsWith(i)) {
				if (n.data.length !== i.length) return n.splitText(i.length)
			} else n.data = i
		},
		() => P(e),
		!0
	)
}
function Ft(t) {
	return xt(t, ' ')
}
function k(t, e, n) {
	for (let i = n; i < t.length; i += 1) {
		const s = t[i]
		if (s.nodeType === 8 && s.textContent.trim() === e) return i
	}
	return -1
}
function Ut(t, e) {
	const n = k(t, 'HTML_TAG_START', 0),
		i = k(t, 'HTML_TAG_END', n + 1)
	if (n === -1 || i === -1) return new z(e)
	V(t)
	const s = t.splice(n, i - n + 1)
	E(s[0]), E(s[s.length - 1])
	const a = s.slice(1, s.length - 1)
	for (const r of a)
		(r.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1)
	return new z(e, a)
}
function Vt(t, e) {
	;(e = '' + e), t.data !== e && (t.data = e)
}
function Wt(t, e, n, i) {
	n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? 'important' : '')
}
function wt(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
	return new CustomEvent(t, { detail: e, bubbles: n, cancelable: i })
}
function Jt(t, e) {
	const n = []
	let i = 0
	for (const s of e.childNodes)
		if (s.nodeType === 8) {
			const a = s.textContent.trim()
			a === `HEAD_${t}_END`
				? ((i -= 1), n.push(s))
				: a === `HEAD_${t}_START` && ((i += 1), n.push(s))
		} else i > 0 && n.push(s)
	return n
}
class vt {
	constructor(e = !1) {
		h(this, 'is_svg', !1)
		h(this, 'e')
		h(this, 'n')
		h(this, 't')
		h(this, 'a')
		;(this.is_svg = e), (this.e = this.n = null)
	}
	c(e) {
		this.h(e)
	}
	m(e, n, i = null) {
		this.e ||
			(this.is_svg
				? (this.e = U(n.nodeName))
				: (this.e = M(n.nodeType === 11 ? 'TEMPLATE' : n.nodeName)),
			(this.t = n.tagName !== 'TEMPLATE' ? n : n.content),
			this.c(e)),
			this.i(i)
	}
	h(e) {
		;(this.e.innerHTML = e),
			(this.n = Array.from(
				this.e.nodeName === 'TEMPLATE' ? this.e.content.childNodes : this.e.childNodes
			))
	}
	i(e) {
		for (let n = 0; n < this.n.length; n += 1) pt(this.t, this.n[n], e)
	}
	p(e) {
		this.d(), this.h(e), this.i(this.a)
	}
	d() {
		this.n.forEach(E)
	}
}
class z extends vt {
	constructor(n = !1, i) {
		super(n)
		h(this, 'l')
		;(this.e = this.n = null), (this.l = i)
	}
	c(n) {
		this.l ? (this.n = this.l) : super.c(n)
	}
	i(n) {
		for (let i = 0; i < this.n.length; i += 1) $t(this.t, this.n[i], n)
	}
}
function Kt(t, e) {
	return new t(e)
}
const T = new Map()
let A = 0
function Et(t) {
	let e = 5381,
		n = t.length
	for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n)
	return e >>> 0
}
function Nt(t, e) {
	const n = { stylesheet: _t(e), rules: {} }
	return T.set(t, n), n
}
function Tt(t, e, n, i, s, a, r, c = 0) {
	const l = 16.666 / i
	let o = `{
`
	for (let p = 0; p <= 1; p += l) {
		const g = e + (n - e) * a(p)
		o +=
			p * 100 +
			`%{${r(g, 1 - g)}}
`
	}
	const u =
			o +
			`100% {${r(n, 1 - n)}}
}`,
		f = `__svelte_${Et(u)}_${c}`,
		d = F(t),
		{ stylesheet: _, rules: m } = T.get(d) || Nt(d, t)
	m[f] || ((m[f] = !0), _.insertRule(`@keyframes ${f} ${u}`, _.cssRules.length))
	const y = t.style.animation || ''
	return (t.style.animation = `${y ? `${y}, ` : ''}${f} ${i}ms linear ${s}ms 1 both`), (A += 1), f
}
function O(t, e) {
	const n = (t.style.animation || '').split(', '),
		i = n.filter(e ? (a) => a.indexOf(e) < 0 : (a) => a.indexOf('__svelte') === -1),
		s = n.length - i.length
	s && ((t.style.animation = i.join(', ')), (A -= s), A || At())
}
function At() {
	L(() => {
		A ||
			(T.forEach((t) => {
				const { ownerNode: e } = t.stylesheet
				e && E(e)
			}),
			T.clear())
	})
}
let w
function bt() {
	return (
		w ||
			((w = Promise.resolve()),
			w.then(() => {
				w = null
			})),
		w
	)
}
function q(t, e, n) {
	t.dispatchEvent(wt(`${e ? 'intro' : 'outro'}${n}`))
}
const N = new Set()
let $
function Qt() {
	$ = { r: 0, c: [], p: $ }
}
function Xt() {
	$.r || b($.c), ($ = $.p)
}
function St(t, e) {
	t && t.i && (N.delete(t), t.i(e))
}
function Yt(t, e, n, i) {
	if (t && t.o) {
		if (N.has(t)) return
		N.add(t),
			$.c.push(() => {
				N.delete(t), i && (n && t.d(1), i())
			}),
			t.o(e)
	} else i && i()
}
const Ct = { duration: 0 }
function Zt(t, e, n) {
	const i = { direction: 'in' }
	let s = e(t, n, i),
		a = !1,
		r,
		c,
		l = 0
	function o() {
		r && O(t, r)
	}
	function u() {
		const { delay: d = 0, duration: _ = 300, easing: m = Y, tick: y = v, css: p } = s || Ct
		p && (r = Tt(t, 0, 1, _, d, m, p, l++)), y(0, 1)
		const g = lt() + d,
			K = g + _
		c && c.abort(),
			(a = !0),
			H(() => q(t, !0, 'start')),
			(c = ot((C) => {
				if (a) {
					if (C >= K) return y(1, 0), q(t, !0, 'end'), o(), (a = !1)
					if (C >= g) {
						const R = m((C - g) / _)
						y(R, 1 - R)
					}
				}
				return a
			}))
	}
	let f = !1
	return {
		start() {
			f || ((f = !0), O(t), D(s) ? ((s = s(i)), bt().then(u)) : u())
		},
		invalidate() {
			f = !1
		},
		end() {
			a && (o(), (a = !1))
		}
	}
}
function te(t) {
	t && t.c()
}
function ee(t, e) {
	t && t.l(e)
}
function Ht(t, e, n) {
	const { fragment: i, after_update: s } = t.$$
	i && i.m(e, n),
		H(() => {
			const a = t.$$.on_mount.map(it).filter(D)
			t.$$.on_destroy ? t.$$.on_destroy.push(...a) : b(a), (t.$$.on_mount = [])
		}),
		s.forEach(H)
}
function Dt(t, e) {
	const n = t.$$
	n.fragment !== null &&
		(et(n.after_update),
		b(n.on_destroy),
		n.fragment && n.fragment.d(e),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []))
}
function Lt(t, e) {
	t.$$.dirty[0] === -1 && (st.push(t), rt(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(e / 31) | 0] |= 1 << e % 31)
}
function ne(t, e, n, i, s, a, r = null, c = [-1]) {
	const l = nt
	j(t)
	const o = (t.$$ = {
		fragment: null,
		ctx: [],
		props: a,
		update: v,
		not_equal: s,
		bound: B(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(e.context || (l ? l.$$.context : [])),
		callbacks: B(),
		dirty: c,
		skip_bound: !1,
		root: e.target || l.$$.root
	})
	r && r(o.root)
	let u = !1
	if (
		((o.ctx = n
			? n(t, e.props || {}, (f, d, ..._) => {
					const m = _.length ? _[0] : d
					return (
						o.ctx &&
							s(o.ctx[f], (o.ctx[f] = m)) &&
							(!o.skip_bound && o.bound[f] && o.bound[f](m), u && Lt(t, f)),
						d
					)
			  })
			: []),
		o.update(),
		(u = !0),
		b(o.before_update),
		(o.fragment = i ? i(o.ctx) : !1),
		e.target)
	) {
		if (e.hydrate) {
			at()
			const f = gt(e.target)
			o.fragment && o.fragment.l(f), f.forEach(E)
		} else o.fragment && o.fragment.c()
		e.intro && St(t.$$.fragment), Ht(t, e.target, e.anchor), ct(), Z()
	}
	j(l)
}
class ie {
	constructor() {
		h(this, '$$')
		h(this, '$$set')
	}
	$destroy() {
		Dt(this, 1), (this.$destroy = v)
	}
	$on(e, n) {
		if (!D(n)) return v
		const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = [])
		return (
			i.push(n),
			() => {
				const s = i.indexOf(n)
				s !== -1 && i.splice(s, 1)
			}
		)
	}
	$set(e) {
		this.$$set &&
			!tt(e) &&
			((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1))
	}
}
const Mt = '4'
typeof window < 'u' && (window.__svelte || (window.__svelte = { v: new Set() })).v.add(Mt)
export {
	Zt as A,
	Jt as B,
	Bt as C,
	Ut as D,
	U as E,
	It as F,
	Ot as G,
	z as H,
	ie as S,
	$t as a,
	Xt as b,
	Ft as c,
	St as d,
	kt as e,
	E as f,
	M as g,
	Gt as h,
	ne as i,
	gt as j,
	yt as k,
	Wt as l,
	P as m,
	xt as n,
	Vt as o,
	Qt as p,
	Kt as q,
	te as r,
	jt as s,
	Yt as t,
	ee as u,
	Ht as v,
	Dt as w,
	mt as x,
	zt as y,
	qt as z
}
