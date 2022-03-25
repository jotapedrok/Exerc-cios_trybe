import { Router } from 'express';
import BooksController from '../controller/books.controller';

const router = Router();
const booksController = new BooksController;

router.get('/books', booksController.getAll);

export default router;