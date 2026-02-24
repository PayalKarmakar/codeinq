<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Consultation Request</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .content {
            background: #f9f9f9;
            padding: 30px;
            border-radius: 0 0 8px 8px;
        }
        .info-box {
            background: white;
            padding: 20px;
            margin: 15px 0;
            border-radius: 5px;
            border-left: 4px solid #667eea;
        }
        .label {
            font-weight: bold;
            color: #667eea;
            display: inline-block;
            min-width: 100px;
        }
        .value {
            color: #333;
        }
        .message-box {
            background: white;
            padding: 20px;
            margin: 15px 0;
            border-radius: 5px;
            border: 1px solid #e0e0e0;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
            color: #666;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>New Consultation Request</h1>
        <p>You have received a new consultation request from your website</p>
    </div>
    
    <div class="content">
        <div class="info-box">
            <div style="margin-bottom: 10px;">
                <span class="label">Name:</span>
                <span class="value">{{ $consultation->name }}</span>
            </div>
            <div style="margin-bottom: 10px;">
                <span class="label">Email:</span>
                <span class="value">{{ $consultation->email }}</span>
            </div>
            @if($consultation->company)
            <div style="margin-bottom: 10px;">
                <span class="label">Company:</span>
                <span class="value">{{ $consultation->company }}</span>
            </div>
            @endif
            <div style="margin-bottom: 10px;">
                <span class="label">Submitted:</span>
                <span class="value">{{ $consultation->created_at->format('F d, Y \a\t h:i A') }}</span>
            </div>
            <div>
                <span class="label">Status:</span>
                <span class="value" style="text-transform: capitalize;">{{ $consultation->status }}</span>
            </div>
        </div>

        <div class="message-box">
            <h3 style="margin-top: 0; color: #667eea;">Message:</h3>
            <p style="white-space: pre-wrap;">{{ $consultation->message }}</p>
        </div>

        <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:{{ $consultation->email }}" 
               style="display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px;">
                Reply to {{ $consultation->name }}
            </a>
        </div>
    </div>

    <div class="footer">
        <p>This email was sent from your CodeInQ website contact form.</p>
        <p>Consultation ID: #{{ $consultation->id }}</p>
    </div>
</body>
</html>
