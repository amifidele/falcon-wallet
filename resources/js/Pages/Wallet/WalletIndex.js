
import Header from '../Header'
import { FaWallet } from "react-icons/fa";

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

            <div className="w-70 mx-auto px-2 py-6">

                <div className="text-center">
                     <h1 className="text-xl font-bold">Welcome {user.name}, to your Wallet!</h1>
                </div>

                <div className="w-50 mx-auto flex text-grey-dark ">

                    <div className="w-40 text-12xl text-right">

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

            </div>

            <div className="">

            </div>

        </div>
        )

}