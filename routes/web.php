<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

// A route group allows us to have a prefix, in this case api
Route::group(array('prefix' => 'api'), function()
{
    Route::resource('books', 'BooksController');
});
