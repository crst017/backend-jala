import Rectangle from './rectangle';
import Shape from './shape';
import Square from './square';


let rectangle = new Rectangle(10, 6);
let square = new Square(10);

// console.log(rectangle.calculateArea());
test(rectangle);
test(square);

function test(shape: Shape) {

    shape.width = 5;
    shape.height = 4;
    console.log(shape.calculateArea());

}