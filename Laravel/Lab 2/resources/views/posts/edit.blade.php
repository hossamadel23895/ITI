@extends('layouts.app')

@section('title')
    Edit
@endsection

@section('content')
    <div class="h1 text-center mt-3">Edit post</div>

    <form method="post" action="{{ route('posts.update', $postId) }}">
        @method('PUT')
        @csrf
        <div class="mb-3">
            <label class="form-label">Title</label>
            <input type="text" class="form-control" name="title" value="<?php echo isset($post->title) ? $post->title : ''; ?>">
        </div>
        <div class="mb-3">
            <label class="form-label">Description</label>
            <textarea class="form-control" rows="3" name="description"><?php echo isset($post->description) ? $post->description : ''; ?></textarea>
        </div>

        <div class="mb-3">
            <label class="form-label">Post Creator</label>
            <select class="form-control" name="user_id">

                @foreach ($users as $user)
                    <option value="{{ $user->id }}" <?php echo $user->name == $post->user->name ? 'selected' : ''; ?>>{{ $user->name }}</option>
                @endforeach
            </select>
        </div>

        <button class="btn btn-warning">Edit Post</button>
    </form>
@endsection
