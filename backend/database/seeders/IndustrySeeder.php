<?php

namespace Database\Seeders;

use App\Models\Industry;
use Illuminate\Database\Seeder;

class IndustrySeeder extends Seeder
{
    public function run(): void
    {
        $industries = [
            [
                'title' => 'FinTech',
                'description' => 'Secure payment systems and banking solutions',
                'highlight' => 'Blockchain • Digital Wallets • Trading Platforms',
                'icon' => 'Building2',
                'image' => 'https://images.unsplash.com/photo-1726137065519-c9a1b9eca951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYmFua2luZyUyMGFwcHxlbnwxfHx8fDE3NzAwMTU2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
                'gradient' => 'from-[var(--primary-500)] to-[var(--primary-700)]',
                'bg_gradient' => 'from-[var(--primary-50)] to-[var(--primary-100)]',
                'order' => 1,
            ],
            [
                'title' => 'Healthcare',
                'description' => 'HIPAA-compliant health management systems',
                'highlight' => 'Telemedicine • EHR • Patient Portals',
                'icon' => 'Heart',
                'image' => 'https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwMDYyOTM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
                'gradient' => 'from-[var(--secondary-500)] to-[var(--secondary-700)]',
                'bg_gradient' => 'from-[var(--secondary-50)] to-[var(--secondary-100)]',
                'order' => 2,
            ],
            [
                'title' => 'EdTech',
                'description' => 'Interactive learning and education platforms',
                'highlight' => 'LMS • Virtual Classes • Assessment Tools',
                'icon' => 'GraduationCap',
                'image' => 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1080',
                'gradient' => 'from-[var(--accent-500)] to-[var(--accent-700)]',
                'bg_gradient' => 'from-[var(--accent-50)] to-[var(--accent-100)]',
                'order' => 3,
            ],
            [
                'title' => 'E-Commerce',
                'description' => 'Scalable online stores and marketplaces',
                'highlight' => 'Checkout • Inventory • Recommendations',
                'icon' => 'ShoppingCart',
                'image' => 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NzAwNjUyNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
                'gradient' => 'from-[var(--primary-600)] to-[var(--secondary-600)]',
                'bg_gradient' => 'from-[var(--primary-50)] to-[var(--secondary-50)]',
                'order' => 4,
            ],
            [
                'title' => 'Logistics',
                'description' => 'Real-time tracking and fleet management',
                'highlight' => 'Route Optimization • Warehouse • Analytics',
                'icon' => 'Truck',
                'image' => 'https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBzaGlwcGluZyUyMHdhcmVob3VzZXxlbnwxfHx8fDE3NzAwNzk3MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
                'gradient' => 'from-[var(--secondary-600)] to-[var(--accent-600)]',
                'bg_gradient' => 'from-[var(--secondary-50)] to-[var(--accent-50)]',
                'order' => 5,
            ],
            [
                'title' => 'Real Estate',
                'description' => 'Property management and listing platforms',
                'highlight' => 'Virtual Tours • CRM • Document Management',
                'icon' => 'Home',
                'image' => 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1080',
                'gradient' => 'from-[var(--accent-500)] to-[var(--primary-600)]',
                'bg_gradient' => 'from-[var(--accent-50)] to-[var(--primary-50)]',
                'order' => 6,
            ],
            [
                'title' => 'Startups',
                'description' => 'MVP development and rapid scaling',
                'highlight' => 'Prototyping • Launch • Growth',
                'icon' => 'Rocket',
                'image' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1080',
                'gradient' => 'from-[var(--primary-500)] to-[var(--secondary-500)]',
                'bg_gradient' => 'from-[var(--primary-50)] to-[var(--secondary-50)]',
                'order' => 7,
            ],
        ];

        foreach ($industries as $industry) {
            Industry::create($industry);
        }
    }
}
