<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [App\Http\Controllers\PatientController::class, 'index'])->name('dashboard');
    Route::post('make-an-appointment', [App\Http\Controllers\PatientController::class, 'makeAnAppointment'])->name('make-an-appointment');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
