<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;

class PostController extends Controller {
    public function index() {
        $posts = Post::paginate(10);
        return view('posts.index', [
            'posts' => $posts
        ]);
    }

    public function create() {
        $users = User::all();

        return view('posts.create', [
            'users' => $users,
        ]);
    }

    public function store() {
        $data = request()->all();
        $user = User::find($data['user_id']);
        Post::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'user_id' => $user['id']
        ]);

        return redirect()->route('posts.index')->withSuccess('Your post was created successfully');
    }

    public function edit($postId) {
        $post = Post::find($postId);
        $users = User::all();

        return view('posts.edit', [
            'postId' => $postId,
            'users' => $users,
            'post' => $post
        ]);
    }

    public function update($postId) {
        $data = request()->all();
        $user = User::find($data['user_id']);
        Post::find($postId)->update([
            'title' => $data['title'],
            'description' => $data['description'],
            'user_id' => $user['id']
        ]);
        return redirect()->route('posts.index')->withSuccess('Your post was edited successfully');
    }

    public function show($postId) {
        $post = Post::find($postId);
        return view('posts.show', [
            'post' => $post
        ]);
    }

    public function delete($postId) {
        Post::find($postId)->delete();
        return redirect()->back()->withSuccess('Your post was Deleted successfully');
    }
}
