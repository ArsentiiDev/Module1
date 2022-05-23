import RightTriangle from './rightTriangle.class'

export default abstract class Pyramid {
	constructor(
		protected sideRib: number,
		protected base: RightTriangle
	) {}
}