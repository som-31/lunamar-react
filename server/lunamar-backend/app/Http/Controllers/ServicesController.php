<?php

namespace App\Http\Controllers;
use App\Models\Services;

use Illuminate\Http\Request;

class ServicesController extends Controller
{
    //

    function servicesList()
    {
        return Services::all();
    }
}
