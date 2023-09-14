<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
    private $posts = [
        'titleA',
        'titleB',
        'titleC'
    ];

    public function index() {
        return view('index')
            ->with(['posts' => $this->posts]);
    }

    public function show($id) {
        return view('posts.show')
            ->with(['posts' => $this->posts[$id]]);
    }
}
