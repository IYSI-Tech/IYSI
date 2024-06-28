<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CommunityRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'           =>  ['required', 'string', 'min:3'],
            'email'          =>  ['required', 'string', 'max:150', 'unique:communities,email'],
            'gender'         =>  ['required', 'string', 'in:male,female'],
            'mobile'         =>  ['required', 'numeric', 'unique:communities,mobile'],
            'occupation'     =>  ['required', 'string', 'max:200'],
            'institution'    =>  ['required', 'string', 'max:200'],
            'join_reason'    =>  ['required', 'string', 'max:200'],
            'area_interest'  =>  ['required', 'string', 'max:200'],
            'software_interest'=>  ['nullable', 'string', 'max:200'],
            'referral_source'  =>  ['nullable', 'string', 'max:200'],
            'comment'          =>  ['nullable', 'string', 'max:200']
        ];
    }
}
