<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Building;


class BuildingController extends Controller
{
    //

    function saveBuilding(Request $req)
    {
        $building = new Building;
        $building->name=$req->input('name');
        $building->floors=$req->input('floors');
        $building->occupancy=$req->input('occupancy');
        $building->total_apartments=$req->input('total_apartments');
        $building->save();
        return $building;
    }

    function buildingList()
    {
        return Building::all();
    }

    function deleteBuilding($id)
    {
        $result= Building :: where('id',$id)->delete();

        if($result)
        {
            return["result"=>"Data has been deleted"];
        }
    }
}
