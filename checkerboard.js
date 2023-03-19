class Square {
    constructor(row, col, size, color) {
        this.row = row;
        this.col = col;
        this.size = size;
        this.color = color;
        this.element = document.createElement("div");
        this.element.classList.add("square");
        this.element.style.width = `${size}px`;
        this.element.style.height = `${size}px`;
        this.element.style.backgroundColor = color;
        this.element.addEventListener("click", this.handleClick.bind(this));
    }

    handleClick() {
        this.color = (this.color == 'white') ? 'black' : 'white';
        this.element.style.backgroundColor = this.color;
    }
}

class Checkerboard {
    constructor(rows, cols, squareSize) {
        this.rows = rows;
        this.cols = cols;
        this.squareSize = squareSize;
        this.squares = [];
        this.container = document.getElementById("checkerboard-container");
        this.init();
    }

    init() {
        const colors = ["black", "white"];
        for (let i = 0; i < this.rows; i++) {
            const newRow = [];
            for (let j = 0; j < this.cols; j++) {
                const color = colors[(i + j) % 2];
                const square = new Square(i, j, this.squareSize, color);
                newRow.push(square);
                this.container.appendChild(square.element);
            }
            this.squares.push(newRow);
        }
    }
}
