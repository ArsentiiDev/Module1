import IFigure from './ifigure.interface'

export default interface IFigure2D extends IFigure {
	getP: () => number
}