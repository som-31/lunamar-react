<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Garden;


class GardenController extends Controller
{
    //

    function saveGarden(Request $req)
    {
        $garden = new Garden;
        $garden->garden_name=$req->input('garden_name');
        $garden->opening_hours=$req->input('opening_hours');
        $garden->closing_hours=$req->input('closing_hours');
        $garden->save();
        return $garden;
    }

    function gardenList()
    {
        return Garden::all();
    }

    function deleteGarden($id)
    {
        $result= Garden :: where('id',$id)->delete();

        if($result)
        {
            return["result"=>"Data has been deleted"];
        }
    }
}
