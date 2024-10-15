
import Link from "next/link"
import SigninForm from "@/app/ui/components/signinForm"

export default function LoginPage() {

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#088395] via-[#9fafca] to-[#EEEEEE] dark:bg-gradient-to-r dark:from-blue-100 dark:to-purple-100 text-base-200  flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-[#EEEEEE]  shadow-2xl transition-all duration-300 hover:shadow-3xl">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-center mb-6">Sign In</h2>
      <SigninForm />
          <div className="divider my-6">OR</div>
          <div className="text-center">
            <p className="text-sm">
              Don't have an account?
              <Link href="/auth/signup" className="link link-primary transition-all duration-300 hover:brightness-125">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}