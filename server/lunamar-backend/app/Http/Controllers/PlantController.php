<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Plant;


class PlantController extends Controller
{
    //

    function savePlant(Request $req)
    {
        $plant = new Plant;
        $plant->plant_type=$req->input('plant_type');
        $plant->plant_name=$req->input('plant_name');
        $plant->description=$req->input('description');
        $plant->garden_name=$req->input('garden_name');
        $plant->save();
        return $plant;
    }

    function plantList()
    {
        return Plant::all();
    }

    function deletePlant($id)
    {
        $result= Plant :: where('id',$id)->delete();

        if($result)
        {
            return["result"=>"Data has been deleted"];
        }
    }
}
