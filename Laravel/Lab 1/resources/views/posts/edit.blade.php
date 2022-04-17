@extends('layouts.app')

@section('title')
    Edit
@endsection

@section('content')
    {{-- After successful post edit div --}}
    @if (isset($successfulEdit))
        <div class="alert alert-success w-75 h5">{{ $successfulEdit }}</div>
    @endif

    <div class="h1 text-center mt-3">Edit post</div>

    <form method="post" action="{{ route('posts.update', $postId) }}">
        @method('PUT')
        @csrf
        <div class="mb-3">
            <label class="form-label">Title</label>
            <input type="text" class="form-control" name="title" value="<?php echo isset($oldTitle) ? $oldTitle : ''; ?>">
        </div>
        <div class="mb-3">
            <label class="form-label">Description</label>
            <textarea class="form-control" rows="3" name="description"><?php echo isset($oldDescription) ? $oldDescription : ''; ?></textarea>
        </div>

        <div class="mb-3">
            <label class="form-label">Post Creator</label>
            <select class="form-control" name="creator" value="Mohamed">
                <option value="Hossam" <?php echo isset($oldCreator) && $oldCreator == 'Hossam' ? 'selected' : ''; ?>>Hossam</option>
                <option value="Mohamed" <?php echo isset($oldCreator) && $oldCreator == 'Mohamed' ? 'selected' : ''; ?>>Mohamed</option>
                <option value="Ahmed" <?php echo isset($oldCreator) && $oldCreator == 'Ahmed' ? 'selected' : ''; ?>>Ahmed</option>
            </select>
        </div>

        <button class="btn btn-warning">Edit Post</button>
    </form>
@endsection
