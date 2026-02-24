<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\CaseStudy;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class AdminCaseStudyController extends Controller
{
    public function index(): JsonResponse
    {
        $caseStudies = CaseStudy::orderBy('order')->get();
        return response()->json($caseStudies);
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'client' => 'nullable|string|max:255',
            'industry' => 'nullable|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|max:2048',
            'metrics' => 'nullable|array',
            'tags' => 'nullable|array',
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
            $data['image'] = $request->file('image')->store('case-studies', 'public');
        }

        $caseStudy = CaseStudy::create($data);

        return response()->json([
            'success' => true,
            'message' => 'Case study created successfully',
            'data' => $caseStudy
        ], 201);
    }

    public function show($id): JsonResponse
    {
        $caseStudy = CaseStudy::findOrFail($id);
        return response()->json($caseStudy);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $caseStudy = CaseStudy::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'client' => 'nullable|string|max:255',
            'industry' => 'nullable|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|max:2048',
            'metrics' => 'nullable|array',
            'tags' => 'nullable|array',
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
            if ($caseStudy->image) {
                Storage::disk('public')->delete($caseStudy->image);
            }
            $data['image'] = $request->file('image')->store('case-studies', 'public');
        }

        $caseStudy->update($data);

        return response()->json([
            'success' => true,
            'message' => 'Case study updated successfully',
            'data' => $caseStudy
        ]);
    }

    public function destroy($id): JsonResponse
    {
        $caseStudy = CaseStudy::findOrFail($id);
        
        if ($caseStudy->image) {
            Storage::disk('public')->delete($caseStudy->image);
        }
        
        $caseStudy->delete();

        return response()->json([
            'success' => true,
            'message' => 'Case study deleted successfully'
        ]);
    }
}
