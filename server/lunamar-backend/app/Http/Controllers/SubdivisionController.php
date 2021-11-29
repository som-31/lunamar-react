<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Subdivision;


class SubdivisionController extends Controller
{
    //

    function saveSubdivision(Request $req)
    {
        $subdivision = new Subdivision;
        $subdivision->subdivision_name=$req->input('subdivision_name');
        $subdivision->save();
        return $subdivision;
    }

    function subdivisionList()
    {
        return Subdivision::all();
    }

    function deleteSubdivision($id)
    {
        $result= Subdivision :: where('id',$id)->delete();

        if($result)
        {
            return["result"=>"Data has been deleted"];
        }
    }
}
