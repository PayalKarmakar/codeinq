<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Solution;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class AdminSolutionController extends Controller
{
    public function index(): JsonResponse
    {
        $solutions = Solution::orderBy('order')->get();
        return response()->json($solutions);
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|max:2048',
            'outcomes' => 'nullable|array',
            'features' => 'nullable|array',
            'gradient' => 'nullable|string|max:255',
            'is_active' => 'boolean',
            'order' => 'integer',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $data = $validator->validated();

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('solutions', 'public');
        }

        $solution = Solution::create($data);

        return response()->json([
            'success' => true,
            'message' => 'Solution created successfully',
            'data' => $solution
        ], 201);
    }

    public function show($id): JsonResponse
    {
        $solution = Solution::findOrFail($id);
        return response()->json($solution);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $solution = Solution::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|max:2048',
            'outcomes' => 'nullable|array',
            'features' => 'nullable|array',
            'gradient' => 'nullable|string|max:255',
            'is_active' => 'boolean',
            'order' => 'integer',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $data = $validator->validated();

        if ($request->hasFile('image')) {
            if ($solution->image) {
                Storage::disk('public')->delete($solution->image);
            }
            $data['image'] = $request->file('image')->store('solutions', 'public');
        }

        $solution->update($data);

        return response()->json([
            'success' => true,
            'message' => 'Solution updated successfully',
            'data' => $solution
        ]);
    }

    public function destroy($id): JsonResponse
    {
        $solution = Solution::findOrFail($id);
        
        if ($solution->image) {
            Storage::disk('public')->delete($solution->image);
        }
        
        $solution->delete();

        return response()->json([
            'success' => true,
            'message' => 'Solution deleted successfully'
        ]);
    }
}
