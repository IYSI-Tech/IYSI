<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Services\NewsletterService;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Requests\NewsletterRequest;

class NewsletterController extends Controller
{
    public function create(NewsletterRequest $request, NewsletterService $service)
    {
        try {
            $newsletter = $service->create($request->validated());

            return response()->json([
                'status'        => true,
                'newsletter'    => $newsletter,
                'message'       => 'Newsletter Added successfully'
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
