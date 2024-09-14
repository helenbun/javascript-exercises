const getTheTitles = function(books) {
  let titles = books.map(({title}) =>{
    return title;
  })
  return titles; 
}

/*
persons.map(getFullName);

function getFullName(item) {
  return [item.firstname,item.lastname].join(" ");
}
*/
const bookList = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

console.log(getTheTitles(bookList));

//console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
