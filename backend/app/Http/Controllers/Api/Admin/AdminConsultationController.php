<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Consultation;
use Illuminate\Http\JsonResponse;

class AdminConsultationController extends Controller
{
    public function index(): JsonResponse
    {
        $consultations = Consultation::orderBy('created_at', 'desc')->get();
        return response()->json($consultations);
    }

    public function show($id): JsonResponse
    {
        $consultation = Consultation::findOrFail($id);
        return response()->json($consultation);
    }

    public function updateStatus($id): JsonResponse
    {
        $consultation = Consultation::findOrFail($id);
        
        $newStatus = $consultation->status === 'pending' ? 'contacted' : 
                    ($consultation->status === 'contacted' ? 'completed' : 'pending');
        
        $consultation->status = $newStatus;
        $consultation->save();

        return response()->json([
            'success' => true,
            'message' => 'Status updated successfully',
            'data' => $consultation
        ]);
    }
}
