<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use Laravelista\Comments\CommentController;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

require __DIR__ . '/auth.php';

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
Route::put('posts/{post}', [PostController::class, 'update'])->name('posts.update')->middleware('auth');

Route::get('posts/{post}', [PostController::class, 'show'])->name('posts.show')->middleware('auth');

Route::delete('posts/{post}', [PostController::class, 'delete'])->name('posts.delete')->middleware('auth');

Route::get('image/{filename}', [PostController::class, 'displayImage'])->name('image.displayImage');

Route::post('comments', [CommentController::class, 'store'])->name('comments.store');


// Github login
Route::get('/auth/github/redirect', function () {
    return Socialite::driver('github')->redirect();
})->name('github.auth');

Route::get('/auth/github/callback', function () {
    $githubUser = Socialite::driver('github')->user();
    $user = User::updateOrCreate([
        'email' => $githubUser->email,
    ], [
        'name' => $githubUser->nickname,
        'email' => $githubUser->email,
        'github_token' => $githubUser->token,
        'github_refresh_token' => $githubUser->refreshToken,
    ]);

    Auth::login($user);

    return redirect('/dashboard');
});

// Google login
Route::get('/auth/google/redirect', function () {
    return Socialite::driver('google')->redirect();
})->name('google.auth');

Route::get('/auth/google/callback', function () {
    $googleUser = Socialite::driver('google')->user();
    $user = User::updateOrCreate([
        'email' => $googleUser->email,
    ], [
        'name' => $googleUser->name,
        'email' => $googleUser->email,
        'google_token' => $googleUser->token,
        'google_refresh_token' => $googleUser->refreshToken,
    ]);

    Auth::login($user);

    return redirect('/dashboard');
});