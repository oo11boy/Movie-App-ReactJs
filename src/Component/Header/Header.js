import React, { useState, useEffect } from 'react';
import { Database } from '../../Database/Database';
import { LuSettings2 } from 'react-icons/lu';
import { BiSearchAlt } from 'react-icons/bi';
import { MdOutlineLogin } from 'react-icons/md';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // اضافه کردن یک Event Listener برای رویداد scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up: حذف Event Listener در هنگام عدم استفاده از کامپوننت
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // این Effect فقط یک بار اجرا می‌شود

  const handleScroll = () => {
    // اگر scroll به اندازه 100vh به پایین شد، کلاس 'bg-black' به عنصر اضافه شود
    if (window.scrollY >= window.innerHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <div className={`header ${isScrolled ? 'bg-black' : ''}`}>
      <div className='imgitem'>
        <Link to={'../'}>
          <img src={Database.Logo} alt='' />
        </Link>

        <ul>
          {Database.Itemmenu.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>

      <div className='searchlogin'>
        <button className='filterheader'>
          <LuSettings2 />
        </button>
        <button className='searchiconheader'>
          <BiSearchAlt />
        </button>
        <button className='loginicon'>
          <button className='loginiconheader'>
            <MdOutlineLogin />
          </button>
          <button className='textloginheader'>ورود به سایت</button>
        </button>
      </div>
    </div>
  );
}
