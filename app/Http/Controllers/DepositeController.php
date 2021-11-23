<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Deposit;
use Validator;
use Redirect;
use Auth;
use Inertia\Inertia;


class DepositeController extends Controller
{

    public function index(){

        $walletBalance = Auth::user()->wallet->balance;

        $wallet =  Auth::user()->wallet;

        $deposits_amounts = $wallet->deposits->sum('amount');

        $totalAmount = $deposits_amounts + $walletBalance;


        return Inertia::render('Wallet/Deposit', [
            'user' => Auth::user(),
            'balance' => $totalAmount
        ]);


    }

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
