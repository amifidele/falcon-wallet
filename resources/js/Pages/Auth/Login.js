import { useForm, Link, usePage  } from '@inertiajs/inertia-react';

import Header from '../Header'


export default function Login(){

    const { data, setData, errors, post } = useForm({
        email: '',
        password: '',
        remember: true
      });
    
      function handleSubmit(e) {
        e.preventDefault();
        post(route('login.attempt'));
      }

    return(
        <div>
            <Header/>
            
            <div className="w-30 mt-20 mx-auto">

                <h1 className="text-center font-bold text-2xl">Login</h1>

            <form
            onSubmit={handleSubmit}
            className="pt-2 overflow-hidden rounded-lg ">
                <label className="font-bold">Email</label>
                <input
                className="form-input shadow-none"
                label="Email"
                name="email"
                type="email"
                errors={errors.email}
                value={data.email}
                onChange={e => setData('email', e.target.value)}
                />

                <label className="font-bold mt-6">Password</label>
                <input
                className="form-input shadow-none"
                label="Password"
                name="password"
                type="password"
                errors={errors.password}
                value={data.password}
                onChange={e => setData('password', e.target.value)}
                />
                <label
                className="flex items-center mt-4 select-none"
                htmlFor="remember"
                >
                <input
                name="remember"
                id="remember"
                className="mr-1"
                type="checkbox"
                checked={data.remember}
                onChange={e => setData('remember', e.target.checked)}
                />
                <span className="text-sm">Remember Me</span>
                </label>


            <div className="text-center">

            <button className="btn bg-green-dark w-60 mx-auto text-white font-bold py-2 mt-3 shadow-none">Login</button>

            </div>

            </form>

            <div className="text-center">

            ___________________________________________________________<br/>

            <Link href="/register" >or Register</Link>

            </div>

            


            </div>




           
           


        </div>
    )

}