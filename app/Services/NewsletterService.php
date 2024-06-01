<?php
namespace App\Services;

use App\Mail\NewsletterMail;
use App\Models\Newsletter;
use Illuminate\Support\Facades\Mail;

class NewsletterService 
{
    public function create(array $data)
    {  
        $newsletter = Newsletter::create($data);
        (Mail::to($newsletter->email)->send(new NewsletterMail($newsletter)));
        return $newsletter;
    }
}