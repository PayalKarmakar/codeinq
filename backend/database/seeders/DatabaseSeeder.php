<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            AdminSeeder::class,
            ServiceSeeder::class,
            SolutionSeeder::class,
            IndustrySeeder::class,
            CaseStudySeeder::class,
            TestimonialSeeder::class,
            ProcessStepSeeder::class,
        ]);
    }
}
