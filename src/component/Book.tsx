import React, { useState } from "react";
import BookDetails from "./Books";

interface FormValue{
    title: string,
    author: string,
                    price: string
}

export interface Books extends FormValue{
    id: number,
}

const Book = () => {
    const [books, setBooks] = useState<Books[]>([]);
    const [data, setData] = useState<FormValue>({
        title: "", 
        author: "",
        price: ""
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(data, "==================");
        
        const { title, author, price } = data;
        setBooks([
          ...books,
          { id: Math.random(), title: title, author: author, price: price },
        ]);
        console.log(books);
        
      };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [event.target.name]: event.target.value });
        console.log(data);
        
      };
      
    return (
        <div>
            <div className="form-container">
                <form onSubmit={(event) => handleSubmit(event)}>
                    <label>Title</label>
                    <input type="text" name="title" value={data.title} placeholder="title" onChange={(event)=> handleChange(event)} /><br/>
                    <label>Author</label>
                    <input type="text" name="author" value={data.author} placeholder="author" onChange={(event)=> handleChange(event)} /> <br/>
                    <label>Price</label>
                    <input type="text" name="price" placeholder="price" value={data.price} onChange={(event)=> handleChange(event)} /><br/>
                    <button type="submit">Add Book</button>
                    {/* <button type="submit">Update Book</button> */}
                </form>
            </div>
            <BookDetails books={books} />
        </div>
    )
}

export default Book;