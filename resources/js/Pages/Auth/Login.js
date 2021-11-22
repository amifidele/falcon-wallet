import { useForm, Link, usePage  } from '@inertiajs/inertia-react';


export default function Login(){

    return(
        <div>

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

    <button className="btn bg-orange w-60 mx-auto text-white font-bold py-2 mt-3 shadow-none">Login</button>

    </div>

    </form>


        </div>
    )

}