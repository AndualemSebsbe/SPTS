import cx from 'classnames';
import Link from 'next/link';
import styles from '../styles/Signin.module.css'

export default Signup;

function Signup() {
  return (
    <div className='bg-[#293645] mt-[-50px] mb-[-50px]' style={{height: '49.5rem' }}>

      <main className={cx(styles["form-signin"],"text-center ","mt-5" ,"bg-secondary" )} >
        <form className='mt-10'>
          <h1 className="h3 mb-3 fw-normal ">Register</h1>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInput" placeholder="enter first name" />
            <label htmlFor="floatingInput">First Name</label>
          </div><br />
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInput" placeholder="enter last name" />
            <label htmlFor="floatingInput">Last Name</label>
          </div><br />


          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div><br />
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">signup</button><br/>
          <p>have you account? <Link href="/Login">signin</Link> </p>
          
        </form>
      </main>

    </div>
  )
}