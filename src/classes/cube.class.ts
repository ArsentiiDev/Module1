import IFigure3D from '../interfaces/ifigure3d.interface'

export default class Cube implements IFigure3D {
	private diagonal: number

	constructor(private a: number) {
		this.diagonal = Math.pow(3, 1 / 2) * a
	}

	public getS() {
		return 6 * this.a * this.a
	}

	public getV() {
		return this.a * this.a * this.a
	}

	public getR() {
		return this.diagonal / 2
	}

	public getr() {
		return this.a / 2
	}

	public show() {
		return {
			'Area': this.getS(),
			'Volume': this.getV(),
			'Radius(outCircle)': this.getR(),
			'radius(inCircle)': this.getr(),
		}
	}
}