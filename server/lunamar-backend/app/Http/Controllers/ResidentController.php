<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Resident;


class ResidentController extends Controller
{
    //

    function saveResident(Request $req)
    {
        $resident = new Resident;
        $resident->resident_name=$req->input('resident_name');
        $resident->email=$req->input('email');
        $resident->phone=$req->input('phone');
        $resident->date_of_birth=$req->input('date_of_birth');
        $resident->gender=$req->input('gender');
        $resident->save();
        return $resident;
    }

    function residentList()
    {
        return Resident::all();
    }

    function deleteResident($id)
    {
        $result= Resident :: where('id',$id)->delete();

        if($result)
        {
            return["result"=>"Data has been deleted"];
        }
    }
}
