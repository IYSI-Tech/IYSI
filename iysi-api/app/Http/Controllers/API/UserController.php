<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function create(UserRequest $request, UserService $service)
    {
        try {
            $user = $service->create($request->validated());

            return response()->json([
                'status'  => true,
                'user'    => $user,
                'message' => 'Registered successfully'
            ], 201);

        } catch (\Throwable $th) {

            Log::error($th->getMessage());

            return response()->json([
                'status' => false,
                'message' => 'An error occurred while at the server side'
            ], 403);

        }
    }
}
