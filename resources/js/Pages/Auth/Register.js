import { useForm, Link } from '@inertiajs/inertia-react';
import Header from '../Header'

export default function Register(){

    const { data, setData, post, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      });
    
      function handleSubmit(e) {
        e.preventDefault();
        post(route('signup.attempt'));
      }

    return(
        <div>

            <Header/>


              
            <div className="w-30 mt-12 mx-auto">

                <h1 className="text-center font-bold text-2xl">Register</h1>

            
                <form
                      onSubmit={handleSubmit}
                      className="pt- overflow-hidden  rounded-lg "
                    >  

                      <div className="w-100">
                        <label className="font-bold">Names</label>
                        <input
                          className="form-input shadow-none "
                          label="Names"
                          name="name"
                          type="text"
                          placeholder="Type Name"
                          errors={errors.name}
                          value={data.name}
                          onChange={e => setData('name', e.target.value)}
                        />
                      </div>
                      <div className="w-100">
                      <label className="font-bold ">Email</label>
                        <input
                          className="form-input shadow-none "
                          label="Email"
                          name="email"
                          type="email"
                          placeholder="Type Email"
                          errors={errors.email}
                          value={data.email}
                          onChange={e => setData('email', e.target.value)}
                        />
                      </div>


                      <div className="w-100">
                        <label className="font-bold mt-2">Password</label>
                          <input
                            className="form-input shadow-none"
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="Type Password"
                            errors={errors.password}
                            value={data.password}
                            onChange={e => setData('password', e.target.value)}
                          />
                      </div>

                      <div className="w-100">
                      <label className="font-bold mt-2">Confirm Password</label>
                        <input
                          className="form-input shadow-none "
                          label="Password"
                          name="password_confirmation"
                          type="password"
                          placeholder="Confirm Password"
                          errors={errors.password}
                          value={data.password_confirmation}
                          onChange={e => setData('password_confirmation', e.target.value)}
                        />
                      </div>
                      

                        

                        

                        


                        <div className="text-center">

                            <button className="btn bg-green-dark w-60 text-white font-bold py-2 mt-4">Sign Up</button>

                        </div>

                       


                      
                    </form>



            <div className="text-center">

            ___________________________________________________________<br/>

            <Link href="/login" >or Login</Link>

            </div>

            


            </div>



        </div>
        )

}