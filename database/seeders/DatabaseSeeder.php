<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Checkup;
use App\Models\CheckupDetail;
use App\Models\Medicine;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@admin.admin',
            'address' => 'Admin Address',
            'phone_number' => 'Admin Phone Number',
            'role' => 'admin',
            'password' => bcrypt('rahasia123'),
        ]);

        User::factory()->create([
            'name' => 'Doctor 1',
            'email' => 'doctor1@gmail.com',
            'address' => 'Doctor Address',
            'phone_number' => 'Doctor Phone Number',
            'role' => 'doctor',
            'password' => bcrypt('rahasia123'),
        ]);

        User::factory()->create([
            'name' => 'Doctor 2',
            'email' => 'doctor2@gmail.com',
            'address' => 'Doctor Address',
            'phone_number' => 'Doctor Phone Number',
            'role' => 'doctor',
            'password' => bcrypt('rahasia123'),
        ]);

        User::factory()->create([
            'name' => 'Doctor 3',
            'email' => 'doctor3@gmail.com',
            'address' => 'Doctor Address',
            'phone_number' => 'Doctor Phone Number',
            'role' => 'doctor',
            'password' => bcrypt('rahasia123'),
        ]);

        User::factory()->create([
            'name' => 'Patient 1',
            'email' => 'patient1@gmail.com',
            'address' => 'Patient Address',
            'phone_number' => 'Patient Phone Number',
            'role' => 'patient',
            'password' => bcrypt('rahasia123'),
        ]);

        User::factory()->create([
            'name' => 'Patient 2',
            'email' => 'patient2@gmail.com',
            'address' => 'Patient Address',
            'phone_number' => 'Patient Phone Number',
            'role' => 'patient',
            'password' => bcrypt('rahasia123'),
        ]);

        User::factory()->create([
            'name' => 'Patient 3',
            'email' => 'patient3@gmail.com',
            'address' => 'Patient Address',
            'phone_number' => 'Patient Phone Number',
            'role' => 'patient',
            'password' => bcrypt('rahasia123'),
        ]);

        User::factory()->create([
            'name' => 'Patient 4',
            'email' => 'patient4@gmail.com',
            'address' => 'Patient Address',
            'phone_number' => 'Patient Phone Number',
            'role' => 'patient',
            'password' => bcrypt('rahasia123'),
        ]);

        User::factory()->create([
            'name' => 'Patient 5',
            'email' => 'patient5@gmail.com',
            'address' => 'Patient Address',
            'phone_number' => 'Patient Phone Number',
            'role' => 'patient',
            'password' => bcrypt('rahasia123'),
        ]);

        User::factory()->create([
            'name' => 'Patient 6',
            'email' => 'patient6@gmail.com',
            'address' => 'Patient Address',
            'phone_number' => 'Patient Phone Number',
            'role' => 'patient',
            'password' => bcrypt('rahasia123'),
        ]);

        Checkup::factory()->count(20)->create();
        Medicine::factory()->count(60)->create();
        CheckupDetail::factory()->count(40)->create();
    }
}
