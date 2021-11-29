<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Pool;


class PoolController extends Controller
{
    //

    function savePool(Request $req)
    {
        $pool = new Pool;
        $pool->subdivision_name=$req->input('subdivision_name');
        $pool->opening_hours=$req->input('opening_hours');
        $pool->closing_hours=$req->input('closing_hours');
        $pool->last_inspection=$req->input('last_inspection');
        $pool->next_inspection=$req->input('next_inspection');
        $pool->save();
        return $pool;
    }

    function poolList()
    {
        return Pool::all();
    }

    function deletePool($id)
    {
        $result= Pool :: where('id',$id)->delete();

        if($result)
        {
            return["result"=>"Data has been deleted"];
        }
    }
}
