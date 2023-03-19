class Checkerboard {
    constructor(rows, cols, containerId, squareSize) {
        this.rows = rows;
        this.cols = cols;
        this.container = document.getElementById(containerId);
        this.squareSize = squareSize;
        this.colors = ["white", "black"];
        this.generateBoard();
        this.container.addEventListener(
            "click",
            this.handleSquareClick.bind(this)
        );
    }

    generateBoard() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                const square = document.createElement("div");
                square.style.width = `${this.squareSize}px`;
                square.style.height = `${this.squareSize}px`;
                square.classList.add(this.colors[(row + col) % 2]);
                square.dataset.row = row;
                square.dataset.col = col;
                this.container.appendChild(square);
            }
        }
        this.container.style.width = `${this.cols * this.squareSize}px`;
        this.container.style.height = `${this.rows * this.squareSize}px`;
    }

    handleSquareClick(event) {
        const square = event.target;
        square.classList.toggle("white");
        square.classList.toggle("black");
    }
}

//   const checkerboard = new Checkerboard(8, 8, "checkerboard-container", 40);
