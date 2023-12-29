import React from "react";
import {Books} from "./Book";

interface Prop{
    books: Books[]
}


const BookDetails = ({books}: Prop) => {
    return(
        <>
        <table>
            <tr>
                <th>title</th>
                <th>author</th>
                <th>price</th>
            </tr>
            {books.map((e: Books) => 
                <tr>
                    <td>{e.id}</td>
                    <td>{e.title}</td>
                    <td>{e.author}</td>
                    <td>{e.price}</td>
                </tr>
            )}
        </table>
        </>
    )
}

export default BookDetails;