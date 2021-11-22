
import Header from '../Header'
import { FaWallet } from "react-icons/fa";
import Deposit from './Deposit';

import UsdCurrency from './UsdCurrency'
import ChfCurrency from './ChfCurrency';
import GbpCurrency from './GbpCurrency';

import { Link, usePage } from '@inertiajs/inertia-react';

import React, {useState, useEffect} from 'react'

import axios from 'axios';

export default function WalletIndex(props){

    const { user } = usePage().props;
    const { balance } = usePage().props;



    const usd = parseFloat(balance) * 0.55;

    const euro = parseFloat(balance) * 4.8990;

    const pound = parseFloat(balance) * 5.002;


    return(
        <div>
            <Header/>
            {/* <WalletCurrency/> */}

            <div className="w-65 mx-auto shadow rounded px-2 py-12 mt-10">

                <div className="text-center text-grey-darker">
                     <h1 className="text-xl font-bold">Hi {user.name}, Welcome to your Wallet!</h1>
                </div>

                <div className="w-90 mx-auto flex text-grey-dark px-4 py-2 pb-8">

                    <div className="w-25 text-12xl text-green-dark text-left pt-10">

                        <FaWallet/>

                    </div>
                    <div className="w-60 pt-0 ">
                        <p className="font-bold">Balance</p>
                        
                        <p className="text-lg text-green -mt-3"><b>{balance}</b> Polish złoty ( NBP )</p>

                        <p className="text-lg">Your Balance in other currencies</p>

                        <UsdCurrency balance={balance} />
                        <ChfCurrency balance={balance} />
                        <GbpCurrency balance={balance} />
                    </div>


                </div>

                <div className="w-80 mx-auto  font-bold">

                    

                    <div className="w-50 mx-auto mt-8">
                    <Deposit wallet={user.wallet.id}/>
                        
                    </div>

                    
                </div>

            </div>

            <div className="">

            </div>

        </div>
        )

}