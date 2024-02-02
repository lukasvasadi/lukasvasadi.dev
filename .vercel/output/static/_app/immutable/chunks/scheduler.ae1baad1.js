function x() {}
const F = (t) => t
function k(t, n) {
	for (const e in n) t[e] = n[e]
	return t
}
function w(t) {
	return t()
}
function M() {
	return Object.create(null)
}
function j(t) {
	t.forEach(w)
}
function S(t) {
	return typeof t == 'function'
}
function A(t, n) {
	return t != t ? n == n : t !== n || (t && typeof t == 'object') || typeof t == 'function'
}
function B(t) {
	return Object.keys(t).length === 0
}
function E(t, ...n) {
	if (t == null) {
		for (const o of n) o(void 0)
		return x
	}
	const e = t.subscribe(...n)
	return e.unsubscribe ? () => e.unsubscribe() : e
}
function P(t, n, e) {
	t.$$.on_destroy.push(E(n, e))
}
function U(t, n, e, o) {
	if (t) {
		const r = b(t, n, e, o)
		return t[0](r)
	}
}
function b(t, n, e, o) {
	return t[1] && o ? k(e.ctx.slice(), t[1](o(n))) : e.ctx
}
function C(t, n, e, o) {
	if (t[2] && o) {
		const r = t[2](o(e))
		if (n.dirty === void 0) return r
		if (typeof r == 'object') {
			const a = [],
				f = Math.max(n.dirty.length, r.length)
			for (let u = 0; u < f; u += 1) a[u] = n.dirty[u] | r[u]
			return a
		}
		return n.dirty | r
	}
	return n.dirty
}
function D(t, n, e, o, r, a) {
	if (r) {
		const f = b(n, e, o, a)
		t.p(f, r)
	}
}
function G(t) {
	if (t.ctx.length > 32) {
		const n = [],
			e = t.ctx.length / 32
		for (let o = 0; o < e; o++) n[o] = -1
		return n
	}
	return -1
}
function H(t) {
	const n = {}
	for (const e in t) e[0] !== '$' && (n[e] = t[e])
	return n
}
function I(t, n) {
	const e = {}
	n = new Set(n)
	for (const o in t) !n.has(o) && o[0] !== '$' && (e[o] = t[o])
	return e
}
function J(t) {
	const n = typeof t == 'string' && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/)
	return n ? [parseFloat(n[1]), n[2] || 'px'] : [t, 'px']
}
let l
function _(t) {
	l = t
}
function m() {
	if (!l) throw new Error('Function called outside component initialization')
	return l
}
function K(t) {
	m().$$.on_mount.push(t)
}
function L(t) {
	m().$$.after_update.push(t)
}
const i = [],
	p = []
let c = []
const g = [],
	y = Promise.resolve()
let h = !1
function O() {
	h || ((h = !0), y.then(v))
}
function N() {
	return O(), y
}
function q(t) {
	c.push(t)
}
const d = new Set()
let s = 0
function v() {
	if (s !== 0) return
	const t = l
	do {
		try {
			for (; s < i.length; ) {
				const n = i[s]
				s++, _(n), z(n.$$)
			}
		} catch (n) {
			throw ((i.length = 0), (s = 0), n)
		}
		for (_(null), i.length = 0, s = 0; p.length; ) p.pop()()
		for (let n = 0; n < c.length; n += 1) {
			const e = c[n]
			d.has(e) || (d.add(e), e())
		}
		c.length = 0
	} while (i.length)
	for (; g.length; ) g.pop()()
	;(h = !1), d.clear(), _(t)
}
function z(t) {
	if (t.fragment !== null) {
		t.update(), j(t.before_update)
		const n = t.dirty
		;(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(q)
	}
}
function Q(t) {
	const n = [],
		e = []
	c.forEach((o) => (t.indexOf(o) === -1 ? n.push(o) : e.push(o))), e.forEach((o) => o()), (c = n)
}
export {
	O as A,
	I as B,
	L as a,
	p as b,
	J as c,
	k as d,
	H as e,
	U as f,
	G as g,
	C as h,
	F as i,
	P as j,
	q as k,
	S as l,
	M as m,
	x as n,
	K as o,
	v as p,
	B as q,
	j as r,
	A as s,
	N as t,
	D as u,
	Q as v,
	l as w,
	_ as x,
	w as y,
	i as z
}
