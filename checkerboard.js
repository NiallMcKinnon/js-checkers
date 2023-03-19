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
        this.color = (this.color == '#eeeed2') ? '#769656' : '#eeeed2';
        this.element.style.backgroundColor = this.color;
        console.log("You clicked at: " + this.row.toString() +  " " + this.col.toString());
    }
}

class Checkerboard {
    constructor(rows, cols, squareSize) {
        this.rows = rows;
        this.cols = cols;
        this.squareSize = squareSize;
        this.squares = [];
        this.container = document.getElementById("checkerboard-container");
        this.container.style.width = `${this.cols * this.squareSize}px`;
        this.container.style.height = `${this.rows * this.squareSize}px`;
        // const colors = ["black", "white"];
        const colors = ["#769656", "#eeeed2"];

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
