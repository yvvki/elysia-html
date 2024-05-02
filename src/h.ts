import {
	createElement as h,
	type Children,
	type PropsWithChildren
} from '@kitajs/html'

/**
 * Just to stop TS from complaining about the type.
 *
 * @type {import('@kitajs/html').createElement}
 * @param {any} name
 * @returns {any}
 */
export const createElement = <
	C extends Children[],
	N extends string | Function
>(
	name: N,
	attrs: PropsWithChildren<any> | null,
	...children: C
): JSX.Element => {
	const { $elysia, ...attr } = attrs ?? {}

	const a = h(name, attr, ...children)

	return a
}
