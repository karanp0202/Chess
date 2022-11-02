const express = require('express');
const path = require('path');
var fs = require('fs');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../frontend/")));

let board = JSON.parse(fs.readFileSync(path.join(__dirname, "./board.json")))

app.get('/board', (req, res) => {
    res.send(board)
})

app.get('/move=:from=:to', (req, res) => {
    board[Number.parseInt(req.params.to / 10)][Number.parseInt(req.params.to % 10)] = board[Number.parseInt(req.params.from / 10)][Number.parseInt(req.params.from % 10)]
    board[Number.parseInt(req.params.from / 10)][Number.parseInt(req.params.from % 10)] = "__"
    fs.writeFileSync(path.join(__dirname, "./board.json"), JSON.stringify(board))
    res.send('done');
})

app.get('/reset', (req, res) => {
    delete board
    board = new Array();
    board[0] = new Array('rh', 'rk', 'rb', 'rq', 'rK', 'rb', 'rk', 'rh');
    board[1] = new Array('rp', 'rp', 'rp', 'rp', 'rp', 'rp', 'rp', 'rp');
    board[2] = new Array('__', '__', '__', '__', '__', '__', '__', '__');
    board[3] = new Array('__', '__', '__', '__', '__', '__', '__', '__');
    board[4] = new Array('__', '__', '__', '__', '__', '__', '__', '__');
    board[5] = new Array('__', '__', '__', '__', '__', '__', '__', '__');
    board[6] = new Array('bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp');
    board[7] = new Array('bh', 'bk', 'bb', 'bq', 'bK', 'bb', 'bk', 'bh');
    fs.writeFileSync(path.join(__dirname, "./board.json"), JSON.stringify(board))
    res.send("/")
})

app.listen(port, () => {});
