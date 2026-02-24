<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CaseStudy extends Model
{
    protected $fillable = [
        'title',
        'client',
        'industry',
        'description',
        'image',
        'metrics',
        'tags',
        'gradient',
        'order',
        'is_active',
    ];

    protected $casts = [
        'metrics' => 'array',
        'tags' => 'array',
        'is_active' => 'boolean',
        'order' => 'integer',
    ];
}
