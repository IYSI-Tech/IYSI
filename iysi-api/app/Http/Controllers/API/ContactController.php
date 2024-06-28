<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Requests\ContactRequest;
use App\Services\ContactService;

class ContactController extends Controller
{
    public function create(ContactRequest $request, ContactService $service)
    {
        try {

            $contact = $service->create($request->validated());

            return response()->json([
                'status'   => true,
                'contact'  => $contact,
                'message'  => 'Contact Added successfully'
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
