<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Manager;

class ManagerController extends Controller
{
    //

    function saveManager(Request $req)
    {
        $building = new Building;
        $building->name=$req->input('name');
        $building->name=$req->input('floors');
        $building->name=$req->input('occupancy');
        $building->name=$req->input('total_apartments');
    }

    function managerList()
    {
        return Manager::all();
    }
}
