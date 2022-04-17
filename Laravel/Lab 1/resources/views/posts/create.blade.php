@extends('layouts.app')

@section('title')
    Create
@endsection

@section('content')
    {{-- After successful post creation div --}}
    @if (isset($successfulCreation))
        <div class="alert alert-success w-75 h5">{{ $successfulCreation }}</div>
    @endif

    <div class="h1 text-center mt-3">Create a post</div>

    <form method="POST" action="{{ route('posts.store') }}">
        @csrf
        <div class="mb-3">
            <label class="form-label">Title</label>
            <input type="text" class="form-control" name="title">
        </div>
        <div class="mb-3">
            <label class="form-label">Description</label>
            <textarea class="form-control" rows="3" name="description"></textarea>
        </div>

        <div class="mb-3">
            <label class="form-label">Post Creator</label>
            <select class="form-control" name="creator" value="Ahmed">
                <option value="Hossam">Hossam</option>
                <option value="Mohamed">Mohamed</option>
                <option value="Ahmed">Ahmed</option>
            </select>
        </div>

        <button class="btn btn-success">Submit Post</button>
    </form>
    <script>
        if (window.history.replaceState) {
            window.history.replaceState(null, null, window.location.href);
        }
    </script>
@endsection
