import React, {Component} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../components/Navbar'
import BookCard from "../components/BookCard";

class Saved extends Component {
    state = {
        savedBooks:[],
        initialized: true
    }

    componentDidMount() {
        this.getBooks();
    }

    getBooks = () => {
        axios.get("/api/books")
            .then(res => {
                this.setState({savedBooks: res.data})
            })
              .catch((err => console.log(err)))
    }

    render (){
        return (
        <div>
            {this.state.savedBooks.map(book =>  {
                console.log(book)
                return(
                    <div>
                        <Navbar />
                        <BookCard
                            key={book._id}
                            thumbnail={book.thumbnail} 
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            categories={book.volumeInfo.categories}
                            description={book.volumeInfo.description}
                            pageCount={book.volumeInfo.pageCount}
                            buyLink={book.saleInfo.buyLink}
                            canonicalVolumeLink={book.volumeInfo.canonicalVolumeLink} />
                    </div>
                )


            })}

        </div>

        )
    }

}

export default Saved