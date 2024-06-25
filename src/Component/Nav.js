import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Select from 'react-select';
import { setCurrency } from '../Utils/currencySlice';
import { selectuser, setlogoutuser } from '../Utils/userSlice';
import { auth } from '../firebase';
import icon from "./icon.png"

const Nav = ({ openmodal, closemodal, modal }) => {
    const options = [
        { value: 'usd', label: 'USD' },
        { value: 'inr', label: 'INR' }
    ];
    
    const dispatch = useDispatch();
    const user = useSelector(selectuser)
    console.log(user);
    const handleCurrencyChange = (e) => {
        dispatch(setCurrency(e.value));
    }
    const handlelogout = (e)=>{
        try{
            auth.signOut()
            dispatch(setlogoutuser())
        }
        catch(error){
            alert(error.message);
        }
    }
    return (
        <ul className='flex gap-[15vw] sm:gap-[35vw] md:gap-[50vw] justify-evenly    bg-[#000000] p-2 top-0 items-center w-full sticky nav z-[1]'>
            <Link className='font-bold text-[#FFD700]' to="/">
            <img src={icon} alt="Crypto Tracker" width={150}/>
            </Link>
            <div className='flex text-white gap-[2vw]'>
                <Select 
                    options={options}
                    defaultValue={options[1]}
                    onChange={handleCurrencyChange}
                    className='text-black font-bold text-xs bg-black h-auto'
                />
                
                {
                    user ? 
                    <button className='text-sm' onClick={handlelogout}>Logout</button>
                    :
                    <button className='text-sm' onClick={openmodal}>Login</button>
                }
            </div>
        </ul>
    )
}


export default Nav;