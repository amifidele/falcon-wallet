import { useState } from "react"
import React from 'react';
import Popup from 'reactjs-popup';
import { useForm, Link, usePage  } from '@inertiajs/inertia-react';


export default function Deposit(props){

    const { data, setData, errors, post } = useForm({
        wallet_id: props.wallet,
        amount: '',
      });
    
      function handleSubmit(e) {
        e.preventDefault();
        post(route('deposit.attempt'));
        modal.close();
      }


    return(
        <div>

            <Popup
                trigger={<button className="bg-green-dark btn w-100 text-white">Deposit</button>}
                modal
                nested
            >
                {close => (
                <div className="modalo w-100 mx-auto bg-green-light shadow-4xl mt-16">
                    
                    <div className="header"> <h1 className="text-xl font-bold">Make New Deposition</h1> </div>
                    <div className="content py-20 px-5">
                    {' '}
                    <form onSubmit={handleSubmit}>

                        <div>
                            <label>Amount (NBP)</label>
                            <input type="text" className="form-input shadow-none"
                            name="amount" value={data.amount} onChange={e => setData('amount', e.target.value)} />
                        </div>

                        <button className="btn bg-green-dark text-white mt-4 ">
                            Deposite
                        </button>

                    </form>
                    </div>
                    <div className="actions pb-6">

                        
                        <button
                            className="btn border-white"
                            onClick={() => {
                            console.log('modal closed ');
                            close();
                            }}
                        >
                            close 
                        </button>
                    </div>
                </div>
                )}
            </Popup>

        </div>
        )

}