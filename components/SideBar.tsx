import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'

const SideBar = () => {
	return (
		<div>
			<img
				src='https://avatars.githubusercontent.com/u/31743545?v=4'
				alt='user logo'
				className='w-32 h-32 rounded-full mx-auto'
			/>
			<h3 className='my-3 text-3xl font-medium tracking-wider font-kaushan '>
				Volodymyr <span className='text-blue'>Batsyk</span>
			</h3>
			<p className='px-2 py-1 rounded-full m-3 bg-gray-200'>Software Developer</p>
			<a className='px-2 py-1 rounded-full m-3 bg-gray-200 flex items-center justify-center' href='' download='name'>
				<GiTie className='h-6 w-6' />
				Download Resume
			</a>

			{/* social icons */}
			<div className='flex justify-around text-green-500 my-5 w-9/12 md:w-full mx-auto'>
				<a href=''>
					<AiFillGithub className='h-8 w-8 cursor-pointer  text-blue' />
				</a>
				<a href=''>
					<AiFillLinkedin className='h-8 w-8 cursor-pointer text-blue' />
				</a>
				<a href=''>
					<AiFillFacebook className='h-8 w-8 cursor-pointer text-blue' />
				</a>
			</div>

			{/* address */}
			<div className='my-5 py-4 bg-gray-200' style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
				<div className='flex items-center justify-center space-x-2'>
					<GoLocation />
					<span>Lviv, Ukraine &#x1f1fa;&#x1f1e6;</span>
				</div>
				<p className='my-2'>vovabatsyk.lviv@gmail.com</p>
				<p className='my-2'>0633034771</p>
			</div>

			{/* buttons */}
			<button
				className='bg-gradient-to-r from-blue to-yellow-400 w-8/12 rounded-full p-2 text-white my-2 focus:outline-none'
				onClick={() => window.open('mailto:vovabatsyk.lviv@gmail.com')}>
				Email Me
			</button>
			<button className='bg-gradient-to-r from-blue to-yellow-400 w-8/12 rounded-full p-2 text-white my-2'>
				Bandera UI
			</button>
		</div>
	)
}

export default SideBar
