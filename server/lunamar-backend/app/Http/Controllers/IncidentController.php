<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Incident;


class IncidentController extends Controller
{
    //

    function saveIncident(Request $req)
    {
        $incident = new Incident;
        $incident->incident_name=$req->input('incident_name');
        $incident->description=$req->input('description');
        $incident->incident_at=$req->input('incident_at');
        $incident->save();
        return $incident;
    }

    function incidentList()
    {
        return Incident::all();
    }

    function deleteIncident($id)
    {
        $result= Incident :: where('id',$id)->delete();

        if($result)
        {
            return["result"=>"Data has been deleted"];
        }
    }
}
