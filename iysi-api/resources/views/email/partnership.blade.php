@extends('layouts.email.main')

@section('header')
    Partnership
@endsection

@section('content')
<p>
    Dear {{ $first_name }}
</p>

<p>
    Thank you for reaching out to explore partnership opportunities with {{ config('app.name') }}! We're excited to learn more about your interests and how we can collaborate to drive growth and innovation.
</p>

<p>
    We appreciate the time you took to connect with us, and we're looking forward to discussing how our partnership can benefit both our organizations.
</p>

<p>
    Our team will review your inquiry and get in touch with you shortly to schedule a call or meeting to discuss further.
</p>

<p>
    In the meantime, if you have any additional information or materials you'd like to share, please feel free to reply to this email or send them to <a href="mailto:partnerships@iysi.com" target="_blank">partnerships@iysi.com</a>.
</p>

<p>
    Thank you again for your interest in partnering with {{ config('app.name') }}! We're eager to explore the possibilities.
</p>

<p>
    Best regards,
</p>
<p>
    The {{ config('app.name') }} Partnerships Team
</p>
@endsection

@section('disclaimer')
<p style="margin: 0"></p>
@endsection