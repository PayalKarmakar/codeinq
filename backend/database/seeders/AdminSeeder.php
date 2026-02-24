<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'info.codeinqtech@gmail.com'],
            [
                'name' => 'admin',
                'email' => 'info.codeinqtech@gmail.com',
                'password' => Hash::make('codeinqTech@2026'),
                'email_verified_at' => now(),
            ]
        );
    }
}
