<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Industry;
use Illuminate\Http\JsonResponse;

class IndustryController extends Controller
{
    public function index(): JsonResponse
    {
        $industries = Industry::where('is_active', true)
            ->orderBy('order')
            ->get();

        return response()->json($industries);
    }
}
