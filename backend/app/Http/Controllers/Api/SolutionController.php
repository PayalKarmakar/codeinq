<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Solution;
use Illuminate\Http\JsonResponse;

class SolutionController extends Controller
{
    public function index(): JsonResponse
    {
        $solutions = Solution::where('is_active', true)
            ->orderBy('order')
            ->get();

        return response()->json($solutions);
    }
}
