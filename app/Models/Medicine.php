<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medicine extends Model
{
    /** @use HasFactory<\Database\Factories\MedicineFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'packaging',
        'price',
    ];
    public function checkupDetails()
    {
        return $this->hasMany(CheckupDetail::class, 'medicine_id', 'id');
    }
}
