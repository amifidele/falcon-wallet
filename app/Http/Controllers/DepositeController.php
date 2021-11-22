<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Deposit;
use Validator;
use Redirect;

class DepositeController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'wallet_id' => 'required',
            'amount' => 'required'
        ]);

        $deposite = new Deposit;
        $deposite->wallet_id = $request->input('wallet_id');
        $deposite->amount = $request->input('amount');
        $deposite->save();

        return Redirect::route('wallet');
        
    }

}
