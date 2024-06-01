<?php
namespace App\Services;

use App\Mail\PartnershipMail;
use App\Models\Contact;
use Illuminate\Support\Facades\Mail;

class ContactService 
{
    public function create(array $data)
    {
        $contact = Contact::create($data);
        (Mail::to($contact->email)->send(new PartnershipMail($contact)));
        return $contact;
    }
}