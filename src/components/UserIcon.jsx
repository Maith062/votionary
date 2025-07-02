import { useState } from 'react'
import { User, Settings, LogOut, ChevronDown } from 'lucide-react'

//the destructured props, "user" is used
export default function UserIcon({user, loginState}){

    const [isHovered, setIsHovered] = useState(false)

    return(
        <div className="relative">
            <div
                className="flex items-center cursor-pointer transition-all duration-200 hover:opacity-80"
                onMouseEnter={() => setIsHovered(true)}
                // onMouseLeave={() => isClicked(false)}
            >
                <img 
                    src={user.image}
                    alt={user.name || 'User avatar'}
                    className="w-10 h-10 rounded-full border-2 border-blue-500 shadow-md transition-all duration-200 hover:border-blue-600 hover:shadow-lg"
                />
                <ChevronDown 
                    className={`ml-1 w-4 h-4 text-gray-600 transition-transform duration-200 ${
                        isHovered ? 'rotate-180' : ''
                    }`} 
                />
            </div>

            {/* Dropdown Menu */}
            {isHovered && (
                <div 
                    className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 transform transition-all duration-200 ease-out origin-top-right"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* User Info Section */}
                    <div className="px-4 py-3 border-b border-gray-100">
                        <div className="flex items-center space-x-3">
                            <img 
                                src={user.image}
                                alt={user.name || 'User avatar'}
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <p className="text-sm font-semibold text-gray-900">
                                    {user.name || 'User Name'}
                                </p>
                                <p className="text-xs text-gray-500 truncate">
                                    {user.email || 'user@example.com'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div className="py-1">
                        <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150">
                            <User className="w-4 h-4 mr-3 text-gray-500" />
                            My Profile
                        </button>
                        
                        <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150">
                            <Settings className="w-4 h-4 mr-3 text-gray-500" />
                            Settings
                        </button>
                        
                        <div className="border-t border-gray-100 my-1"></div>
                        
                        <button 
                            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors duration-150"
                            onClick={() => loginState(false)}
                        >
                            <LogOut className="w-4 h-4 mr-3 text-red-500" />
                            Log out
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}