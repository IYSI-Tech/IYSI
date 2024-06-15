@extends('layouts.email.main')

@section('header')
    Newsletter
@endsection

@section('content')
<p>
    Dear {{ $first_name }}
</p>

<p>
    A warm welcome to the {{ config('app.name') }} community! We're thrilled to have you on board!
</p>

<p>
    By subscribing to our newsletter, you've taken the first step towards unlocking your potential and staying updated on the latest learning trends and innovations.
</p>

<p>
    Thank you for being part of the {{ config('app.name') }} journey!
</p>

<p>
    Best regards,
</p>
<p>
    The {{ config('app.name') }} Team
</p>
@endsection

@section('disclaimer')
<p style="margin: 0">
    P.S. Stay tuned for exciting updates, tips, and resources in our upcoming newsletters!
</p>
@endsection