@extends('layouts.app')

@section('header')
    <style>
        .media-body * {
            color: white !important;
        }

    </style>
    <title>{{ $post->title }}</title>
@endsection

@section('content')
    <div class="h1 text-center mt-3 text-light">Post Info.</div>
    <div class="card bg-dark my-5">
        <h5 class="card-header text-light">Post Info.</h5>
        <div class="card-body" style="background-color:rgb(50,50,50);">
            <div class="info_row d-flex align-items-start gap-2">
                <div class="d-flex card-title h5 text-light">Title :-</div>
                <div class="d-flex text-light">{{ $post->title }}</div>
            </div>
            <div class="d-flex card-title h5 mt-2 text-light">Description :-</div>
            <div class="card-text mb-3 text-light">{{ $post->description }}</div>
            <div class="info_row d-flex align-items-start gap-2">
                <div class="d-flex card-title h5 text-light">Created at :-</div>
                <div class="d-flex text-light">{{ $post->created_at->format('l jS \of F Y H:i:s A') }}</div>
            </div>
            @if (!empty($post->img_path))
                <img class="d-block mt-2" src="/storage/{{ explode('/', $post->img_path)[1] }}" alt="post_image"
                    width="200" height="200">
            @endif
        </div>
    </div>
    <div class="card bg-dark my-5">
        <h5 class="card-header text-light">Post Creator Info.</h5>
        <div class="card-body" style="background-color:rgb(50,50,50);">
            <div class="info_row d-flex align-items-start gap-2">
                <div class="d-flex card-title h5 text-light">Name :-</div>
                <div class="d-flex text-light">{{ $post->user->name }}</div>
            </div>
            <div class="info_row d-flex align-items-start gap-2">
                <div class="d-flex card-title h5 text-light">Email :-</div>
                <div class="d-flex text-light">{{ $post->user->email }}</div>
            </div>
        </div>
    </div>
    @comments([
    'model' => $post,
    'perPage' => 2
    ])
@endsection
