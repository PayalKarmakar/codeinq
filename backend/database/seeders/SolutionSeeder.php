<?php

namespace Database\Seeders;

use App\Models\Solution;
use Illuminate\Database\Seeder;

class SolutionSeeder extends Seeder
{
    public function run(): void
    {
        $solutions = [
            [
                'title' => 'SaaS Platforms',
                'description' => 'Launch and scale software-as-a-service products that customers love',
                'image' => 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwcGxhdGZvcm0lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwMTAxMTI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
                'outcomes' => [
                    ['icon' => 'TrendingUp', 'text' => '300% faster user onboarding'],
                    ['icon' => 'DollarSign', 'text' => '5x revenue growth in 12 months'],
                    ['icon' => 'Users', 'text' => '99.9% platform uptime'],
                ],
                'features' => ['Multi-tenant architecture', 'Subscription billing', 'Role-based access', 'API integrations'],
                'gradient' => 'from-[var(--primary-600)] to-[var(--primary-700)]',
                'order' => 1,
            ],
            [
                'title' => 'Automation Tools',
                'description' => 'Eliminate manual work and boost productivity with intelligent automation',
                'image' => 'https://images.unsplash.com/photo-1759143545924-beb85b33c0f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwd29ya2Zsb3clMjBzeXN0ZW18ZW58MXx8fHwxNzcwMTAxMTI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
                'outcomes' => [
                    ['icon' => 'Clock', 'text' => '80% time saved on repetitive tasks'],
                    ['icon' => 'TrendingUp', 'text' => '10x process efficiency'],
                    ['icon' => 'DollarSign', 'text' => '$500K annual cost savings'],
                ],
                'features' => ['Workflow automation', 'AI-powered decisions', 'Integration hub', 'Real-time monitoring'],
                'gradient' => 'from-[var(--secondary-600)] to-[var(--secondary-700)]',
                'order' => 2,
            ],
            [
                'title' => 'Analytics Dashboards',
                'description' => 'Transform data into actionable insights with beautiful, real-time dashboards',
                'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBjaGFydHN8ZW58MXx8fHwxNzY5OTkxNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
                'outcomes' => [
                    ['icon' => 'TrendingUp', 'text' => 'Real-time business intelligence'],
                    ['icon' => 'Users', 'text' => 'Better decision making'],
                    ['icon' => 'Clock', 'text' => '90% faster reporting'],
                ],
                'features' => ['Custom visualizations', 'Live data streaming', 'Export & sharing', 'Mobile responsive'],
                'gradient' => 'from-[var(--accent-600)] to-[var(--accent-700)]',
                'order' => 3,
            ],
            [
                'title' => 'CRM & ERP Systems',
                'description' => 'Centralize operations and customer relationships in one powerful platform',
                'image' => 'https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm0lMjBzb2Z0d2FyZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzAwMzI2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
                'outcomes' => [
                    ['icon' => 'Users', 'text' => '50% improvement in customer satisfaction'],
                    ['icon' => 'TrendingUp', 'text' => '40% increase in sales conversion'],
                    ['icon' => 'Clock', 'text' => '60% reduction in admin work'],
                ],
                'features' => ['Customer 360 view', 'Sales pipeline', 'Inventory management', 'Advanced reporting'],
                'gradient' => 'from-[var(--primary-600)] to-[var(--secondary-600)]',
                'order' => 4,
            ],
        ];

        foreach ($solutions as $solution) {
            Solution::create($solution);
        }
    }
}
