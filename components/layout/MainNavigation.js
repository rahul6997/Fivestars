import Link from 'next/link';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {

  return (
    <header className={classes.header}>
      <div className={classes.logo}><Link href="/">Medi+Care</Link></div>
      <nav>
        <ul>
          <li>
            <Link href="/Signup/">Sign Up</Link>
          </li>
          <li>
            <Link href="/Login">Login</Link>
          </li>
          <li>
            <Link href="/Doctor/">DoctorsList</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
