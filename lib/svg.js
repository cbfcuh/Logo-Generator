const { Circle, Square, Triangle } = require("./shapes");

function createSVG(answers) {
    let shape;
    switch (answers.shapeType) {
        case "Circle":
            shape = new Circle();
            break;
        case "Square":
            shape = new Square();
            break;
        case "Triangle":
            shape = new Triangle();
            break;
    }

    shape.setColor(answers.shapeColor);

    const shapeSVG = shape.render();
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shapeSVG}
  <text x="150" y="100" fill="${answers.textColor}" text-anchor="middle" dominant-baseline="middle" font-size="40">${answers.title}</text>
  </svg>`;
}

module.exports = { createSVG };
