
import Header from '../Header'
import { FaWallet } from "react-icons/fa";

import WalletCurrency from './WalletCurrency';

import { Link, usePage } from '@inertiajs/inertia-react';

import React, {useState, useEffect} from 'react'

import axios from 'axios';

export default function WalletIndex(props){

    const { user } = usePage().props;
    const { balance } = usePage().props;



    const usd = parseFloat(balance) * 5;

    const euro = parseFloat(balance) * 6;

    const pound = parseFloat(balance) * 5;


    return(
        <div>
            <Header/>
            {/* <WalletCurrency/> */}

            <div className="w-50 mx-auto shadow rounded px-2 py-6 mt-10">

                <div className="text-center text-grey-darker">
                     <h1 className="text-xl font-bold">Welcome {user.name}, to your Wallet!</h1>
                </div>

                <div className="w-90 mx-auto flex text-grey-dark px-4 py-5">

                    <div className="w-30 text-12xl text-left pt-10">

                        <FaWallet/>

                    </div>
                    <div className="w-60 pt-4 pl-4 font-bold">
                        <p>Balance</p>
                        <h1 className="text-xl">{balance} PLN</h1>
                        <h1 className="text-xl">{usd} USD</h1>
                        <h1 className="text-xl">{euro} Euro</h1>
                        <h1 className="text-xl">{pound} Pound</h1>
                    </div>

                </div>

                <div className="w-80 mx-auto flex font-bold">

                    <div className="w-50">
                        <button className="bg-green-dark btn w-100 text-white">Deposit</button>
                    </div>

                    <div className="w-50 ml-4">
                        <button className="border-green-dark btn w-100">Withdraw</button>
                    </div>
                    
                </div>

            </div>

            <div className="">

            </div>

        </div>
        )

}