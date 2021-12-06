<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Role;


class RoleController extends Controller
{
    //

    function saveRole(Request $req)
    {
        $role = new Role;
        $role->name=$req->input('name');
        $role->floors=$req->input('floors');
        $role->occupancy=$req->input('occupancy');
        $role->total_apartments=$req->input('total_apartments');
        $role->save();
        return $role;
    }

    function roleList()
    {
        return Role::all();
    }

    function deleteRole($id)
    {
        $result= Role :: where('id',$id)->delete();

        if($result)
        {
            return["result"=>"Data has been deleted"];
        }
    }
}
