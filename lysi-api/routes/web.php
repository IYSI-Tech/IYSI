<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'name' => 'LYSI API',
        'message' => 'Welcome to NextEd'
    ]);
});
