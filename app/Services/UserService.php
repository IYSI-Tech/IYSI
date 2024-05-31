<?php
namespace App\Services;

use App\Http\Requests\UserRequest;
use App\Models\User;

class UserService 
{
    public function register(array $data)
    {  
        return User::create($data);
    }
}