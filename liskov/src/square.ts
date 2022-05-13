import Rectangle from "./rectangle";
import Shape from "./shape";

export default class Square extends Shape {

    constructor(public width: number) {
        super(width);
    }

    calculateArea(): number {
        return this.width * this.width
    }
}