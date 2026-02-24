<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $services = [
            [
                'title' => 'Web Development',
                'description' => 'Build scalable, high-performance web applications that drive business growth and enhance user engagement.',
                'icon' => 'Code',
                'gradient' => 'from-[var(--primary-500)] to-[var(--primary-700)]',
                'bg_gradient' => 'from-[var(--primary-50)] to-[var(--primary-100)]',
                'icon_bg' => 'bg-[var(--primary-100)]',
                'icon_color' => 'text-[var(--primary-600)]',
                'order' => 1,
            ],
            [
                'title' => 'Mobile Apps',
                'description' => 'Native and cross-platform mobile solutions that deliver seamless experiences on iOS and Android.',
                'icon' => 'Smartphone',
                'gradient' => 'from-[var(--secondary-500)] to-[var(--secondary-700)]',
                'bg_gradient' => 'from-[var(--secondary-50)] to-[var(--secondary-100)]',
                'icon_bg' => 'bg-[var(--secondary-100)]',
                'icon_color' => 'text-[var(--secondary-600)]',
                'order' => 2,
            ],
            [
                'title' => 'AI Solutions',
                'description' => 'Intelligent automation and machine learning systems that transform data into actionable insights.',
                'icon' => 'Brain',
                'gradient' => 'from-[var(--accent-500)] to-[var(--accent-700)]',
                'bg_gradient' => 'from-[var(--accent-50)] to-[var(--accent-100)]',
                'icon_bg' => 'bg-[var(--accent-100)]',
                'icon_color' => 'text-[var(--accent-600)]',
                'order' => 3,
            ],
            [
                'title' => 'UI/UX Design',
                'description' => 'User-centered design that creates intuitive interfaces and delightful digital experiences.',
                'icon' => 'Palette',
                'gradient' => 'from-[var(--primary-600)] to-[var(--secondary-600)]',
                'bg_gradient' => 'from-[var(--primary-50)] to-[var(--secondary-50)]',
                'icon_bg' => 'bg-gradient-to-br from-[var(--primary-100)] to-[var(--secondary-100)]',
                'icon_color' => 'text-[var(--primary-700)]',
                'order' => 4,
            ],
            [
                'title' => 'Cloud & DevOps',
                'description' => 'Infrastructure optimization and automated deployment pipelines for faster, reliable releases.',
                'icon' => 'Cloud',
                'gradient' => 'from-[var(--secondary-600)] to-[var(--accent-600)]',
                'bg_gradient' => 'from-[var(--secondary-50)] to-[var(--accent-50)]',
                'icon_bg' => 'bg-gradient-to-br from-[var(--secondary-100)] to-[var(--accent-100)]',
                'icon_color' => 'text-[var(--secondary-700)]',
                'order' => 5,
            ],
            [
                'title' => 'Maintenance & Support',
                'description' => 'Ongoing technical support, security updates, and performance optimization to keep your software running smoothly.',
                'icon' => 'Wrench',
                'gradient' => 'from-[var(--accent-500)] to-[var(--primary-600)]',
                'bg_gradient' => 'from-[var(--accent-50)] to-[var(--primary-50)]',
                'icon_bg' => 'bg-gradient-to-br from-[var(--accent-100)] to-[var(--primary-100)]',
                'icon_color' => 'text-[var(--accent-700)]',
                'order' => 6,
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}
