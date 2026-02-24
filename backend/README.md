# CodeInQ Backend API

Laravel 12 API backend for CodeInQ website.

## Setup

1. Install dependencies:
```bash
composer install
```

2. Configure environment:
- Copy `.env.example` to `.env` (already done)
- Update database credentials in `.env`:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=codinq
DB_USERNAME=root
DB_PASSWORD=
```

3. Run migrations and seeders:
```bash
php artisan migrate --seed
```

4. Start the server:
```bash
php artisan serve
```

The API will be available at `http://localhost:8000`

## API Endpoints

All endpoints are prefixed with `/api/v1`

### Public Endpoints

- `GET /api/v1/services` - Get all active services
- `GET /api/v1/solutions` - Get all active solutions
- `GET /api/v1/industries` - Get all active industries
- `GET /api/v1/case-studies` - Get all active case studies
- `GET /api/v1/testimonials` - Get all active testimonials
- `GET /api/v1/process-steps` - Get all active process steps
- `GET /api/v1/team-members` - Get all active team members
- `GET /api/v1/blog-posts` - Get all published blog posts
- `GET /api/v1/blog-posts/{slug}` - Get a specific blog post by slug
- `POST /api/v1/consultations` - Submit a consultation request

### Consultation Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Example Corp",
  "message": "I need help with..."
}
```

## Database Structure

- `services` - Company services
- `solutions` - Business solutions
- `industries` - Industries served
- `case_studies` - Case studies/portfolio
- `testimonials` - Client testimonials
- `process_steps` - Development process steps
- `team_members` - Team members
- `blog_posts` - Blog posts
- `consultations` - Consultation requests

## CORS Configuration

CORS is configured to allow requests from:
- `http://localhost:5173` (Vite dev server)
- `http://127.0.0.1:5173`
- `http://localhost:8000`

Update `config/cors.php` if you need to add more origins.

## Email Configuration

When a consultation form is submitted, an email is automatically sent to `codeinq.tech@gmail.com` with all the details including date and time.

**To configure email sending, see [MAIL_SETUP.md](MAIL_SETUP.md)**

Quick setup for Gmail:
1. Add to `.env`:
```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=your-email@gmail.com
MAIL_FROM_NAME="${APP_NAME}"
```

2. Use a Gmail App Password (not your regular password)
3. Run: `php artisan config:clear`
