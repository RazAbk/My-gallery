// Service

gProjs = [];

function createProj(name, title, desc, url, img,  publishedAt, labels) {
  var proj = {
    id: makeId(),
    name,
    title,
    desc,
    url,
    img,
    publishedAt,
    labels,
  };

  return proj;
}

function createProjs(){
    gProjs.push(createProj('MineSweeper', 'MineSweeper', 'MineSweeper game build for the first sprint in the course','https://razabk.github.io/MineSweeper_01/', 'img/portfolio/minesweeper.jpg', '22/7/2021', ['game','minesweeper','js','html','css']));
    gProjs.push(createProj('Pacman', 'Pacman game', 'Pacman game','https://razabk.github.io/Pacman/', 'img/portfolio/pacman.png', '19/7/2021', ['game','pacman','js','html','css']));
    gProjs.push(createProj('Touch the nums', 'Touch the nums', 'Touch the nums game','https://razabk.github.io/Touch-the-nums-game/', 'img/portfolio/touchnums.png', "15/7/2021", ['game','Touchnums','js','html','css']));
    gProjs.push(createProj('In picture game', 'In picture game', 'In picture game game','https://razabk.github.io/In-picture-game/', 'img/portfolio/inpicture.png', '15/7/2021', ['game','picturegame','js','html','css']));
    gProjs.push(createProj('Ball game', 'Ball game', 'Ball game','https://razabk.github.io/Ball-game/', 'img/portfolio/ballboard.jpg', '18/7/2021', ['game','ballgame','js','html','css']));
    gProjs.push(createProj('Calculator', 'Calculator', 'Calculator app','https://razabk.github.io/Calculator/', 'img/portfolio/calculator.png', '15/7/2021', ['game','Calculator','js','html','css']));
    gProjs.push(createProj('Chess game', 'Chess game', 'Chess game','https://razabk.github.io/Chess-game/', 'img/portfolio/chess.png', '18/7/2021', ['game','chess','js','html','css']));
    gProjs.push(createProj('Book store', 'Book store', 'Book store','https://razabk.github.io/Book-store/', 'img/portfolio/bookstore.png', '31/7/2021', ['game','bookstore','crud', 'js','html','css']));
}