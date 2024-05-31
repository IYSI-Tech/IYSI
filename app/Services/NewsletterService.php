<?php
namespace App\Services;

use App\Models\Newsletter;

class NewsletterService 
{
    public function create(array $data)
    {  
        return Newsletter::create($data);
    }
}