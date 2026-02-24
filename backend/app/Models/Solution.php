<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Solution extends Model
{
    protected $fillable = [
        'title',
        'description',
        'image',
        'outcomes',
        'features',
        'gradient',
        'order',
        'is_active',
    ];

    protected $casts = [
        'outcomes' => 'array',
        'features' => 'array',
        'is_active' => 'boolean',
        'order' => 'integer',
    ];
}
