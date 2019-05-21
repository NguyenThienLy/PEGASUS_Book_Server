import { BookService } from './book.service'
import { BookErrorService } from './book.error';

const bookService = new BookService()

export {
    bookService,
    BookService,
    BookErrorService
}
