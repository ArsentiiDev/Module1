import IFigure3D from '../interfaces/ifigure3d.interface'
import Pyramid from './pyramid.class'

export default class Tetrahedron extends Pyramid implements IFigure3D {

	public getS() {
		return this.base.getS() + 3 * this.base.getS()
	}

	public getV() {
		return this.sideRib * this.base.getS() / 3
	}

	public getR() {
		return this.sideRib - this.base.getS() / 3
	}

	public getr() {
		return this.sideRib / 2
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