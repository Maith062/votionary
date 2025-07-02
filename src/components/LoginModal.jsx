
import { useState } from 'react'

import { X, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';


export default function LoginModal({loginOrModal, modalOpen="false", onClose, loginState}){

    //for the Login/Signup popup
    const [activeTab, setActiveTab] = useState(loginOrModal);
    const [showPassword, setShowPassword] = useState(false);
    const [passwords, setPasswords] = useState({ password: '', confirmPassword: '' });
    const [passwordError, setPasswordError] = useState('');
    const [isCorrectPassword, setIsCorrectPassword] = useState(false);
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: ''
    // });

    // const handleInputChange = (e) => {
    //     setFormData({
    //     ...formData,
    //     [e.target.name]: e.target.value
    //     });
    // };

    const handlePasswordChange = (e) => {
      const { name, value } = e.target;
      const newPasswords = { ...passwords, [name]: value };
      setPasswords(newPasswords);
      
      // Real-time validation
      if (name === 'confirmPassword' || (name === 'password' && newPasswords.confirmPassword)) {
        if (newPasswords.password && newPasswords.confirmPassword) {
          if (newPasswords.password !== newPasswords.confirmPassword) {
            setPasswordError('Passwords do not match');
          } else {
            setPasswordError('');
          }
        } else {
          setPasswordError('');
        }
      }
    };

    const handleSubmit = (e) => {
       e.preventDefault();
    
      // Extract data using FormData API
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      
      // Final validation for signup
      if (activeTab === 'signup' && data.password !== data.confirmPassword) {
        setPasswordError('Passwords do not match');
        return;
      }
      
      console.log(`${activeTab} form submitted:`, data);
      // Handle form submission logic here
      // Example: await login(data) or await signup(data) --> then sends it to backend/db to confirm
      // try {
      //   if (activeTab === 'login') {
      //     await loginUser(data);
      //   } else {
      //     await registerUser(data);
      //   }
      //   setIsModalOpen(false);
      // } catch (error) {
      //   console.error('Authentication error:', error);
      // }

      //part of that is sending a signal up to the Header component to show, or not show
      if (data.email === 'admin@admin' && data.password === 'admin1'){
        loginState(true)
      }
      
      closeModal();
      e.target.reset();
    };

    const closeModal = () => {
      setPasswords({ password: '', confirmPassword: '' });
      setPasswordError('');
      // setFormData({ name: '', email: '', password: '', confirmPassword: '' });

      //Calling the parent's close handler
      onClose();
    };

    //temporary account for login: 
    const tempAccount = {
        userEmail: "admin@admin",
        password: "admin1"
    }

    return(
        <>
             {/* All the login shennagins */}
           {modalOpen && (
            <div 
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={closeModal}
            >
              <div 
                className="bg-zinc-800 rounded-md p-4 w-full max-w-md relative transform transition-all duration-300 scale-80"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Form Container */}
                <div className="text-center">
                  {/* Form Tabs */}
                  <div className="flex bg-gray-100 rounded-xl p-1 mt-8 mb-6">
                    <button
                      onClick={() => setActiveTab('signup')}
                      className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                        activeTab === 'signup'
                          ? 'bg-white text-purple-600 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Sign Up
                    </button>
                    <button
                      onClick={() => setActiveTab('login')}
                      className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                        activeTab === 'login'
                          ? 'bg-white text-purple-600 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Login
                    </button>
                  </div>
                    
                    

                  {/* Form Title */}
                  <h2 className="text-3xl font-bold text-gray-200 mb-6">
                    {activeTab === 'login' ? 'Welcome Back!' : 'Create Account'}
                  </h2>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {activeTab === 'signup' && (
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          className="w-full pl-12 pr-4 py-4 text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                    )}

                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="w-full pl-12 pr-4 py-4 text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        onChange={handlePasswordChange}
                        className="w-full pl-12 pr-12 py-4 text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        required
                        minLength="6"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>

                    {activeTab === 'signup' && (
                      <>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                          <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="w-full pl-12 pr-4 py-4 text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                            onChange={handlePasswordChange}
                            required
                            minLength="6"
                          />
                        </div>
                        {passwordError && (
                          <div className="text-red-500 text-sm mt-1 ml-1">
                            {passwordError}
                          </div>
                        )}
                      </>
                    )}

                    {activeTab === 'login' && (
                      <div className="flex justify-end">
                        <a href="#" className="text-sm text-purple-600 hover:text-purple-700 transition-colors">
                          Forgot Password?
                        </a>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      {activeTab === 'login' ? 'Sign In' : 'Create Account'}
                    </button>
                  </form>

                  {/* Social Login */}
                  <div className="mt-8">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-zinc-800 text-gray-500">Or continue with</span>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <button className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        <span className="ml-2 text-sm font-medium text-gray-400">Google</span>
                      </button>

                      <button className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                        <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        <span className="ml-2 text-sm font-medium text-gray-400">Facebook</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
    )
}