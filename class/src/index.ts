import express from 'express';
import Game from "../entities/game";

const app = express();
app.use(express.json()); 
const port = 3000;

let game !: Game;

app.get('/', ( req , res ) => {

    res.status(200).json('started')
});

app.get('/start', ( req , res ) => {
    game = Game.getGame()
    res.status(201).json(game);
});

app.get('/reset', ( req , res ) => {
    game.resetGame();
    res.status(200).send('Game has been restarted');
});

app.get('/playerTurn', ( req , res ) => {
    
    const playerTurn = game.getGameTurn();
    res.status(200).send(playerTurn + ' plays')
});

app.post('/movePiece', ( req , res ) => {

    const piece = game.findPiece( req.body );
    const response = piece?.getPieceColor() == game.getGameTurn()
    let message !: string;

    if ( response ) {
        message = 'Moving your piece';
        game.changeTurn();
    } else {
        message = 'It is not your turn'
    }

    res.status(200).send(message)
});

app.listen( port, () => {
    console.log(`Server listening on ${port}`);
});