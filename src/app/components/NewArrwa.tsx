import Image from "next/image";
import React from 'react'

Codeiume:Refactor|Explain|Generate JSDoc|X
const NewArrwa: React.FC=()=>{
return (
<section className='bg-[#FBFSDC] py-12'>
<div className='container mx-auto px-4 md:px-16 grid grid-cols md:grid-cols-2 items-cemter gap-8'>
{/*Image Section*/}
<div className= 'flex justify-center'>
<Image
src="/images/ssae1 1.png"
width={1600}
height={1600}
alt="Asgaard Sofa"
className="w-full object-contain"
/>
</div>
{/* Text Section*/}
<div className="text-center md:text- left space-y-4">
<p className= 'text-lg font-medium text-gray-600'>New Arrivals</p>
<h2 className='text-4xl font-bold  text-gray-800'>Asgaard sofas</h2>
<a
href="a"
className='inline-block bg-white border border-black text-black font-mediun px-6 py-3 mt-4 hover:bg-black hover:text-white transition'
>
Order NOW
</a>
</div>
</div>
</section>
)
};
export default NewArrwa;
