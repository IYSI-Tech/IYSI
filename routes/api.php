<?php

use App\Http\Controllers\API\CommunityController;
use App\Http\Controllers\API\ContactController;
use App\Http\Controllers\API\NewsletterController;
use App\Http\Controllers\API\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'name' => 'NextEd API',
        'message' => 'Welcome to NextEd'
    ]);
});

Route::post('register', [UserController::class, 'create']);
Route::post('newsletter', [NewsletterController::class, 'create']);
Route::post('community', [CommunityController::class, 'create']);
Route::post('contact', [ContactController::class, 'create']);
