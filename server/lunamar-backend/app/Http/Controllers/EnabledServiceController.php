<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\EnabledService;


class EnabledServiceController extends Controller
{
    //

    function saveEnabledService(Request $req)
    {
        $enabledservice = new EnabledService;
        //$enabledservice->enabled_service_id=$req->input('enabled_service_id');
        //$enabledservice->user_id=$req->input('user_id');
        //$enabledservice->user_id=$req->input('occupancy');
    
        $enabledservice->save();
        return $enabledservice;
    }

    function enabledserviceList()
    {
        return EnabledService::all();
    }

    function deleteEnabledService($id)
    {
        $result= EnabledService :: where('id',$id)->delete();

        if($result)
        {
            return["result"=>"Data has been deleted"];
        }
    }
}
