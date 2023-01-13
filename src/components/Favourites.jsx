import '../App.css';
import { useAppContext } from "../context/appContext";


const Favourites=()=>{
    const { favourites, addToFavourites, removeFromFavourites} = useAppContext();

    const favouriteChecker =(id)=>{
        const boolean = favourites.some((book)=> book.id === id);
        return boolean;
    };

    const renderedBooks = favourites.map((book)=>{
    return(  <div className="favourites">

           <div key={book.id} className="book">
               <div>
                  <h4>{book.title}</h4>
               </div>
               <div>
                   <img src={book.image_url} alt="#" />
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
      </div>

    );
    })
    return (<div>{renderedBooks}</div>)

    
};

export default Favourites;