const { Circle, Square, Triangle } = require("./shapes");

describe('Circle', () => {
    it('should render a blue circular element', () => {
        const color = 'blue';
        const circle = new Circle();
        circle.setColor(color);
        const expectedSVG = `<circle cx="150" cy="100" r="80" fill="${color}" />`;
        const actualSVG = circle.render();
        expect(actualSVG).toBe(expectedSVG);
    });
});

describe('Square', () => {
    it('should render a green square element', () => {
        const color = 'green';
        const square = new Square();
        square.setColor(color);
        const expectedSVG = `<rect x="50" y="50" width="200" height="200" fill="${color}" />`;
        const actualSVG = square.render();
        expect(actualSVG).toBe(expectedSVG);
    });
});

describe('Triangle', () => {
    it('should render a purple triangular element', () => {
        const color = 'purple';
        const triangle = new Triangle();
        triangle.setColor(color);
        const expectedSVG = `<polygon points="150,10 10,190 290,190" fill="${color}" />`;
        const actualSVG = triangle.render();
        expect(actualSVG).toBe(expectedSVG);
    });
});
