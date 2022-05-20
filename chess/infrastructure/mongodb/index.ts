import { connect, model } from "mongoose";
import IGame from "./IGame";
import gameSchema from "./gameSchema";

const Game = model<IGame>('Game', gameSchema);


// const game = new Game({
//     status: 'Ready to play',
//     gameTurn: true,
//     step: 1
// });
// run( game ).catch(err => console.log(err));

export default async function run( game: any ) {
    // 4. Connect to MongoDB
    await connect('mongodb://localhost:27017/chessGame');
    await game.save();
  
    console.log(game.gameTurn);
}
