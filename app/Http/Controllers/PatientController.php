<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Checkup;
use App\Models\CheckupDetail;
use App\Models\Medicine;
use App\Models\User;


class PatientController extends Controller
{
    public function index()
    {
        $checkups = Checkup::with(['checkupDetails.medicine', 'doctor', 'patient'])
            ->where('patient_id', auth()->user()->id)
            ->where('price', '>', 0)
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('dashboard', [
            'checkups' => $checkups,
        ]);
    }

    public function makeAnAppointment(Request $request)
    {
        // return $request->all();

        $request->validate([
            'doctor_id' => 'required|exists:users,id',
            'checkup_date' => 'required|date',
            'note' => 'nullable|string|max:255',
        ]);

        $checkup = Checkup::create([
            'patient_id' => auth()->user()->id,
            'doctor_id' => $request->doctor_id,
            'checkup_date' => $request->checkup_date,
            'note' => $request->note,
            'price' => 0,
        ]);

        return redirect()->route('dashboard');
    }

    public function queue()
    {
        $doctors = User::where('role', 'doctor')->get();
        return Inertia::render('queue', [
            'doctors' => $doctors,
        ]);
    }
}
