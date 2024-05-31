<?php
namespace App\Services;

use App\Models\Community;

class CommunityService 
{
    public function create(array $data)
    {  
        return Community::create($data);
    }
}