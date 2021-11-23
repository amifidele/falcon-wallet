
import React, {useState, useEffect} from 'react'

import Skeleton from 'react-loading-skeleton'

export default function ChfCurrency(props){

    const [state, setData] = useState({
        rates: ''
    });
    
    const fetchData = async () => {
        const api = await fetch("https://api.nbp.pl/api/exchangerates/rates/a/chf/?format=json");
        setData({
            rates: await api.json()
        });
    };

    useEffect(() => {
        fetchData();
    }, []) 

    const ratesList = state.rates

    const value = ratesList.rates

    const balance = props.balance;

    const currencies = value?.map(currency => 
        <li key={currency.no}> <b>{ balance / currency.mid}</b> {ratesList.currency} ( {ratesList.code} )  </li>
    )


    console.log(balance)


    return(
        <div className="text-lg">

            <ul>{currencies || <Skeleton/>}</ul>

        </div>
    );


}