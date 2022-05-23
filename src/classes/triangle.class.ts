export default abstract class Triangle {
	constructor(
		protected a: number,
		protected b: number,
		protected c: number
	) {
		if (!this.isCorrectTriangle()) throw new Error('It is not a Correct Triangle')
	}

	protected isCorrectTriangle(): boolean {
		if (this.a + this.b < this.c ||
			this.c + this.b < this.a ||
			this.a + this.c < this.b
		) return false
		return true
	}
}