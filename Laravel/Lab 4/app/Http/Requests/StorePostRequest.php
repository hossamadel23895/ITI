<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest {
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize() {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules() {
        return [
            'title' => 'required|min:3|unique:posts,title,' . optional($this->post),
            'description' => 'required|min:10',
            'user_id' => 'exists:users,id',
        ];
    }

    public function messages() {
        return [
            'min' => 'The :attribute must be longer than :min characters',
            'mimes' => 'The only accepted files types are :values',
            'max' => 'The :attribute must not be greater than :max kilobytes.',
        ];
    }
}
