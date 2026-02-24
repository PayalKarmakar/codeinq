<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProcessStep extends Model
{
    protected $fillable = [
        'number',
        'title',
        'subtitle',
        'description',
        'icon',
        'color',
        'duration',
        'deliverables',
        'order',
        'is_active',
    ];

    protected $casts = [
        'deliverables' => 'array',
        'is_active' => 'boolean',
        'order' => 'integer',
    ];
}
