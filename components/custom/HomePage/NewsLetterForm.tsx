import react from 'react';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';

const NewsLetterForm = () =>{
    return (
        <div className="h-[80vh] relative flex justify-center items-center">
            <h1 className='font-extrabold text-[7.5rem] leading-[151px] text-[#f2f3f7] z-[1]'>Newsletter</h1>
            {/* newsletter form  */}
            <div className='absolute z-[2]'>
            <h1 className='pb-4 font-bold text-[2rem] text-center leading-10 text-[#212121] tracking-wide'>
            Subscribe Our Newsletter
            </h1>
            <p className='text-[#212121] leading-6 text-[1rem] opacity-75 text-center pb-[35px]'>Get the latest information and promo offers directly</p>
            <form>
                <div className='flex justify-center gap-2'>
             <Input type='email' placeholder='Input email address' className="w-full border-[1px] border-[#000] outline-none bg-[#fff]" />
             <Button className=" text-white bg-[#212121] hover:bg-[#212121e7] transition-colors duration-75 delay-75 p-4 rounded-xs w-48">Get Started</Button>
             </div>
            </form>
            </div>
        </div>
    )
}

export default NewsLetterForm;