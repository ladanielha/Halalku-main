<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kota extends Model
{
    use HasFactory;
    protected $table = 'kota';

    protected $fillable = [
        'namakota',
        'gambar',
    ];

    protected $primaryKey = 'kota_id';
    
    protected $casts = [
        'created_at' => 'datetime',
    ];

}
