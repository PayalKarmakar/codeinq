<?php

namespace Database\Seeders;

use App\Models\ProcessStep;
use Illuminate\Database\Seeder;

class ProcessStepSeeder extends Seeder
{
    public function run(): void
    {
        $steps = [
            [
                'number' => '01',
                'title' => 'Discovery',
                'subtitle' => 'Understanding Your Vision',
                'description' => 'We dive deep into your business goals, target audience, and technical requirements through workshops and stakeholder interviews.',
                'icon' => 'Search',
                'color' => 'var(--primary-600)',
                'duration' => '1-2 weeks',
                'deliverables' => ['Requirements doc', 'User personas', 'Technical scope'],
                'order' => 1,
            ],
            [
                'number' => '02',
                'title' => 'Design',
                'subtitle' => 'Crafting the Experience',
                'description' => 'Our designers create intuitive, beautiful interfaces with wireframes, prototypes, and design systems tailored to your brand.',
                'icon' => 'Palette',
                'color' => 'var(--secondary-600)',
                'duration' => '2-3 weeks',
                'deliverables' => ['Wireframes', 'UI mockups', 'Design system'],
                'order' => 2,
            ],
            [
                'number' => '03',
                'title' => 'Development',
                'subtitle' => 'Building with Excellence',
                'description' => 'Clean, scalable code written with best practices. Agile sprints with regular check-ins and transparent progress tracking.',
                'icon' => 'Code',
                'color' => 'var(--accent-600)',
                'duration' => '6-12 weeks',
                'deliverables' => ['Working software', 'Documentation', 'Code repository'],
                'order' => 3,
            ],
            [
                'number' => '04',
                'title' => 'Testing',
                'subtitle' => 'Ensuring Quality',
                'description' => 'Comprehensive QA including unit tests, integration tests, performance testing, and security audits before launch.',
                'icon' => 'TestTube',
                'color' => 'var(--primary-700)',
                'duration' => '1-2 weeks',
                'deliverables' => ['Test reports', 'Bug fixes', 'Performance metrics'],
                'order' => 4,
            ],
            [
                'number' => '05',
                'title' => 'Deployment',
                'subtitle' => 'Launching Your Product',
                'description' => 'Smooth deployment to production with monitoring, analytics setup, and post-launch optimization for peak performance.',
                'icon' => 'Rocket',
                'color' => 'var(--secondary-700)',
                'duration' => '1 week',
                'deliverables' => ['Live product', 'Monitoring dashboard', 'Launch report'],
                'order' => 5,
            ],
            [
                'number' => '06',
                'title' => 'Support',
                'subtitle' => 'Continuous Improvement',
                'description' => 'Ongoing maintenance, updates, and feature enhancements. We are your long-term technology partner.',
                'icon' => 'Headphones',
                'color' => 'var(--accent-700)',
                'duration' => 'Ongoing',
                'deliverables' => ['Bug fixes', 'Updates', 'Feature releases'],
                'order' => 6,
            ],
        ];

        foreach ($steps as $step) {
            ProcessStep::create($step);
        }
    }
}
