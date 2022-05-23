import IFigure2D from '../interfaces/ifigure2d.interface'
import Triangle from './triangle.class'

export default class RightTriangle extends Triangle implements IFigure2D {
	public getP() {
		return this.a + this.b + this.c
	}

	public getS() {
		return (this.a * this.b) / 2
	}

	public getR() {
		return this.c / 2
	}

	public getr() {
		return (this.a + this.b - this.c) / 2
	}

	protected override isCorrectTriangle(): boolean {
		super.isCorrectTriangle()
		if (this.a * this.a + this.b * this.b !== this.c * this.c) return false
		return true
	}

	public show() {
		return {
			'Area': this.getS(),
			'Radius(outCircle)': this.getR(),
			'radius(inCircle)': this.getr(),
		}
	}
}