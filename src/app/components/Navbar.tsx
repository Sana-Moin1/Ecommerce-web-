import Link from "next/link"

export default function Navbar(){
    return(
        <div className="w-[430px] h-[24px] mt-[38px] relative left-[505px] flex gap-[75px]">
           <Link href={'/'} className="w-[48px] h-[24px] mt-[38px] left-[505] font-poppins font-[500] text-[16px] leading-[24px] "> Home </Link> 
           <Link href={'/Shop'} className="w-[42px] h-[24px] mt-[38px] left-[628] flex font-[500] text-[16px] leading-[24px]"> Shop</Link>
           <Link href={'/About'} className="w-[49px] h-[24px] mt-[38px] left-[745px] flex font-[500] text-[16px] leading-[24px]  "> About </Link>
           <Link href={'/Contact'} className="w-[66px] h-[24px] mt-[38px] left-[869px] flex font-[500] text-[16px] leading-[24px]" >Contact</Link> 
        </div>
    )
}