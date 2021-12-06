<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Visitor;


class VisitorController extends Controller
{
    //

    function saveVisitor(Request $req)
    {
        $visitor = new Visitor;
        $visitor->first_name=$req->input('first_name');
        $visitor->last_name=$req->input('last_name');
        $visitor->approval=$req->input('approval');
        $visitor->address=$req->input('address');
        $visitor->state=$req->input('state');
        $visitor->city=$req->input('city');
        $visitor->entry_at=$req->input('entry_at');
        $visitor->exit_at=$req->input('exit_at');
        $visitor->phone=$req->input('phone');
        $visitor->zip_code=$req->input('zip_code');
        $visitor->save();
        return $visitor;
    }

    function visitorList()
    {
        return Visitor::all();
    }

    function deleteVisitor($id)
    {
        $result= Visitor :: where('id',$id)->delete();

        if($result)
        {
            return["result"=>"Data has been deleted"];
        }
    }
}
