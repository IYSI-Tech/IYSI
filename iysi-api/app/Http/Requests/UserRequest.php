<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
            'name'         =>  ['required', 'string', 'min:3'],
            'email'        =>  ['required', 'string', 'max:150', 'unique:users,email'],
            'gender'       =>  ['required', 'string', 'in:male,female'],
            'occupation'   =>  ['required', 'string', 'max:200'],
            'institution'  =>  ['required', 'string', 'max:200']
        ];
    }
}
