@extends('layouts.app')

@section('title')
    Create
@endsection

@section('content')
    <div class="h1 text-center mt-3 text-light">Create a post</div>

    <form method="POST" action="{{ route('posts.store') }}" enctype="multipart/form-data">
        @csrf
        <div class="mb-3">
            <label class="form-label text-light">Title</label>
            <input type="text" class="form-control" name="title">
        </div>
        <div class="mb-3">
            <label class="form-label text-light">Description</label>
            <textarea class="form-control" rows="3" name="description"></textarea>
        </div>

        <div class="mb-3">
            <label class="form-label text-light">Post Creator</label>
            <select class="form-control" name="user_id">
                @foreach ($users as $user)
                    <option value="{{ $user->id }}">{{ $user->name }}</option>
                @endforeach
            </select>
        </div>
        <input type="file" name="post_img" class="text-white mt-2" id="post_img">
        <button type="submit" class="d-block mt-4 btn btn-success">Submit Post</button>
    </form>
    <script>
        if (window.history.replaceState) {
            window.history.replaceState(null, null, window.location.href);
        }
    </script>
@endsection
