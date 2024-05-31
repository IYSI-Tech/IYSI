<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Services\CommunityService;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Requests\CommunityRequest;

class CommunityController extends Controller
{
    public function create(CommunityRequest $request, CommunityService $service)
    {
        try {
            $community = $service->create($request->validated());

            return response()->json([
                'status'     => true,
                'community'  => $community,
                'message'    => 'Community Added successfully'
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
