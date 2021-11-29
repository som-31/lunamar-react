<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\ContactUs;


class ContactUsController extends Controller
{
    //

    function saveContactUs(Request $req)
    {
        $contactus = new ContactUs;
        $contactus->name=$req->input('name');
        $contactus->email=$req->input('email');
        $contactus->phone=$req->input('phone');
        $contactus->query=$req->input('query');
        $contactus->save();
        return $contactus;
    }

    function contactusList()
    {
        return ContactUs::all();
    }

    function deleteContactUs($id)
    {
        $result= ContactUs :: where('id',$id)->delete();

        if($result)
        {
            return["result"=>"Data has been deleted"];
        }
    }
}
