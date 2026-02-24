<?php

use App\Http\Controllers\Api\Admin\AdminCaseStudyController;
use App\Http\Controllers\Api\Admin\AdminConsultationController;
use App\Http\Controllers\Api\Admin\AdminIndustryController;
use App\Http\Controllers\Api\Admin\AdminProcessStepController;
use App\Http\Controllers\Api\Admin\AdminServiceController;
use App\Http\Controllers\Api\Admin\AdminSolutionController;
use App\Http\Controllers\Api\Admin\AdminTestimonialController;
use App\Http\Controllers\Api\Admin\AuthController;
use App\Http\Controllers\Api\BlogPostController;
use App\Http\Controllers\Api\CaseStudyController;
use App\Http\Controllers\Api\ConsultationController;
use App\Http\Controllers\Api\IndustryController;
use App\Http\Controllers\Api\ProcessStepController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\SolutionController;
use App\Http\Controllers\Api\TeamMemberController;
use App\Http\Controllers\Api\TestimonialController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    // Public API routes
    Route::get('/services', [ServiceController::class, 'index']);
    Route::get('/solutions', [SolutionController::class, 'index']);
    Route::get('/industries', [IndustryController::class, 'index']);
    Route::get('/case-studies', [CaseStudyController::class, 'index']);
    Route::get('/testimonials', [TestimonialController::class, 'index']);
    Route::get('/process-steps', [ProcessStepController::class, 'index']);
    Route::get('/team-members', [TeamMemberController::class, 'index']);
    Route::get('/blog-posts', [BlogPostController::class, 'index']);
    Route::get('/blog-posts/{slug}', [BlogPostController::class, 'show']);
    
    // Consultation submission
    Route::post('/consultations', [ConsultationController::class, 'store']);

    // Admin Authentication
    Route::prefix('admin')->group(function () {
        Route::post('/login', [AuthController::class, 'login']);
        
        // Protected admin routes
        Route::middleware('auth:sanctum')->group(function () {
            Route::post('/logout', [AuthController::class, 'logout']);
            Route::get('/me', [AuthController::class, 'me']);
            Route::post('/change-password', [AuthController::class, 'changePassword']);
            
            // Admin CRUD routes
            Route::apiResource('services', AdminServiceController::class);
            Route::apiResource('solutions', AdminSolutionController::class);
            Route::apiResource('industries', AdminIndustryController::class);
            Route::apiResource('case-studies', AdminCaseStudyController::class);
            Route::apiResource('testimonials', AdminTestimonialController::class);
            Route::apiResource('process-steps', AdminProcessStepController::class);
            
            // Consultations
            Route::get('/consultations', [AdminConsultationController::class, 'index']);
            Route::get('/consultations/{id}', [AdminConsultationController::class, 'show']);
            Route::patch('/consultations/{id}/status', [AdminConsultationController::class, 'updateStatus']);
        });
    });
});
