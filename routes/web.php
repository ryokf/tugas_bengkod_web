<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [App\Http\Controllers\PatientController::class, 'index'])->name('dashboard');
    Route::get('queue', [App\Http\Controllers\PatientController::class, 'queue'])->name('queue');
    Route::post('make-an-appointment', [App\Http\Controllers\PatientController::class, 'makeAnAppointment'])->name('make-an-appointment');

    Route::get('dashboard-doctor', [App\Http\Controllers\DoctorController::class, 'index'])->name('doctor.dashboard');
    Route::post('done-checkup', [App\Http\Controllers\DoctorController::class, 'doneCheckup'])->name('doctor.done-checkup');
    Route::get('medicines', [App\Http\Controllers\DoctorController::class, 'medicines'])->name('doctor.medicines');
    Route::post('medicines', [App\Http\Controllers\DoctorController::class, 'addMedicine'])->name('doctor.medicines.add');
    Route::delete('medicines/{id}', [App\Http\Controllers\DoctorController::class, 'deleteMedicine'])->name('doctor.medicines.delete');
    Route::put('medicines', [App\Http\Controllers\DoctorController::class, 'updateMedicine'])->name('doctor.medicines.edit');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
