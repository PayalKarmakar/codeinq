<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BlogPostController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = BlogPost::where('is_published', true);

        if ($request->has('limit')) {
            $query->limit($request->limit);
        }

        $posts = $query->orderBy('published_at', 'desc')->get();

        return response()->json($posts);
    }

    public function show(string $slug): JsonResponse
    {
        $post = BlogPost::where('slug', $slug)
            ->where('is_published', true)
            ->firstOrFail();

        // Increment views
        $post->increment('views');

        return response()->json($post);
    }
}
