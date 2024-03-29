import  RegisterForm  from "@/app/components/auth/register-form";
import Link from "next/link";


const RegisterPage = () => {
  return (
      <div className="max-w-[500px] w-full mx-auto p-8 rounded-lg border-2 border-gray-800 shadow-lg">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Register</h2>
  
        {/* Login Form */}
        <RegisterForm />
  
  
        {/* Panel */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Already have an account?</h3>
            <p>
              Come through{" "}
              <Link
                href="/login"
                className="font-bold text-shadow-lg hover:text-red-500"
              >
                Login Here
              </Link>
            </p>
          </div>
        </div>
        
      </div>
  );
};

export default RegisterPage;
