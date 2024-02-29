// Массив с книгами
const library = [];

// Функция добавления книги в массив
const addBook = (name, author, publictaionYear, genre, pagesNumber) => {
  const book = {name, author, publictaionYear, genre, pagesNumber}
  library.push(book)
}
// Функция нахождения книги по автору и вывод её на экран
const findBooksByAuthor = (chosenAuthor) => {
  const bookByAuthor = library.filter((book) => book.author === chosenAuthor)
  return bookByAuthor
}
// Функция фильтрации книг по жанру
const filterBooksByGenre = (chosenGenre) => {
  const booksByGenre = library.filter((book) => book.genre === chosenGenre)
  return booksByGenre
}
// Функция для генерации отчёта о количестве книг каждого жанра в библиотеке
const genreReport = () => {
  const report = []
  const quantityOfFantasy = filterBooksByGenre("Фэнтези").length
  const quantityOfAntiutopia = filterBooksByGenre("Антиутопия").length
  report.push(`Количество книг жанра фэнтези: ${quantityOfFantasy}`)
  report.push(`Количество книг жанра антиутопия: ${quantityOfAntiutopia}`)
  return report
}
// Функция для вычисления среднего количества страниц всех книг в библиотеке
const averagePagesReport = () => {
  let sumOfPages = 0
  for (let i = 0; i < library.length; i += 1) {
    sumOfPages += library[i].pagesNumber
  }
  const averageCountOfPages = sumOfPages / library.length
  return averageCountOfPages
}

addBook("Хоббит", "Дж. Р. Р. Толкиен", 1937, "Фэнтези", 310);
addBook("Гарри Поттер и философский камень", "Дж. К. Роулинг", 1997, "Фэнтези", 223);
addBook("1984", "Джордж Оруэлл", 1949, "Антиутопия", 328);

console.log(findBooksByAuthor("Дж. Р. Р. Толкиен"))

console.log(filterBooksByGenre("Фэнтези"))

console.log(genreReport());

console.log(`Среднее количество страниц: ${averagePagesReport()}`)