import { Link, usePage  } from '@inertiajs/inertia-react';


export default function Header(){

    const { user } = usePage().props;

    return(
    <div>
        <div className="w-100 flex shadow px-8">

            <div className="w-50">

                <h1 className="text-2xl font-bold">Falcon Wallet</h1>

            </div>

            <div className="w-50 pt-3  text-right">

                <ul className="list inline-block">
                    <li className="mx-3">
                       <Link href="/"> Wallet </Link>
                    </li>
                {!user ?
                (
                    <li className="mx-3">
                       <Link href="/login"> Login </Link>
                    </li>
                   
                ): (
                    <li className="mx-3">
                       <Link href="/logout"> Logout </Link>
                    </li>
                )

                }

                    
                    
                </ul>

            </div>

        </div>
    </div>
        )

}