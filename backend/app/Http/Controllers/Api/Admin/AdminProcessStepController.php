<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\ProcessStep;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdminProcessStepController extends Controller
{
    public function index(): JsonResponse
    {
        $processSteps = ProcessStep::orderBy('order')->get();
        return response()->json($processSteps);
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'number' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'description' => 'required|string',
            'icon' => 'nullable|string|max:255',
            'color' => 'nullable|string|max:255',
            'duration' => 'nullable|string|max:255',
            'deliverables' => 'nullable|array',
            'is_active' => 'boolean',
            'order' => 'integer',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $processStep = ProcessStep::create($validator->validated());

        return response()->json([
            'success' => true,
            'message' => 'Process step created successfully',
            'data' => $processStep
        ], 201);
    }

    public function show($id): JsonResponse
    {
        $processStep = ProcessStep::findOrFail($id);
        return response()->json($processStep);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $processStep = ProcessStep::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'number' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'description' => 'required|string',
            'icon' => 'nullable|string|max:255',
            'color' => 'nullable|string|max:255',
            'duration' => 'nullable|string|max:255',
            'deliverables' => 'nullable|array',
            'is_active' => 'boolean',
            'order' => 'integer',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $processStep->update($validator->validated());

        return response()->json([
            'success' => true,
            'message' => 'Process step updated successfully',
            'data' => $processStep
        ]);
    }

    public function destroy($id): JsonResponse
    {
        $processStep = ProcessStep::findOrFail($id);
        $processStep->delete();

        return response()->json([
            'success' => true,
            'message' => 'Process step deleted successfully'
        ]);
    }
}
