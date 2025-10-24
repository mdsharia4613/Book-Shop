import { useEffect, useState } from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoresReadList } from '../../Utilities/AddToDb';
import Book from '../Book/Book';
const ListedBooks = () => {

    const [readList, setReadList] = useState([]);
    const allBook = useLoaderData();

    useEffect(() => {
        const storeadList = getStoresReadList ();

        const storedReadListInt = storeadList.map(id => parseInt(id));

        console.log(storeadList, storedReadListInt, allBook);

        const readBookList = allBook.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);

    } ,[])
    return (
        <div>
            <h3 className="text-3xl">Listed Books</h3>

            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>whish Books</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-3xl'>Books I am read : {readList.length}</h2>
                    {
                       readList.map(book => <Book key={book.bookId} book={book}></Book>) 
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;