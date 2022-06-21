import Shape from "./shape";

export default class Rectangle extends Shape {

    constructor(public width: number, public height: number) {
        super()
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height
    }
}