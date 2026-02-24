<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('process_steps', function (Blueprint $table) {
            $table->id();
            $table->string('number'); // e.g., '01', '02'
            $table->string('title');
            $table->string('subtitle');
            $table->text('description');
            $table->string('icon')->nullable();
            $table->string('color')->nullable();
            $table->string('duration');
            $table->json('deliverables')->nullable(); // Array of strings
            $table->integer('order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('process_steps');
    }
};
