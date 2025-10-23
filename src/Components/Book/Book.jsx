import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId,image, author, bookName, review, category, publisher, tags } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm p-4 rounded-2xl mb-10">
                <figure className='bg-blue-200 py-8 rounded-2xl' >
                    <img className='w-28 h-44'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex items-center gap-10 justify-center'>
                        {
                            tags.map((tag, index) => < button key={index} className="btn btn-xs bg-yellow-500" > {tag}</button>
                            )
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        {/* Card Title
                    <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                    <p>{author}</p>
                    <div className="border-t mt-4 mb-4 border-dashed"></div>

                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">Fashion</div>
                        <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" aria-label="2 star" checked="checked" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;