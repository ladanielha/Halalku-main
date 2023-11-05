<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class nilaimakananahp extends Model
{
    use HasFactory;
    protected $table = 'nilaimakananahp';

    protected $fillable = [
        'makanan_id',
        'rate_harga',
        'rate_kualitas',
        'rate_gizi',
        'rate_porsi'
    ];

    protected $primaryKey = 'nilaialt_id';

    protected $casts = [
        'created_at' => 'datetime',
    ];
}
