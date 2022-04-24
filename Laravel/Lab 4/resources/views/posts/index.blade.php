@extends('layouts.app')

@section('header')
    <title>Posts</title>
@endsection

@section('content')
    {{-- After successful operation message --}}
    @if (session('success'))
        <div class="alert alert-success w-75 h5">{{ session('success') }}</div>
    @endif

    <div class="text-center">
        <a href="{{ route('posts.create') }}" class="mt-4 btn btn-success">Create Post</a>
    </div>
    <table class="table mt-4">
        <thead>
            <tr>
                <th scope="col" class="text-light">#</th>
                <th scope="col" class="text-light">Title</th>
                <th scope="col" class="text-light">Slug</th>
                <th scope="col" class="text-light">Posted By</th>
                <th scope="col" class="text-light">Created At</th>
                <th scope="col" class="text-light">Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($posts as $post)
                <tr>
                    <td class="text-light"></td>
                    <td class="text-light">{{ $post->title }}</td>
                    <td class="text-light">{{ $post->slug }}</td>
                    <td class="text-light">{{ $post->user->name }}</td>
                    <td class="text-light">{{ $post->created_at->format('l jS \of F Y H:i:s A') }}</td>
                    <td class="gap-2 text-light">
                        <a href="{{ route('posts.show', ['post' => $post->slug]) }}" class="btn btn-primary">View</a>
                        <a href="{{ route('posts.edit', ['post' => $post->id]) }}" class="btn btn-warning">Edit</a>
                        <a href="{{ route('posts.delete', ['post' => $post->id]) }}" class="btn btn-danger"
                            data-bs-toggle="modal" data-bs-target="#exampleModal"
                            onclick="updateConfirmUri(this)">Delete</a>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
    <div class="text-center">
        {{ $posts->links('pagination::bootstrap-5') }}
    </div>



    <!-- Delete confirmation model -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content  bg-dark">
                <div class="modal-header" style="border-bottom: 2px solid rgb(70,70,70)">
                    <h5 class="modal-title text-light" id="exampleModalLabel">Delete confirmation</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-light">
                    Are you sure you want to delete this post?
                </div>
                <div class="modal-footer" style="border-top: 2px solid rgb(70,70,70)">
                    <a type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</a>

                    <form id="delete_form" method="post" action="#">
                        @csrf
                        @method('DELETE')
                        <input type="submit" class="btn btn-danger" value="Delete">
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Updating confirmation box delete button uri with the id of the clicked post.
        const updateConfirmUri = (e) => document.getElementById("delete_form").action = e.getAttribute("href");
    </script>
@endsection
