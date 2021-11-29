<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;


class UserController extends Controller
{
    //

    function saveUser(Request $req)
    {
        $user = new User;
        $user->first_name=$req->input('first_name');
        $user->last_name=$req->input('last_name');
        $user->phone=$req->input('phoney');
        $user->email=$req->input('email');
        $user->date_of_birth=$req->input(' date_of_birth');
        $user->gender=$req->input('gender');
        $user->save();
        return $user;
    }

    function userList()
    {
        return User::all();
    }

    function deleteUser($id)
    {
        $result= User :: where('id',$id)->delete();

        if($result)
        {
            return["result"=>"Data has been deleted"];
        }
    }
}
