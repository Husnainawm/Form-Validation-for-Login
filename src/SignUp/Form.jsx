import { useReducer, useState } from 'react'
import { Eye, EyeOff, User, Mail, Lock } from 'lucide-react'
import { toast, ToastContainer } from 'react-toastify'

const IntialData = {

    FullName: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''

}

const formReducer = (state, action) => {
    return { ...state, [action.type]: action.val }

}

function Form() {
    const [dataSet, setDataSet] = useState([])
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [state, dispatch] = useReducer(formReducer, IntialData)

    const inputval = (elem) => {
        dispatch({
            val: elem.target.value,
            type: elem.target.name
        })
    }
    const Submitdata = (e) => {
        e.preventDefault()


        const exist =dataSet.some((e)=> e.Email.toLowerCase()===state.Email  .toLowerCase())

        if(exist){
            toast.error('This Email is Already Takken by Someone else Please choice another', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        if(state.Password !== state.ConfirmPassword){
             toast.error('Please Enter Same Password', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        if (!/[!@#$%^&*()_-]/.test(state.Password)) {
            toast.error('Please Choice Atleast one Special Character in Password', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
         if (!/[0-9]/.test(state.Password)) {
            toast.error('Please Choice Atleast one number in Password', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }



        if (!/[A-Z]/.test(state.Password)) {
            toast.error('Please Choice Atleast one Capital Letter in Password', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        if (state.Password.length<8) {
            toast.error('Please Enter more then 8 letter Password', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        {
            toast.success('SignUp Successful', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            
            setDataSet((prev) => [...prev, state])
            

        }
        
    }


    const inputBase =
        'w-full rounded-lg border bg-white py-2.5 pl-10 pr-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:ring-4'

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
            <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
                <div className="mb-8">
                    <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                        Create your account
                    </h1>
                    <p className="mt-2 text-sm text-slate-500">
                        Fill in your details below to get started.
                    </p>
                </div>

                <form onSubmit={Submitdata} className="space-y-5">
                    <div>
                        <label htmlFor="FullName" className="mb-1.5 block text-sm font-medium text-slate-700">
                            Full name
                        </label>
                        <div className="relative">
                            <User size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                id="FullName"
                                name="FullName"
                                type="text"
                                autoComplete="name"
                                placeholder="Enter Your Full Name"
                                required
                                value={state.FullName}
                                onChange={inputval}
                                className={inputBase}


                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="Email" className="mb-1.5 block text-sm font-medium text-slate-700">
                            Email address
                        </label>
                        <div className="relative">
                            <Mail size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                id="Email"
                                name="Email"
                                type="email"
                                autoComplete="email"
                                placeholder="you@example.com"
                                required
                                value={state.Email}
                                className={inputBase}
                                onChange={inputval}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="Password" className="mb-1.5 block text-sm font-medium text-slate-700">
                            Password
                        </label>
                        <div className="relative">
                            <Lock size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                id="Password"
                                name="Password"
                                type={showPassword ? 'text' : 'password'}
                                autoComplete="new-password"
                                placeholder="At least 8 characters"
                                required
                                value={state.Password}
                                className={inputBase}
                                onChange={inputval}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((s) => !s)}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="ConfirmPassword" className="mb-1.5 block text-sm font-medium text-slate-700">
                            Confirm password
                        </label>
                        <div className="relative">
                            <Lock size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                id="ConfirmPassword"
                                name="ConfirmPassword"
                                type={showConfirm ? 'text' : 'password'}
                                autoComplete="new-password"
                                placeholder="Re-enter your password"
                                required
                                value={state.ConfirmPassword}
                                className={inputBase}
                                onChange={inputval}
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirm((s) => !s)}
                                aria-label={showConfirm ? 'Hide password' : 'Show password'}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                            >
                                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
                    >
                        Create account
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-slate-500">
                    Already have an account?{' '}
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-700">
                        Sign in
                    </a>
                </p>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Form