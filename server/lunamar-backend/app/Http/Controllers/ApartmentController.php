<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Apartment;


class ApartmentController extends Controller
{
    //

    function saveApartment(Request $req)
    {
        $apartment = new Apartment;
        $apartment->subdivision_name=$req->input('subdivision_name');
        $apartment->floors=$req->input('floors');
        $apartment->services=$req->input('services');
        $apartment->owner_name=$req->input('owner_name');
        $apartment->save();
        return $apartment;
    }

    function apartmentList()
    {
        return Apartment::all();
    }

    function deleteApartment($id)
    {
        $result= apartment :: where('id',$id)->delete();

        if($result)
        {
            return["result"=>"Data has been deleted"];
        }
    }
}
