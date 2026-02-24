# CodeInQ Backend Setup Guide

## ✅ Database Setup Complete

All tables have been created in the `codinq` database:

### Tables Created:
1. ✅ `services` - 6 records seeded
2. ✅ `solutions` - 4 records seeded
3. ✅ `industries` - 7 records seeded
4. ✅ `case_studies` - 4 records seeded
5. ✅ `testimonials` - 5 records seeded
6. ✅ `process_steps` - 6 records seeded
7. ✅ `team_members` - Ready for data
8. ✅ `blog_posts` - Ready for data
9. ✅ `consultations` - Ready to receive submissions

## 🚀 Starting the Backend Server

```bash
cd backend
php artisan serve
```

The API will be available at: `http://localhost:8000`

## 📡 API Endpoints

All endpoints are prefixed with `/api/v1`:

### Get Data:
- `GET http://localhost:8000/api/v1/services` - Get all services
- `GET http://localhost:8000/api/v1/solutions` - Get all solutions
- `GET http://localhost:8000/api/v1/industries` - Get all industries
- `GET http://localhost:8000/api/v1/case-studies` - Get all case studies
- `GET http://localhost:8000/api/v1/testimonials` - Get all testimonials
- `GET http://localhost:8000/api/v1/process-steps` - Get all process steps
- `GET http://localhost:8000/api/v1/team-members` - Get all team members
- `GET http://localhost:8000/api/v1/blog-posts` - Get all blog posts

### Submit Consultation:
```bash
POST http://localhost:8000/api/v1/consultations
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Example Corp",
  "message": "I need help with..."
}
```

## 🧪 Testing the API

You can test the API using:

1. **Browser**: Open `http://localhost:8000/api/v1/services`
2. **Postman**: Import the endpoints
3. **cURL**:
   ```bash
   curl http://localhost:8000/api/v1/services
   ```

## 📊 Database Connection

- **Database**: `codinq`
- **Host**: `127.0.0.1`
- **Port**: `3306`
- **Username**: `root`
- **Password**: (empty)

## ✅ Verification

To verify everything is working:

```bash
# Check migrations
php artisan migrate:status

# Check database tables
php artisan db:table services

# Check seeded data
php artisan tinker
>>> App\Models\Service::count()
# Should return: 6
```

## 🔧 Troubleshooting

If you need to reset the database:

```bash
php artisan migrate:fresh --seed
```

This will drop all tables and recreate them with fresh seed data.
