<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Admin extends Controller
{
    function index(Request $request){
        return view('admin.index6');
    }
}
