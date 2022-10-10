import Link from 'next/link';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {

  return (
    <header className={classes.header}>
      <div className={classes.logo}><Link href="/">Medi+Care</Link></div>
      <nav>
        <ul>
          <li>
            <Link href="/AccountCreation/">Sign Up</Link>
          </li>
          <li>
            <Link href="/AccountCreation/login">Login</Link>
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
