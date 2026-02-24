<?php

namespace Database\Seeders;

use App\Models\Testimonial;
use Illuminate\Database\Seeder;

class TestimonialSeeder extends Seeder
{
    public function run(): void
    {
        $testimonials = [
            [
                'name' => 'Sarah Johnson',
                'role' => 'CEO',
                'company' => 'TechStart Inc.',
                'quote' => "CodeInQ transformed our idea into a thriving SaaS platform. Their technical expertise and commitment to quality exceeded all expectations. We scaled from 0 to 10,000 users in just 8 months.",
                'image' => 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDA2Nzk0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
                'rating' => 5,
                'order' => 1,
            ],
            [
                'name' => 'Michael Chen',
                'role' => 'CTO',
                'company' => 'HealthTech Solutions',
                'quote' => "The team's deep understanding of healthcare compliance and security was impressive. They delivered a HIPAA-compliant telemedicine platform that our doctors and patients love. Truly a game-changer for our business.",
                'image' => 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBjZW8lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAxMDEyODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
                'rating' => 5,
                'order' => 2,
            ],
            [
                'name' => 'Emily Rodriguez',
                'role' => 'Founder',
                'company' => 'Retail Giants Co.',
                'quote' => "Our e-commerce platform handled Black Friday traffic flawlessly—100K concurrent users with zero downtime. The performance optimization work was phenomenal. Best technology partner we've ever worked with.",
                'image' => 'https://images.unsplash.com/photo-1582989710213-96b0be274b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZW50cmVwcmVuZXVyJTIwZm91bmRlcnxlbnwxfHx8fDE3NzAxMDEyODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
                'rating' => 5,
                'order' => 3,
            ],
            [
                'name' => 'David Park',
                'role' => 'VP of Operations',
                'company' => 'Express Logistics',
                'quote' => "The AI-powered fleet management system has saved us $800K annually in fuel costs alone. The real-time tracking and route optimization are incredibly accurate. ROI was achieved in just 3 months.",
                'image' => 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBjZW8lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAxMDEyODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
                'rating' => 5,
                'order' => 4,
            ],
            [
                'name' => 'Jennifer Williams',
                'role' => 'Product Director',
                'company' => 'Innovation Labs',
                'quote' => "CodeInQ doesn't just write code—they truly understand business goals. Their strategic approach helped us pivot our product successfully, and we now have a market-leading solution.",
                'image' => 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDA2Nzk0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
                'rating' => 5,
                'order' => 5,
            ],
        ];

        foreach ($testimonials as $testimonial) {
            Testimonial::create($testimonial);
        }
    }
}
