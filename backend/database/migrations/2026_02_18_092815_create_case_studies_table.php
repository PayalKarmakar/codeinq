<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('case_studies', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('client');
            $table->string('industry');
            $table->text('description');
            $table->string('image')->nullable();
            $table->json('metrics')->nullable(); // Array of {label, value, icon}
            $table->json('tags')->nullable(); // Array of strings
            $table->string('gradient')->nullable();
            $table->integer('order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('case_studies');
    }
};
