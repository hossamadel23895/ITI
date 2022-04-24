<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;
use Laravelista\Comments\Comment;
use \App\Http\Requests\StorePostRequest;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;

class PostController extends Controller {
    public function index() {
        $posts = Post::paginate(10);
        return view('posts.index', [
            'posts' => $posts,
        ]);
    }

    public function create() {
        $users = User::all();

        return view('posts.create', [
            'users' => $users,
        ]);
    }

    public function store(StorePostRequest $request) {
        $data = request()->all();
        $user = User::find($data['user_id']);
        $post_img_path = !empty($request->file('post_img')) ? $request->file('post_img')->store('public') : "";
        Post::create([
            'title' => $data['title'],
            'slug' => Str::slug($data['title'], '-'),
            'description' => $data['description'],
            'img_path' => $post_img_path,
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

    public function update(StorePostRequest $request, $postId) {
        $data = $request->all();
        $post = Post::find($postId);

        $user = User::find($data['user_id']);
        if (!empty($request->file('post_img'))) {
            if (!empty($post->img_path)) File::delete("storage/" . explode('/', $post->img_path)[1]);
            $post_img_path = $request->file('post_img')->store('public');
        } else {
            $post_img_path = $post->img_path;
        }
        Post::find($postId)->update([
            'title' => $data['title'],
            'description' => $data['description'],
            'img_path' => $post_img_path,
            'user_id' => $user['id'],
        ]);
        return redirect()->route('posts.index')->withSuccess('Your post was edited successfully');
    }

    public function show($postSlug) {
        $post = Post::where('slug', $postSlug)->first();
        $comments = Comment::where('commentable_id', $post->id)->get();
        return view('posts.show', [
            'post' => $post,
            'comments' => $comments,
        ]);
    }

    public function delete($postId) {
        $post = Post::find($postId);
        if (!empty($post->img_path)) File::delete("storage/" . explode('/', $post->img_path)[1]);
        $post->delete();
        return redirect()->back()->withSuccess('Your post was Deleted successfully');
    }
}
