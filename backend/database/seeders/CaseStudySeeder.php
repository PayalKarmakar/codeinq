<?php

namespace Database\Seeders;

use App\Models\CaseStudy;
use Illuminate\Database\Seeder;

class CaseStudySeeder extends Seeder
{
    public function run(): void
    {
        $caseStudies = [
            [
                'title' => 'FinanceFlow SaaS Platform',
                'client' => 'TechStart Inc.',
                'industry' => 'FinTech',
                'description' => 'Built a complete financial management SaaS platform from MVP to 10,000+ users in 8 months.',
                'image' => 'https://images.unsplash.com/photo-1730382624709-81e52dd294d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN1Y2Nlc3MlMjBncm93dGglMjBjaGFydHxlbnwxfHx8fDE3NzAwMTk1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
                'metrics' => [
                    ['label' => 'User Growth', 'value' => '500%', 'icon' => 'Users'],
                    ['label' => 'Revenue Increase', 'value' => '$2.5M', 'icon' => 'TrendingUp'],
                    ['label' => 'Load Time', 'value' => '-65%', 'icon' => 'Clock'],
                ],
                'tags' => ['React', 'Node.js', 'AWS', 'PostgreSQL'],
                'gradient' => 'from-[var(--primary-600)] to-[var(--primary-700)]',
                'order' => 1,
            ],
            [
                'title' => 'MediConnect Telemedicine',
                'client' => 'HealthTech Solutions',
                'industry' => 'Healthcare',
                'description' => 'Developed HIPAA-compliant telemedicine platform connecting 500+ doctors with patients remotely.',
                'image' => 'https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwMDYyOTM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
                'metrics' => [
                    ['label' => 'Active Doctors', 'value' => '500+', 'icon' => 'Users'],
                    ['label' => 'Consultations', 'value' => '50K/mo', 'icon' => 'TrendingUp'],
                    ['label' => 'Uptime', 'value' => '99.9%', 'icon' => 'Award'],
                ],
                'tags' => ['Next.js', 'WebRTC', 'HIPAA', 'Azure'],
                'gradient' => 'from-[var(--secondary-600)] to-[var(--secondary-700)]',
                'order' => 2,
            ],
            [
                'title' => 'ShopSmart E-Commerce',
                'client' => 'Retail Giants Co.',
                'industry' => 'E-Commerce',
                'description' => 'Scaled e-commerce platform to handle Black Friday traffic of 100K concurrent users with zero downtime.',
                'image' => 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NzAwNjUyNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
                'metrics' => [
                    ['label' => 'Performance', 'value' => '+300%', 'icon' => 'TrendingUp'],
                    ['label' => 'Conversion Rate', 'value' => '+85%', 'icon' => 'Award'],
                    ['label' => 'Page Speed', 'value' => '0.8s', 'icon' => 'Clock'],
                ],
                'tags' => ['Microservices', 'Redis', 'Docker', 'GraphQL'],
                'gradient' => 'from-[var(--accent-600)] to-[var(--accent-700)]',
                'order' => 3,
            ],
            [
                'title' => 'LogiTrack Fleet Management',
                'client' => 'Express Logistics',
                'industry' => 'Logistics',
                'description' => 'Real-time fleet tracking system managing 1,000+ vehicles with AI-powered route optimization.',
                'image' => 'https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBzaGlwcGluZyUyMHdhcmVob3VzZXxlbnwxfHx8fDE3NzAwNzk3MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
                'metrics' => [
                    ['label' => 'Fuel Savings', 'value' => '$800K/yr', 'icon' => 'TrendingUp'],
                    ['label' => 'Time Saved', 'value' => '40%', 'icon' => 'Clock'],
                    ['label' => 'Fleet Size', 'value' => '1,000+', 'icon' => 'Users'],
                ],
                'tags' => ['AI/ML', 'Real-time', 'Mobile', 'IoT'],
                'gradient' => 'from-[var(--primary-600)] to-[var(--secondary-600)]',
                'order' => 4,
            ],
        ];

        foreach ($caseStudies as $caseStudy) {
            CaseStudy::create($caseStudy);
        }
    }
}
