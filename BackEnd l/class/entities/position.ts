import { File, Rank } from './types';

export default class Position {
    constructor(
        protected file: File,
        protected rank: Rank
    ) {
    }
    
    getFile() {
        return this.file.charCodeAt(0);
    }
    getRank() {
        return this.rank;
    }
       
}