<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CheckupDetail extends Model
{
    /** @use HasFactory<\Database\Factories\CheckupDetailFactory> */
    use HasFactory;

    protected $fillable = [
        'checkup_id',
        'medicine_id',
    ];

    public function checkup()
    {
        return $this->belongsTo(Checkup::class, 'checkup_id', 'id');
    }

    public function medicine()
    {
        return $this->belongsTo(Medicine::class, 'medicine_id', 'id');
    }
}
