<?php
namespace App\Services;

use App\Mail\InterestMail;
use App\Models\User;
use Illuminate\Support\Facades\Mail;

class UserService 
{
    public function create(array $data)
    {  
        $user = User::create($data);
        (Mail::to($user->email)->send(new InterestMail($user)));
        return $user;
    }
}