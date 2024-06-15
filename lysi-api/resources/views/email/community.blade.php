@extends('layouts.email.main')

@section('header')
    Community
@endsection

@section('content')
<p>
    Dear {{ $first_name }}
</p>

<p>
    A warm welcome to the {{ config('app.name') }} Community!
</p>

<p>
    We're thrilled to have you on board! By joining our community, you've taken the first step towards connecting with like-minded individuals, learning from each other, and growing together.
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
    P.S. Stay tuned for updates, tips, and resources from the {{ config('app.name') }} Community!
</p>
@endsection