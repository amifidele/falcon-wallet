<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    

    public function register(){

        return Inertia::render('Auth/Register');

    }

    public function login(){

        return Inertia::render('Auth/Login');

    }


    public function header(){
        return Inertia::render('Header', [
            'authUser' => Auth::user()->name
        ]);
    }






}
