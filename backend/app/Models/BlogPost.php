<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'content',
        'featured_image',
        'tags',
        'author',
        'published_at',
        'is_published',
        'views',
    ];

    protected $casts = [
        'tags' => 'array',
        'is_published' => 'boolean',
        'views' => 'integer',
        'published_at' => 'date',
    ];
}
