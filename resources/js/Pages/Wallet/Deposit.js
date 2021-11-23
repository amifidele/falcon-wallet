import { useState } from "react"
import React from 'react';
import Popup from 'reactjs-popup';
import { useForm, Link, usePage  } from '@inertiajs/inertia-react';
import Header from '../Header'


export default function Deposit(props){

    const { user } = usePage().props

    const { data, setData, errors, post } = useForm({
        wallet_id: user.wallet.id,
        amount: '',
      });
    
      function handleSubmit(e) {
        e.preventDefault();
        post(route('deposit.attempt'));
        modal.close();
      }


    return(

        <div>

            <Header/>


            <div className="w-40 mx-auto shadow rounded text-grey-darker px-8 pt-6 pb-24 mt-10">

                <h1 className="text-2xl font-bold text-center">Make New Deposit</h1>

                        

                <form onSubmit={handleSubmit}>

                    <div>
                        <label>Amount (NBP)</label>
                        <input type="integer" className="form-input shadow-none"
                        name="amount" value={data.amount} onChange={e => setData('amount', e.target.value)} />
                    </div>
                    <div className="text-center">
                        <button className="btn bg-green-dark w-50 text-white mt-8 ">
                            Deposite
                        </button>
                    </div>

                    

                </form>
            

            </div>


        </div>

        
        )

}