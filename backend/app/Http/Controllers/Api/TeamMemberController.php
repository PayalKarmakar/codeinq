<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TeamMember;
use Illuminate\Http\JsonResponse;

class TeamMemberController extends Controller
{
    public function index(): JsonResponse
    {
        $members = TeamMember::where('is_active', true)
            ->orderBy('order')
            ->get();

        return response()->json($members);
    }
}
