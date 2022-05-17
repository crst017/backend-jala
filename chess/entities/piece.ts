import Position from './position';
import { File, Rank, Color } from './types';
export default abstract class Piece {

    protected position: Position;
    isCaptured = false;

    constructor(
        private readonly color: Color,
        file: File,
        rank: Rank
    ) {
        this.position = new Position(file, rank);
    }

    getPosition() {
        return `( ${String.fromCharCode(this.position.getFile())} - ${this.position.getRank()} )`
    }

    getPieceRank() {
        return this.position.getRank()
    }

    getPieceFile() {
        return String.fromCharCode(this.position.getFile())
    }

    getPieceColor() {
        return this.color
    }
    
    capturedPiece() {
        this.isCaptured = !this.isCaptured 
    }

    moveForward( position: Position, module : number = 8) {
        const current = this.position;
        const final = position as Position;

        let rank = true;
        if(module) {
            const value = Math.abs(final.getRank() - current.getRank());
            if ( value <= module && value > 0 ) {
                rank = true
            } else {
                rank = false; 
            }
        }
        return current.getFile() == final.getFile() && rank;
    }

    moveSide( position: Position, module : number = 8 ) {
        const current = this.position;
        const final = position;
        let file = true;

        if(module) {
            const value = Math.abs(final.getFile() - current.getFile());
            if ( value <= module && value > 0 ) {
                file = true
            } else {
                file = false; 
            }
        }

        return this.position.getRank() == position.getRank() && file;
    }

    moveDiagonal( position: Position, module : number = 8) {
        const current = this.position;
        const final = position;
        let diagonal = false

        if(module) {
            const valueX = Math.abs(final.getRank() - current.getRank());
            const valueY = Math.abs(final.getFile() - current.getFile());

            if ((valueX <= module && valueX > 0) &&  
                (valueY <= module && valueY > 0) &&
                (valueX == valueY)) diagonal = true;
        }

        return diagonal
    }

    moveTo(position: Position) {

        let moved = false;
        if (this.canMove( position )) {
            this.position = position;
            moved = true
            return moved
        }
        return moved
    }

    calculateVerticalPath(position: Position) : Position[] {

        let trajectory: Position[] = [];
        const current = this.position;
        const currentRank = this.position.getRank();
        const final = position;

        if ( current.getFile() == final.getFile() ) {
            const value = final.getRank() - current.getRank();
            const direction = value > 0 ? true : false;
            const numberOfPositions = Math.abs(value);
            console.log(value, direction, numberOfPositions)
            if( direction ) {
                for (let i = currentRank; i <= currentRank + numberOfPositions; i++) {
                    const setFile = this.getPieceFile() as File;
                    const newPosition = new Position(setFile, i )
                    trajectory.push(newPosition)
                }
            } else {
                for (let i = currentRank; i >= currentRank - numberOfPositions; i--) {
                    const setFile = this.getPieceFile() as File;
                    const newPosition = new Position(setFile, i )
                    trajectory.push(newPosition)
                }
            }
        }

        trajectory.shift();
        return trajectory
    }

    calculateHorizontalPath(position: Position) : Position[] {

        let trajectory: Position[] = [];
        const current = this.position;
        const currentFile = this.position.getFile();
        const final = position;

        if ( current.getRank() == final.getRank() ) {

            const value = final.getFile() - current.getFile();
            const direction = value > 0 ? true : false;
            const numberOfPositions = Math.abs(value);
            console.log(value, direction, numberOfPositions)
            if( direction ) {
                for (let i = currentFile; i <= currentFile + numberOfPositions; i++) {
                    const setRank = this.getPieceRank() as Rank;
                    const setFile = String.fromCharCode(i) as File
                    const newPosition = new Position( setFile , setRank )
                    trajectory.push(newPosition)
                }
            } else {
                for (let i = currentFile; i >= currentFile - numberOfPositions; i--) {
                    const setRank = this.getPieceRank() as Rank;
                    const setFile = String.fromCharCode(i) as File
                    const newPosition = new Position( setFile , setRank )
                    trajectory.push(newPosition)
                }
            }
        }

        trajectory.shift();
        return trajectory
    }

    calculateDiagionalPath(position: Position) : Position[] {
        let trajectory: Position[] = [];
        const current = this.position;
        const currentFile = this.position.getFile();
        const currentRank = this.position.getRank();
        const final = position;
        
        const valueY = final.getRank() - current.getRank();
        const valueX = final.getFile() - current.getFile();

        const verticalDirection = valueY > 0 ? true : false;
        const horizontalDirection = valueX > 0 ? true : false;

        const numberOfPositions = Math.abs(valueX);
        
        // if ( current.getRank() == final.getRank() ) {
        
        console.log(numberOfPositions, valueX, valueY,'**',horizontalDirection, verticalDirection)
        
        // UP RIGHT
        if ( verticalDirection && horizontalDirection) {

            for (let i = 1; i < numberOfPositions + 1; i++) {
                
                const setRank = (currentRank + i) as Rank;
                const setFile = String.fromCharCode(currentFile + i) as File;
                const newPosition = new Position( setFile, setRank )
                trajectory.push(newPosition);
            }
        }

        // UP LEFT
        if ( verticalDirection && !horizontalDirection) {
            console.log('up left')
            for (let i = 1; i < numberOfPositions + 1; i++) {
                
                const setRank = (currentRank + i) as Rank;
                const setFile = String.fromCharCode(currentFile - i) as File;
                const newPosition = new Position( setFile, setRank )
                trajectory.push(newPosition);
            }
        }

        // BACK RIGHT
        if ( !verticalDirection && horizontalDirection) {

            for (let i = 1; i < numberOfPositions + 1; i++) {
                
                const setRank = (currentRank - i) as Rank;
                const setFile = String.fromCharCode(currentFile + i) as File;
                const newPosition = new Position( setFile, setRank )
                trajectory.push(newPosition);
            }
        }

        // BACK LEFT
        if ( !verticalDirection && !horizontalDirection) {

            for (let i = 1; i < numberOfPositions + 1; i++) {
                
                const setRank = (currentRank - i) as Rank;
                const setFile = String.fromCharCode(currentFile - i) as File;
                const newPosition = new Position( setFile, setRank )
                trajectory.push(newPosition);
            }
        }
        return trajectory
    }

    abstract canMove(position: Position): boolean;
}