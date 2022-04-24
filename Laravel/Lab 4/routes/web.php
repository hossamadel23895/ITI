<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use Laravelista\Comments\CommentController;

require __DIR__.'/auth.php';

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
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');


Route::get('posts', [PostController::class, 'index'])->name('posts.index')->middleware('auth');

Route::get('posts/create/', [PostController::class, 'create'])->name('posts.create')->middleware('auth');
Route::post('posts', [PostController::class, 'store'])->name('posts.store')->middleware('auth');

Route::get('posts/{post}/edit', [PostController::class, 'edit'])->name('posts.edit')->middleware('auth');
Route::put('posts/{post}',[PostController::class, 'update'])->name('posts.update')->middleware('auth');

Route::get('posts/{post}', [PostController::class, 'show'])->name('posts.show')->middleware('auth');

Route::delete('posts/{post}', [PostController::class, 'delete'])->name('posts.delete')->middleware('auth');

Route::get('image/{filename}', [PostController::class, 'displayImage'])->name('image.displayImage');

Route::post('comments', [CommentController::class, 'store'])->name('comments.store');

Route::delete('comments/{comment}', '\Laravelista\Comments\CommentController@destroy')->name('comments.destroy');
Route::put('comments/{comment}', '\Laravelista\Comments\CommentController@update')->name('comments.update');
Route::post('comments/{comment}', '\Laravelista\Comments\CommentController@reply')->name('comments.reply');