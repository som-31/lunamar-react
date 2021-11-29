<?php

namespace App\Http\Controllers;
use App\Models\Services;

use Illuminate\Http\Request;

class ServicesController extends Controller
{
    //

    function servicesList()
    {
        return Services::all();
    }

    function saveServices(Request $req)
    {
        $services = new Services;
        $services->name=$req->input('name');
        $services->description=$req->input('description');

        $services->save();
        return $services;
    }

   

    function deleteServices($id)
    {
        $result= Services :: where('id',$id)->delete();

        if($result)
        {
            return["result"=>"Data has been deleted"];
        }
    }
}
