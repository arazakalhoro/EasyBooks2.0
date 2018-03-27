<?php

namespace App\Http\Controllers;

use App\Book;
use Illuminate\Http\Request;

class BooksController extends Controller
{
    public function index() {
        return Book::all();
    }

    public function show($id) {
        return Book::find($id);
    }

    public function create(Request $request) {
        $book = new Book;

        $book->title = $request->input('title');
        $book->img = $request->input('img');
        $book->description = $request->input('description');
        $book->author = $request->input('author');
        $book->price = $request->input('price');
        $book->save();
    }

    public function update(Request $request, $id) {
        $book = Book::find($id);

        $book->title = $request->input('title');
        $book->img = $request->input('img');
        $book->description = $request->input('description');
        $book->author = $request->input('author');
        $book->price = $request->input('price');
        $book->save();
    }

    public function destroy(Request $request) {
        $book = Book::find($request->input('id'));

        $book->delete();
    }
}
