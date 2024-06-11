import Link from 'next/link'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Books',
}

export type Book = { id: number };
type Books = Book[];

const books: Books = Array.from({ length: 6 }).map((_, index) => ({ id: index + 1 }));

const getBooks = async (): Promise<Books> => {
  return new Promise(r => setTimeout(() => r(books), 2000))
}
 

export default async function Books() {

  const profiles: Books = await getBooks();

  return profiles.map(book => <Link key={book.id} href={`/books/${book.id}`}>Book {book.id}</Link>);
}
