@extends('layouts.email.main')

{{-- @section('header')

@endsection --}}

@section('content')
<p>
    Dear {{ $first_name }}
</p>

<p>
    Thank you for expressing interest in our upcoming events at {{ config('app.name') }}! We're thrilled to know that you're eager to be a part of our community's growth and learning journey.
</p>

<p>
    We're working hard to curate engaging and informative events that will provide valuable insights and connections. We'll be in touch soon with updates on our event schedule, speaker lineups, and registration details.
</p>

<p>
    Thank you again for your interest in {{ config('app.name') }} Events! We look forward to seeing you at our upcoming events!
</p>

<p>
    Best regards,
</p>
<p>
    The {{ config('app.name') }} Events Team
</p>
@endsection

@section('disclaimer')
<p style="margin: 0"></p>
@endsection