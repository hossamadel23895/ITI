<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravelista\Comments\Commentable;
use Cviebrock\EloquentSluggable\Sluggable;

class Post extends Model {
    use HasFactory;
    use Commentable;
    use Sluggable;

    protected $fillable = [
        'title',
        'description',
        'img_path',
        'user_id',
    ];

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
