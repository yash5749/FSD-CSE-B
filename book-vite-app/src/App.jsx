import './App.css'
import Book from './components/Book'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  const data = [
    {
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRi4pZByGZrOvsmvj1gx2Lsbs2h955xyPecO0sIDcF7l7O3wD8gcbkx5PVKxydNhXKqmq0mqngrqZTJnqHXbGn2cxzYipWQ7ylUS-rHzMY",
      title: "Physics",
      price: 500
    },
    {
      image: "https://digital.brotherseducation.in/admin/img/book_pages/1712566909-Chemistry%20-%207.jpg",
      title: "Chemistry",
      price: 600
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyX-rxbPCB7vVQx50Wccpslc_nJlgy8V4W5Q&s",
      title: "Maths",
      price: 1000
    }
  ];

  return (
    <>
      <Header />
      <div className="booklist">
        {data.map((book, index) => (
          <Book
            key={index}
            image={book.image}
            title={book.title}
            price={book.price}
          />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default App;