
import SignupForm from '@/app/ui/components/signupForm'
import Link from 'next/link'

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#088395] via-[#9fafca] to-[#EEEEEE] dark:bg-gradient-to-r dark:from-blue-100 dark:to-purple-100 text-base-200  flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-[#EEEEEE] shadow-2xl transition-all duration-300 hover:shadow-3xl">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-center mb-6">Sign Up</h2>
          <SignupForm />
          <div className="divider my-6">OR</div>
          <div className="text-center">
            <p className="text-sm">
              Already have an account?
              <Link href="/auth/signin" className="link link-primary transition-all duration-300 hover:brightness-125">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}