<?php
namespace App\Services;

use App\Models\Contact;

class ContactService 
{
    public function create(array $data)
    {  
        return Contact::create($data);
    }
}