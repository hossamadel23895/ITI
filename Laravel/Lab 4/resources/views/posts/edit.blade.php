@extends('layouts.app')

@section('title')
    Edit
@endsection

@section('content')
    <div class="h1 text-center mt-3 text-light">Edit post</div>

    <form method="post" action="{{ route('posts.update', $postId) }}"  enctype="multipart/form-data">
        @method('PUT')
        @csrf
        <div class="mb-3">
            <label class="form-label text-light">Title</label>
            <input type="text" class="form-control" name="title" value="<?php echo isset($post->title) ? $post->title : ''; ?>">
        </div>
        <div class="mb-3">
            <label class="form-label text-light">Description</label>
            <textarea class="form-control" rows="3" name="description"><?php echo isset($post->description) ? $post->description : ''; ?></textarea>
        </div>

        <div class="mb-3">
            <label class="form-label text-light">Post Creator</label>
            <select class="form-control" name="user_id">

                @foreach ($users as $user)
                    <option value="{{ $user->id }}" <?php echo $user->name == $post->user->name ? 'selected' : ''; ?>>{{ $user->name }}</option>
                @endforeach
            </select>
        </div>
        <div class="mb-3">
            <label class="form-label text-light">Post Image</label>
            <div class="d-flex gap-4 align-items-center">
                @if (!empty($post->img_path))
                    <img class="d-block mt-2" src="/storage/{{ explode('/', $post->img_path)[1] }}" alt="post_image"
                        width="200" height="200">
                @endif
                <label class="text-white">Upload a new image</label>
                <input type="file" name="post_img" class="text-white mt-2" id="post_img">
            </div>
        </div>

        <button class="btn btn-warning">Edit Post</button>
    </form>
@endsection
