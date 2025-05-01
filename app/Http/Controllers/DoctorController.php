<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Checkup;
use App\Models\CheckupDetail;
use App\Models\Medicine;
use App\Models\User;

class DoctorController extends Controller
{
    public function index()
    {
        if(auth()->user()->role == 'patient') {
            return redirect()->route('dashboard');
        }

        $checkups = Checkup::with(['checkupDetails.medicine', 'patient'])
            ->where('doctor_id', auth()->user()->id)
            ->where('price', '>', 0)
            ->orderBy('created_at', 'desc')
            ->get();

        $checkup_queue = Checkup::with(['checkupDetails.medicine', 'patient'])
            ->where('doctor_id', auth()->user()->id)
            ->where('price', 0)
            ->orderBy('created_at', 'desc')
            ->get();

        $medicines = Medicine::all();

        return Inertia::render('doctor/dashboard', [
            'checkups' => $checkups,
            'checkup_queue' => $checkup_queue,
            'medicines' => $medicines,
        ]);
    }

    public function doneCheckup(Request $request) {
        // dd($request->all());
        $checkup = Checkup::find($request->id);
        if (!$checkup) {
            return redirect()->back()->with('error', 'Checkup not found');
        }
        $checkup->note = $request->note;
        $checkup->price = $request->price;
        $checkup->save();

        foreach ($request->medicines as $medicine_id) {
            CheckupDetail::create([
                'checkup_id' => $checkup->id,
                'medicine_id' => $medicine_id,
            ]);
        }

        return redirect()->route('doctor.dashboard');
    }

    public function medicines()
    {
        $medicines = Medicine::orderBy('created_at', 'desc')->get();
        return Inertia::render('doctor/medicines', [
            'medicines' => $medicines,
        ]);
    }

    public function addMedicine(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'packaging' => 'nullable|string|max:255',
            'price' => 'required|numeric',
        ]);

        Medicine::create([
            'name' => $request->name,
            'packaging' => $request->packaging,
            'price' => $request->price,
        ]);

        return redirect()->route('doctor.medicines');
    }

    public function updateMedicine(Request $request, Medicine $medicine)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'packaging' => 'nullable|string|max:255',
            'price' => 'required|numeric',
        ]);

        $medicine = $medicine->find($request->id);
        $medicine->name = $request->name;
        $medicine->packaging = $request->packaging;
        $medicine->price = $request->price;
        $medicine->save();

        return redirect()->route('doctor.medicines');
    }

    public function deleteMedicine(Medicine $medicine, $id)
    {
        $medicine->find($id)->delete();
        return redirect()->route('doctor.medicines');
    }

}
