<?php
namespace App\Services;

use App\Mail\CommunityMail;
use App\Models\Community;
use Illuminate\Support\Facades\Mail;

class CommunityService 
{
    public function create(array $data)
    {  
        $community = Community::create($data);
        (Mail::to($community->email)->send(new CommunityMail($community)));
        return $community;
    }
}