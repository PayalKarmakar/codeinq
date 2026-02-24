<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Industry;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class AdminIndustryController extends Controller
{
    public function index(): JsonResponse
    {
        $industries = Industry::orderBy('order')->get();
        return response()->json($industries);
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'highlight' => 'nullable|string|max:255',
            'icon' => 'nullable|string|max:255',
            'image' => 'nullable|image|max:2048',
            'gradient' => 'nullable|string|max:255',
            'bg_gradient' => 'nullable|string|max:255',
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
            $data['image'] = $request->file('image')->store('industries', 'public');
        }

        $industry = Industry::create($data);

        return response()->json([
            'success' => true,
            'message' => 'Industry created successfully',
            'data' => $industry
        ], 201);
    }

    public function show($id): JsonResponse
    {
        $industry = Industry::findOrFail($id);
        return response()->json($industry);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $industry = Industry::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'highlight' => 'nullable|string|max:255',
            'icon' => 'nullable|string|max:255',
            'image' => 'nullable|image|max:2048',
            'gradient' => 'nullable|string|max:255',
            'bg_gradient' => 'nullable|string|max:255',
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
            if ($industry->image) {
                Storage::disk('public')->delete($industry->image);
            }
            $data['image'] = $request->file('image')->store('industries', 'public');
        }

        $industry->update($data);

        return response()->json([
            'success' => true,
            'message' => 'Industry updated successfully',
            'data' => $industry
        ]);
    }

    public function destroy($id): JsonResponse
    {
        $industry = Industry::findOrFail($id);
        
        if ($industry->image) {
            Storage::disk('public')->delete($industry->image);
        }
        
        $industry->delete();

        return response()->json([
            'success' => true,
            'message' => 'Industry deleted successfully'
        ]);
    }
}
