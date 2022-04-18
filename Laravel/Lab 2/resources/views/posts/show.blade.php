@extends('layouts.app')

@section('title')
    Show post
@endsection

@section('content')
    <div class="h1 text-center mt-3">Post Info.</div>
    <div class="card bg-dark my-5">
        <h5 class="card-header">Post Info.</h5>
        <div class="card-body" style="background-color:rgb(50,50,50);">
            <div class="info_row d-flex align-items-start gap-2">
                <div class="d-flex card-title h5">Title :-</div>
                <div class="d-flex">{{ $post->title }}</div>
            </div>
            <div class="d-flex card-title h5 mt-2">Description :-</div>
            <div class="card-text mb-3">{{ $post->description }}</div>
            <div class="info_row d-flex align-items-start gap-2">
                <div class="d-flex card-title h5">Created at :-</div>
                <div class="d-flex">{{ $post->created_at->format('l jS \of F Y H:i:s A') }}</div>
            </div>
        </div>
    </div>
    <div class="card bg-dark my-5">
        <h5 class="card-header">Post Creator Info.</h5>
        <div class="card-body" style="background-color:rgb(50,50,50);">
            <div class="info_row d-flex align-items-start gap-2">
                <div class="d-flex card-title h5">Name :-</div>
                <div class="d-flex">{{ $post->user->name }}</div>
            </div>
            <div class="info_row d-flex align-items-start gap-2">
                <div class="d-flex card-title h5">Email :-</div>
                <div class="d-flex">{{ $post->user->email }}</div>
            </div>
        </div>
    </div>
@endsection
