<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;
use App\Http\Resources\PostResource;
use Illuminate\Support\Str;

class PostController extends Controller {
    public function index() {
        $posts =  Post::with('user')->paginate(2);
        return PostResource::collection($posts);
    }

    public function show($postId) {
        $post = Post::find($postId);
        return new PostResource($post);
    }

    public function store() {
        $data = request()->all();
        $user = User::find($data['user_id']);
        Post::create([
            'title' => $data['title'],
            'slug' => Str::slug($data['title'], '-'),
            'description' => $data['description'],
            'img_path' => "",
            'user_id' => $user['id'],
        ]);
    }

}
