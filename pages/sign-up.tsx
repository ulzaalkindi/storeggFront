import Image from 'next/image';
import SignUpForm from '../components/organisms/SignUpForm';

export default function SignUp() {
  return (
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div className="container mx-auto">
        <form action="">
          <div className="pb-50">
            <a className="navbar-brand" href="/">
              <Image src="/icon/logo.svg" height={60} width={60} alt="logo" />
            </a>
          </div>
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
          <p className="text-lg color-palette-1 m-0">Daftar dan bergabung dengan kami</p>
          <SignUpForm />
        </form>
      </div>
    </section>
  );
}
