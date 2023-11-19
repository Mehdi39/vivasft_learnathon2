import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({ logoStyle, menus, avatarStyle }) => {

    return (
        <>
            <div className='grid grid-cols-3 px-5 py-2'>
                <div className='flex justify-start items-center'>
                    <div className={logoStyle}>Learnathon 2.0</div>
                </div>
                <div className='flex justify-center items-center'>
                    <ul className='flex gap-5'>
                        {
                            menus.map((menu) => (
                                <Link href={menu.url} key={menu.key} className={menu.style} >
                                    <li >{menu.nav}</li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex justify-end'>
                    <Image src="/profile-picture-5.jpg" width={50} height={50} alt='profile_image' className={avatarStyle}/>
                </div>
            </div>
        </>
    )
}

export default Header