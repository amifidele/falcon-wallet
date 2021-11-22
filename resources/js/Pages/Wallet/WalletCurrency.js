
import React, {useState, useEffect} from 'react'

export default function WalletCurrency(){

    const [state, setData] = useState({
        rates: ''
    });
    
    const fetchData = async () => {
        const api = await fetch("https://api.nbp.pl/api/exchangerates/rates/a/chf/today/?format=json");
        setData({
            rates: await api.json()
        });
    };

    useEffect(() => {
        fetchData();
    }, []) 

    const ratesList = state.rates

    const value = ratesList.rates


    console.log(value)


    return(
        <div className="text-2xl">

           <li>{value?.no}</li>
            Hello

            

        </div>
    );


}