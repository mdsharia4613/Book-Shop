
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStorestReadList, addToStoredWhishList } from '../../Utilities/AddToDb';

const BookDetails = () => {

    const {bookId} = useParams();
   
    const data = useLoaderData();
    const id = parseInt(bookId);

    const book = data.find(book => book.bookId === id)
    // console.log(book)

    const {bookId: currentBook, image } = book;

    const handleMarkAsRead = (id) => {
        addToStorestReadList(id);
    }

    const handleMarkAsWhish = (id) => {
        addToStoredWhishList(id)
    }
    
    
    return (
        <div className='my-12 '>
            <h2>Book Details{bookId}</h2>
            <img className='w-[250px] h-[300px]' src={image} alt="" />
            <div>
                <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-accent btn-outline">Read</button>
                <button onClick={() => handleMarkAsWhish(bookId)} className="btn btn-accent">Wishlist</button>

            </div>
        
        </div>
    );
};

export default BookDetails;