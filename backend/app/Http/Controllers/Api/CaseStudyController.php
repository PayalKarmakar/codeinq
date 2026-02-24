<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CaseStudy;
use Illuminate\Http\JsonResponse;

class CaseStudyController extends Controller
{
    public function index(): JsonResponse
    {
        $caseStudies = CaseStudy::where('is_active', true)
            ->orderBy('order')
            ->get();

        return response()->json($caseStudies);
    }
}
