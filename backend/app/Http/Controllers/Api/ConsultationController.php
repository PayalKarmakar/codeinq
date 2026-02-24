<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\ConsultationSubmitted;
use App\Models\Consultation;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ConsultationController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'company' => 'nullable|string|max:255',
            'message' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $consultation = Consultation::create([
            'name' => $request->name,
            'email' => $request->email,
            'company' => $request->company,
            'message' => $request->message,
            'status' => 'pending',
        ]);

        // Send email notification
        try {
            Mail::to('codeinq.tech@gmail.com')->send(new ConsultationSubmitted($consultation));
        } catch (\Exception $e) {
            // Log the error but don't fail the request
            \Log::error('Failed to send consultation email: ' . $e->getMessage());
        }

        return response()->json([
            'success' => true,
            'message' => 'Consultation request submitted successfully',
            'data' => $consultation
        ], 201);
    }
}
