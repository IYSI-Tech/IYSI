<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'name' => 'NextEd API',
        'message' => 'Welcome to NextEd'
    ]);
});
