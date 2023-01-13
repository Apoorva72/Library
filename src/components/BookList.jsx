import React, { useEffect, useState } from "react";
import '../App.css';
import { API_URL } from "../API";
import axios from 'axios';
import { useAppContext } from "../context/appContext";
import {useNavigate} from 'react-router-dom';

const BookList = () => {
    const [books, setBooks] = useState([]);

    const{ favourites, addToFavourites, removeFromFavourites} = useAppContext();
    const navigate = useNavigate();

  
  const favouriteChecker =(id) =>{
    const boolean = favourites.some((book)=> book.id === id);
    return boolean;
  }

  const renderedBooks = books.map((book) => {
    return (
        <div className="book" key={book?.id}>
            <div>
                
                <h4>{book?.title}</h4>
            </div>
            <div>
                <img src={book?.image_url} alt="#" onClick={()=>navigate(`/books/${book.id}`)}/>
            </div>
            <div>
                {favouriteChecker(book.id) ? (
                 <button onClick={()=> removeFromFavourites(book)}>Remove from Favourites
                 </button>
                ): (
                    <button onClick={()=> addToFavourites(book)}>Add to Favourites</button>
                )}                  

            </div>
        </div>
    )
})

    useEffect(() => {
        axios.get(API_URL).then((res) => {
            console.log(res.data);
            setBooks(res.data)
        }).catch((err) => {
            console.log(err);
        })

    }, [])

    return (
        <div className="book-list">
            {renderedBooks}
        </div>

    );
}

export default BookList;