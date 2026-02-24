<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ProcessStep;
use Illuminate\Http\JsonResponse;

class ProcessStepController extends Controller
{
    public function index(): JsonResponse
    {
        $steps = ProcessStep::where('is_active', true)
            ->orderBy('order')
            ->get();

        return response()->json($steps);
    }
}
