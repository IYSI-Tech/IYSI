<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
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
            'email'          =>  ['required', 'string', 'max:150', 'unique:contacts,email'],
            'mobile'         =>  ['required', 'numeric', 'unique:contacts,mobile'],
            'organization'   =>  ['required', 'string', 'max:200'],
            'position'       =>  ['required', 'string', 'max:200'],
            'proposal'       =>  ['required', 'string'],
            'website'        =>  ['required', 'string', 'max:200'],
            'referral_source'  =>  ['nullable', 'string', 'max:200'],
            'comment'          =>  ['nullable', 'string', 'max:200']
        ];
    }
}
