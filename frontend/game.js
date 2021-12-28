var pieces = new Array();
pieces[0] = new Array('rh', 'rk', 'rb', 'rq', 'rK', 'rb', 'rk', 'rh');
pieces[1] = new Array('rp', 'rp', 'rp', 'rp', 'rp', 'rp', 'rp', 'rp');
pieces[2] = new Array('_', '_', '_', '_', '_', '_', '_', '_');
pieces[3] = new Array('_', '_', '_', '_', '_', '_', '_', '_');
pieces[4] = new Array('_', '_', '_', '_', '_', '_', '_', '_');
pieces[5] = new Array('_', '_', '_', '_', '_', '_', '_', '_');
pieces[6] = new Array('bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp');
pieces[7] = new Array('bh', 'bk', 'bb', 'bq', 'bK', 'bb', 'bk', 'bh');

var red_hook = `<div class="piece"><span class="redPlayer"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chess-rook" class="svg-inline--fa fa-chess-rook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M360 464H23.1C10.75 464 0 474.7 0 487.1S10.75 512 23.1 512H360C373.3 512 384 501.3 384 488S373.3 464 360 464zM345.1 32h-308C17 32 0 49 0 70v139.4C0 218.8 4 227.5 11 233.6L48 265.8c0 8.885 .0504 17.64 .0504 26.46c0 39.32-1.001 79.96-11.93 139.8h49C94.95 374.3 96.11 333.3 96.11 285.5C96.11 270.7 96 255.1 96 238.2L48 196.5V80h64V128H160V80h64V128h48V80h64v116.5L288 238.2c0 16.77-.1124 32.25-.1124 47.1c0 47.79 1.164 89.15 10.99 146.7h49c-10.92-59.83-11.93-100.6-11.93-139.9C335.9 283.3 336 274.6 336 265.8l37-32.13C380 227.5 384 218.8 384 209.4V70C384 49 367 32 345.1 32zM192 224C174.4 224 160 238.4 160 256v64h64V256C224 238.4 209.6 224 192 224z"></path></svg></span></div>`
var red_knight = `<div class="piece"><span class="redPlayer"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chess-knight" class="svg-inline--fa fa-chess-knight" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M44 320.6l14.5 6.5c-17.01 20.24-26.44 45.91-26.44 72.35C32.06 399.7 32.12 432 32.12 432h48v-32c0-24.75 14-47.5 36.13-58.63l38.13-23.37c13.25-6.625 21.75-20.25 21.75-35.13v-58.75l-15.37 9C155.6 235.8 151.9 240.4 150.5 245.9L143 271c-2.25 7.625-8 13.88-15.38 16.75L117.1 292C114 293.3 110.7 293.9 107.4 293.9c-3.626 0-7.263-.7514-10.66-2.254L63.5 276.9C54.12 272.6 48 263.2 48 252.9V140.5c0-5.125 2.125-10.12 5.75-13.88l7.375-7.375L49.5 96C48.5 94.12 48 92 48 89.88C48 84.38 52.38 80 57.88 80h105c86.75 0 156.1 70.38 156.1 157.1V432h48.06l-.0625-194.9C367.9 124 276 32 162.9 32H57.88C25.88 32 0 57.88 0 89.88c0 8.5 1.75 16.88 5.125 24.62C1.75 122.8 0 131.6 0 140.5v112.4C0 282.2 17.25 308.8 44 320.6zM80.12 164c0 11 8.875 20 20 20c11 0 20-9 20-20s-9-20-20-20C89 144 80.12 153 80.12 164zM360 464H23.1C10.75 464 0 474.7 0 487.1S10.75 512 23.1 512H360C373.3 512 384 501.3 384 488S373.3 464 360 464z"></path></svg></span></div>`
var red_bishop = `<div class="piece"><span class="redPlayer"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chess-bishop" class="svg-inline--fa fa-chess-bishop" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M296 464H23.1C10.75 464 0 474.7 0 487.1S10.75 512 23.1 512h272C309.3 512 320 501.3 320 488S309.3 464 296 464zM0 304c0 51.63 30.12 85.25 64 96v32h48v-67.13l-33.5-10.63C63.75 349.5 48 333.9 48 304c0-84.1 93.2-206.5 112.6-206.5c19.63 0 60.01 67.18 70.28 85.8l-66.13 66.13c-3.125 3.125-4.688 7.219-4.688 11.31S161.6 268.9 164.8 272L176 283.2c3.125 3.125 7.219 4.688 11.31 4.688s8.188-1.562 11.31-4.688L253 229C264.4 256.8 272 283.5 272 304c0 29.88-15.75 45.5-30.5 50.25L208 364.9V432H256v-32c33.88-10.75 64-44.38 64-96c0-73.38-67.75-197.2-120.6-241.5C213.4 59.12 224 47 224 32c0-17.62-14.38-32-32-32H128C110.4 0 96 14.38 96 32c0 15 10.62 27.12 24.62 30.5C67.75 106.8 0 230.6 0 304z"></path></svg></span></div>`
var red_queen = `<div class="piece"><span class="redPlayer"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chess-queen" class="svg-inline--fa fa-chess-queen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 112c30.88 0 56-25.12 56-56S286.9 0 256 0S199.1 25.12 199.1 56S225.1 112 256 112zM511.1 197.4c0-5.178-2.509-10.2-7.096-13.26L476.4 168.2c-2.5-1.75-5.497-2.62-8.497-2.62c-5.501 .125-10.63 2.87-13.75 7.245c-9.001 12-23.16 19.13-38.16 19.13c-3.125 0-6.089-.2528-9.089-.8778c-23.13-4.25-38.88-26.25-38.88-49.75C367.1 134 361.1 128 354.6 128h-38.75c-6.001 0-11.63 4-12.88 9.875C298.2 160.1 278.7 176 255.1 176c-22.75 0-42.25-15.88-47-38.12C207.7 132 202.2 128 196.1 128h-38.75C149.1 128 143.1 134 143.1 141.4c0 18.49-13.66 50.62-47.95 50.62c-15.13 0-29.3-7.118-38.3-19.24C54.6 168.4 49.66 165.7 44.15 165.6c-3 0-5.931 .8951-8.432 2.645l-28.63 16C2.509 187.2 0 192.3 0 197.4c0 2.438 .5583 4.901 1.72 7.185L109.9 432h53.13L69.85 236.4C78.35 238.8 87.11 240 95.98 240c2.432 0 56.83 1.503 84.76-52.5C198.1 210.5 226.6 224 255.9 224c29.38 0 57.01-13.38 75.26-36.25C336.1 197.6 360.6 240 416 240c8.751 0 17.5-1.125 26-3.5L349 432h53.13l108.1-227.4C511.4 202.3 511.1 199.8 511.1 197.4zM424 464H87.98c-13.26 0-24 10.75-24 23.1S74.72 512 87.98 512h336c13.26 0 24-10.75 24-23.1S437.3 464 424 464z"></path></svg></span></div>`
var red_king = `<div class="piece"><span class="redPlayer"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chess-king" class="svg-inline--fa fa-chess-king" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M391.9 464H55.95c-13.25 0-23.1 10.75-23.1 23.1S42.7 512 55.95 512h335.1c13.25 0 23.1-10.75 23.1-23.1S405.2 464 391.9 464zM448 216c0-11.82-3.783-23.51-11.08-33.17c-10.3-14.39-27-22.88-44.73-22.88L247.9 160V104h31.1c13.2 0 24.06-10.8 24.06-24S293.1 56 279.9 56h-31.1V23.1C247.9 10.8 237.2 0 223.1 0S199.9 10.8 199.9 23.1V56H167.9c-13.2 0-23.97 10.8-23.97 24S154.7 104 167.9 104h31.1V160H55.95C24.72 160 0 185.3 0 215.9C0 221.6 .8893 227.4 2.704 233L68.45 432h50.5L48.33 218.4C48.09 217.6 47.98 216.9 47.98 216.1C47.98 212.3 50.93 208 55.95 208h335.9c6.076 0 8.115 5.494 8.115 8.113c0 .6341-.078 1.269-.2405 1.887L328.8 432h50.62l65.1-199.2C447.2 227.3 448 221.7 448 216z"></path></svg></span></div>`
var red_pawn = `<div class="piece"><span class="redPlayer"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chess-pawn" class="svg-inline--fa fa-chess-pawn" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M296 463.1H23.1c-13.25 0-23.1 10.75-23.1 24s10.75 24 23.1 24h272c13.25 0 23.1-10.75 23.1-23.1S309.3 463.1 296 463.1zM55.1 287.1L80 287.1v29.5c0 40.25-3.5 81.25-23.38 114.5h53.5C125.1 394.1 128 354.6 128 317.5v-29.5h64v29.5c0 37.13 2.875 77.5 17.88 114.5h53.5C243.5 398.7 240 357.7 240 317.5V287.1l24-.0001C277.3 287.1 288 277.3 288 263.1c0-13.25-10.75-24-23.1-24H241c23.75-21.88 38.1-53.12 38.1-87.1c0-9.393-1.106-19.05-3.451-28.86C272.3 105.4 244.9 32 159.1 32C93.75 32 40 85.75 40 151.1c0 34.88 15.12 66.12 39 88H55.1C42.75 239.1 32 250.7 32 263.1C32 277.3 42.75 287.1 55.1 287.1zM160 79.1c39.75 0 72 32.25 72 72S199.8 223.1 160 223.1S88 191.7 88 151.1S120.2 79.1 160 79.1z"></path></svg></span></div>`

var blue_hook = `<div class="piece"><span class="bluePlayer"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chess-rook" class="svg-inline--fa fa-chess-rook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M360 464H23.1C10.75 464 0 474.7 0 487.1S10.75 512 23.1 512H360C373.3 512 384 501.3 384 488S373.3 464 360 464zM345.1 32h-308C17 32 0 49 0 70v139.4C0 218.8 4 227.5 11 233.6L48 265.8c0 8.885 .0504 17.64 .0504 26.46c0 39.32-1.001 79.96-11.93 139.8h49C94.95 374.3 96.11 333.3 96.11 285.5C96.11 270.7 96 255.1 96 238.2L48 196.5V80h64V128H160V80h64V128h48V80h64v116.5L288 238.2c0 16.77-.1124 32.25-.1124 47.1c0 47.79 1.164 89.15 10.99 146.7h49c-10.92-59.83-11.93-100.6-11.93-139.9C335.9 283.3 336 274.6 336 265.8l37-32.13C380 227.5 384 218.8 384 209.4V70C384 49 367 32 345.1 32zM192 224C174.4 224 160 238.4 160 256v64h64V256C224 238.4 209.6 224 192 224z"></path></svg></span></div>`
var blue_knight = `<div class="piece"><span class="bluePlayer"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chess-knight" class="svg-inline--fa fa-chess-knight" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M44 320.6l14.5 6.5c-17.01 20.24-26.44 45.91-26.44 72.35C32.06 399.7 32.12 432 32.12 432h48v-32c0-24.75 14-47.5 36.13-58.63l38.13-23.37c13.25-6.625 21.75-20.25 21.75-35.13v-58.75l-15.37 9C155.6 235.8 151.9 240.4 150.5 245.9L143 271c-2.25 7.625-8 13.88-15.38 16.75L117.1 292C114 293.3 110.7 293.9 107.4 293.9c-3.626 0-7.263-.7514-10.66-2.254L63.5 276.9C54.12 272.6 48 263.2 48 252.9V140.5c0-5.125 2.125-10.12 5.75-13.88l7.375-7.375L49.5 96C48.5 94.12 48 92 48 89.88C48 84.38 52.38 80 57.88 80h105c86.75 0 156.1 70.38 156.1 157.1V432h48.06l-.0625-194.9C367.9 124 276 32 162.9 32H57.88C25.88 32 0 57.88 0 89.88c0 8.5 1.75 16.88 5.125 24.62C1.75 122.8 0 131.6 0 140.5v112.4C0 282.2 17.25 308.8 44 320.6zM80.12 164c0 11 8.875 20 20 20c11 0 20-9 20-20s-9-20-20-20C89 144 80.12 153 80.12 164zM360 464H23.1C10.75 464 0 474.7 0 487.1S10.75 512 23.1 512H360C373.3 512 384 501.3 384 488S373.3 464 360 464z"></path></svg></span></div>`
var blue_bishop = `<div class="piece"><span class="bluePlayer"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chess-bishop" class="svg-inline--fa fa-chess-bishop" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M296 464H23.1C10.75 464 0 474.7 0 487.1S10.75 512 23.1 512h272C309.3 512 320 501.3 320 488S309.3 464 296 464zM0 304c0 51.63 30.12 85.25 64 96v32h48v-67.13l-33.5-10.63C63.75 349.5 48 333.9 48 304c0-84.1 93.2-206.5 112.6-206.5c19.63 0 60.01 67.18 70.28 85.8l-66.13 66.13c-3.125 3.125-4.688 7.219-4.688 11.31S161.6 268.9 164.8 272L176 283.2c3.125 3.125 7.219 4.688 11.31 4.688s8.188-1.562 11.31-4.688L253 229C264.4 256.8 272 283.5 272 304c0 29.88-15.75 45.5-30.5 50.25L208 364.9V432H256v-32c33.88-10.75 64-44.38 64-96c0-73.38-67.75-197.2-120.6-241.5C213.4 59.12 224 47 224 32c0-17.62-14.38-32-32-32H128C110.4 0 96 14.38 96 32c0 15 10.62 27.12 24.62 30.5C67.75 106.8 0 230.6 0 304z"></path></svg></span></div>`
var blue_queen = `<div class="piece"><span class="bluePlayer"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chess-queen" class="svg-inline--fa fa-chess-queen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 112c30.88 0 56-25.12 56-56S286.9 0 256 0S199.1 25.12 199.1 56S225.1 112 256 112zM511.1 197.4c0-5.178-2.509-10.2-7.096-13.26L476.4 168.2c-2.5-1.75-5.497-2.62-8.497-2.62c-5.501 .125-10.63 2.87-13.75 7.245c-9.001 12-23.16 19.13-38.16 19.13c-3.125 0-6.089-.2528-9.089-.8778c-23.13-4.25-38.88-26.25-38.88-49.75C367.1 134 361.1 128 354.6 128h-38.75c-6.001 0-11.63 4-12.88 9.875C298.2 160.1 278.7 176 255.1 176c-22.75 0-42.25-15.88-47-38.12C207.7 132 202.2 128 196.1 128h-38.75C149.1 128 143.1 134 143.1 141.4c0 18.49-13.66 50.62-47.95 50.62c-15.13 0-29.3-7.118-38.3-19.24C54.6 168.4 49.66 165.7 44.15 165.6c-3 0-5.931 .8951-8.432 2.645l-28.63 16C2.509 187.2 0 192.3 0 197.4c0 2.438 .5583 4.901 1.72 7.185L109.9 432h53.13L69.85 236.4C78.35 238.8 87.11 240 95.98 240c2.432 0 56.83 1.503 84.76-52.5C198.1 210.5 226.6 224 255.9 224c29.38 0 57.01-13.38 75.26-36.25C336.1 197.6 360.6 240 416 240c8.751 0 17.5-1.125 26-3.5L349 432h53.13l108.1-227.4C511.4 202.3 511.1 199.8 511.1 197.4zM424 464H87.98c-13.26 0-24 10.75-24 23.1S74.72 512 87.98 512h336c13.26 0 24-10.75 24-23.1S437.3 464 424 464z"></path></svg></span></div>`
var blue_king = `<div class="piece"><span class="bluePlayer"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chess-king" class="svg-inline--fa fa-chess-king" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M391.9 464H55.95c-13.25 0-23.1 10.75-23.1 23.1S42.7 512 55.95 512h335.1c13.25 0 23.1-10.75 23.1-23.1S405.2 464 391.9 464zM448 216c0-11.82-3.783-23.51-11.08-33.17c-10.3-14.39-27-22.88-44.73-22.88L247.9 160V104h31.1c13.2 0 24.06-10.8 24.06-24S293.1 56 279.9 56h-31.1V23.1C247.9 10.8 237.2 0 223.1 0S199.9 10.8 199.9 23.1V56H167.9c-13.2 0-23.97 10.8-23.97 24S154.7 104 167.9 104h31.1V160H55.95C24.72 160 0 185.3 0 215.9C0 221.6 .8893 227.4 2.704 233L68.45 432h50.5L48.33 218.4C48.09 217.6 47.98 216.9 47.98 216.1C47.98 212.3 50.93 208 55.95 208h335.9c6.076 0 8.115 5.494 8.115 8.113c0 .6341-.078 1.269-.2405 1.887L328.8 432h50.62l65.1-199.2C447.2 227.3 448 221.7 448 216z"></path></svg></span></div>`
var blue_pawn = `<div class="piece"><span class="bluePlayer"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chess-pawn" class="svg-inline--fa fa-chess-pawn" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M296 463.1H23.1c-13.25 0-23.1 10.75-23.1 24s10.75 24 23.1 24h272c13.25 0 23.1-10.75 23.1-23.1S309.3 463.1 296 463.1zM55.1 287.1L80 287.1v29.5c0 40.25-3.5 81.25-23.38 114.5h53.5C125.1 394.1 128 354.6 128 317.5v-29.5h64v29.5c0 37.13 2.875 77.5 17.88 114.5h53.5C243.5 398.7 240 357.7 240 317.5V287.1l24-.0001C277.3 287.1 288 277.3 288 263.1c0-13.25-10.75-24-23.1-24H241c23.75-21.88 38.1-53.12 38.1-87.1c0-9.393-1.106-19.05-3.451-28.86C272.3 105.4 244.9 32 159.1 32C93.75 32 40 85.75 40 151.1c0 34.88 15.12 66.12 39 88H55.1C42.75 239.1 32 250.7 32 263.1C32 277.3 42.75 287.1 55.1 287.1zM160 79.1c39.75 0 72 32.25 72 72S199.8 223.1 160 223.1S88 191.7 88 151.1S120.2 79.1 160 79.1z"></path></svg></span></div>`

initsetup = () => {

    for (i in pieces) {
        for (j in pieces[i]) {
            console.log(pieces[i][j]);
            switch (pieces[i][j]) {
                case 'rh':
                    document.getElementById(`${i}${j}`).innerHTML = red_hook;
                    break;
                case 'rk':
                    document.getElementById(`${i}${j}`).innerHTML = red_knight;
                    break;
                case 'rb':
                    document.getElementById(`${i}${j}`).innerHTML = red_bishop;
                    break;
                case 'rq':
                    document.getElementById(`${i}${j}`).innerHTML = red_queen;
                    break;
                case 'rK':
                    document.getElementById(`${i}${j}`).innerHTML = red_king;
                    break;
                case 'rp':
                    document.getElementById(`${i}${j}`).innerHTML = red_pawn;
                    break;
                case 'bh':
                    document.getElementById(`${i}${j}`).innerHTML = blue_hook;
                    break;
                case 'bk':
                    document.getElementById(`${i}${j}`).innerHTML = blue_knight;
                    break;
                case 'bb':
                    document.getElementById(`${i}${j}`).innerHTML = blue_bishop;
                    break;
                case 'bq':
                    document.getElementById(`${i}${j}`).innerHTML = blue_queen;
                    break;
                case 'bK':
                    document.getElementById(`${i}${j}`).innerHTML = blue_king;
                    break;
                case 'bp':
                    document.getElementById(`${i}${j}`).innerHTML = blue_pawn;
                    break;
                default:
                    break;
            }
        }
    }
}

let selected;

function clear() {
    for (i in pieces) {
        for (j in pieces[i]) {
            let l = document.getElementById(`${i}${j}`)
            l.classList.remove('movable-blue');
            l.classList.remove('movable-red');
            l.classList.remove('selected');
        }
    }
}

function setmovable(id) {
    let l = document.getElementById(`${id[0]}${id[1]}`);
    if (l.classList.contains('movable-blue')) {
        document.getElementById(`${id[0]}${id[1]}`).innerHTML = document.getElementById(selected).innerHTML;
        document.getElementById(selected).innerHTML = ""
        pieces[id[0]][id[1]] = 'bp'
        pieces[selected[0]][selected[1]] = '_'
        clear()
        return;
    }
    for (i in pieces) {
        for (j in pieces[i]) {
            let l = document.getElementById(`${i}${j}`)
            l.classList.remove('movable-blue');
            l.classList.remove('movable-red');
            l.classList.remove('selected');
        }
    }
    l.classList.add('selected');
    selected = id
    switch (pieces[id[0]][id[1]]) {
        case 'bp':
            console.log(id[0])
            if (id[0] > 0) l = document.getElementById(`${id[0] - 1}${id[1]}`)
            l.classList.add('movable-blue');
            if (id[0] > 1) l = document.getElementById(`${id[0] - 2}${id[1]}`)
            l.classList.add('movable-blue');
            break;

        default:
            break;
    }
}

window.onkeydown = (key) => {
    if (key.keyCode == 27)
        clear();
}

for (i = 0; i < 8; i++) {
    let board = document.getElementById('board');
    let row = document.createElement('div');
    row.classList.add("row");
    for (j = 0; j < 8; j++) {
        let column = document.createElement('div');
        column.id = `${i}${j}`;
        column.classList.add("column");
        column.setAttribute("onclick", `setmovable('${i}${j}')`);
        row.append(column);
    }
    board.append(row);

}

initsetup();