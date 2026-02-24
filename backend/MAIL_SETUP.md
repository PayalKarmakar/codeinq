# Email Configuration Guide

## Email Setup for Consultation Submissions

When a consultation form is submitted, an email will be automatically sent to `codeinq.tech@gmail.com` with all the consultation details including the date and time.

## Configuration

### Option 1: Gmail SMTP (Recommended for Gmail)

Add these settings to your `.env` file:

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

**Important for Gmail:**
1. You need to use an **App Password**, not your regular Gmail password
2. Enable 2-Step Verification on your Google account
3. Generate an App Password: https://myaccount.google.com/apppasswords
4. Use that App Password in `MAIL_PASSWORD`

### Option 2: Laragon Mail (For Local Development)

If you're using Laragon, you can use its built-in mail server:

```env
MAIL_MAILER=smtp
MAIL_HOST=127.0.0.1
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=noreply@codinq.test
MAIL_FROM_NAME="CodeInQ"
```

### Option 3: Mailtrap (For Testing)

For testing emails without sending real emails:

```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=your-mailtrap-username
MAIL_PASSWORD=your-mailtrap-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@codinq.test
MAIL_FROM_NAME="CodeInQ"
```

### Option 4: Log (For Development Only)

To just log emails to the log file (doesn't send real emails):

```env
MAIL_MAILER=log
MAIL_FROM_ADDRESS=noreply@codinq.test
MAIL_FROM_NAME="CodeInQ"
```

## Testing

After configuring your mail settings:

1. Clear config cache:
```bash
php artisan config:clear
```

2. Test by submitting a consultation form from the frontend

3. Check your email inbox (or Mailtrap/MailHog if using those)

## Email Content

The email sent to `codeinq.tech@gmail.com` includes:
- Name
- Email address
- Company (if provided)
- Message
- Submission date and time
- Consultation ID

## Troubleshooting

If emails aren't being sent:

1. Check Laravel logs: `storage/logs/laravel.log`
2. Verify SMTP credentials are correct
3. For Gmail, ensure you're using an App Password
4. Check firewall/network settings if using external SMTP
5. Test with `php artisan tinker`:
   ```php
   Mail::raw('Test email', function ($message) {
       $message->to('codeinq.tech@gmail.com')
               ->subject('Test Email');
   });
   ```
