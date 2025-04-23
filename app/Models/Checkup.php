<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Checkup extends Model
{
    /** @use HasFactory<\Database\Factories\CheckupFactory> */
    use HasFactory;

    protected $fillable = [
        'patient_id',
        'doctor_id',
        'checkup_date',
        'note',
        'price',
    ];

    public function checkupDetails()
    {
        return $this->hasMany(CheckupDetail::class, 'checkup_id', 'id');
    }

    public function patient()
    {
        return $this->belongsTo(User::class, 'patient_id', 'id');
    }
    public function doctor()
    {
        return $this->belongsTo(User::class, 'doctor_id', 'id');
    }
};
