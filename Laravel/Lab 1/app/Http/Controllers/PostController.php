<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class PostController extends Controller {
    public function index() {
        $posts = $this->readPosts();
        return view('posts.index', [
            'posts' => $posts
        ]);
    }

    public function create() {
        return view('posts.create');
    }

    public function store(Request $request) {
        $this->addPost($request, 0);
        return view('posts.create', [
            'successfulCreation' => "Your post was created successfully"
        ]);
    }


    public function edit($postId) {
        $postLine = $this->getLine($postId);
        $post = $this->parseLine($postLine);
        $oldTitle = $post['title'];
        $oldDescription = $post['description'];
        $oldCreator = $post['creatorName'];

        return view('posts.edit', [
            'postId' => $postId,
            'oldTitle' => $oldTitle,
            'oldDescription' => $oldDescription,
            'oldCreator' => $oldCreator
        ]);
    }


    public function update(Request $request, $postId) {
        $this->addPost($request, $postId);
        $oldTitle = $request->input('title');
        $oldDescription = $request->input('description');
        $oldCreator = $request->input('creator');

        return view('posts.edit', [
            'successfulEdit' => "Your post was edited successfully",
            'postId' => $postId,
            'oldTitle' => $oldTitle,
            'oldDescription' => $oldDescription,
            'oldCreator' => $oldCreator
        ]);
    }

    public function show($postId) {
        $postLine = $this->getLine($postId);
        $post = $this->parseLine($postLine);
        // Post info.
        $title = $post['title'];
        $description = $post['description'];
        $creationDate = $post['creationDate'];

        // Post creator info.
        $creatorName = $post['creatorName'];
        $creator = $this->getCreatorInfo($creatorName);
        $email = $creator['email'];

        return view('posts.show', [
            'title' => $title,
            'description' => $description,
            'creationDate' => $creationDate,

            'creatorName' => $creatorName,
            'email' => $email
        ]);
    }

    public function delete() {
        return "we are in Delete";
    }


    // Helper functions
    public function readPosts() {
        $posts = [];
        foreach (file('../app/Models/posts.txt') as $line) {
            $post = $this->parseLine($line);
            array_push($posts, $post);
        }
        return $posts;
    }

    public function addPost($request, $postId) {
        // Reading user input from the form
        $title = $request->input('title');
        $description = $request->input('description');
        $creator = $request->input('creator');
        $date = date("l jS \of F Y H:i:s A");
        // Saving post in the txt file with postId

        $filePath = "../app/Models/posts.txt";
        $postId = $postId != 0 ? $postId : count(file($filePath)) + 1;
        $postIndex = $postId - 1;
        $postsLines = file($filePath);
        $postsLines[$postIndex] = "id,title,description,creatorName,creationDate/" . $postId . "," . $title . "," . $description . "," . $creator . "," . $date . "\r" . "\n";
        file_put_contents($filePath, implode('', $postsLines));
    }

    public function parseLine($lineString) {
        $lineString = preg_replace("/\n/", "", $lineString);
        $lineString = preg_replace("/\r/", "", $lineString);    // For windows support
        $keysValues = explode("/", $lineString);
        $keys = explode(',', $keysValues[0]);
        $values = explode(',', $keysValues[1]);
        $lineParsed = array_combine($keys, $values);
        return $lineParsed;
    }

    public function getLine($postId) {
        $filePath = "../app/Models/posts.txt";
        $postIndex = $postId != 0 ? $postId - 1 : count(file($filePath)) + 1;
        $postsLines = file($filePath);
        return $postsLines[$postIndex];
    }

    public function getCreatorInfo($creatorName) {
        $filePath = "../app/Models/users.txt";
        foreach (file($filePath) as $line) {
            if (strpos($line, "$creatorName")) $creatorLine = $line;
        }
        $creator = $this->parseLine($creatorLine);
        return $creator;
    }
}
