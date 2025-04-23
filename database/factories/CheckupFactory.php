<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Checkup>
 */
class CheckupFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'patient_id' => $this->faker->numberBetween(5, 10),
            'doctor_id' => $this->faker->numberBetween(2, 4),
            'checkup_date' => $this->faker->dateTimeBetween('-1 year', '+1 year'),
            'note' => $this->faker->text(200),
            'price' => $this->faker->numberBetween(1, 100) * 1000,
        ];
    }
}
