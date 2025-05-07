import { useState } from "react";
import { useAuth } from "react-oidc-context"; // Import useAuth

const AuthModal = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const auth = useAuth(); // Initialize useAuth

  if (!isOpen) return null; // Don't render if modal is closed

  const handleSignIn = () => {
    auth.signinRedirect(); // Redirect to Cognito login
  };

  const handleSignUp = () => {
    window.location.href = `https://ap-south-1xx9i2pgpe.auth.ap-south-1.amazoncognito.com/signup?client_id=33j0foh7hrrn2o1hnp125ktubc&response_type=code&scope=email+openid+phone&redirect_uri=https://expora.xyz/`;
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>

        {/* Sign In Form */}
        {!isSignUp && (
          <div>
            <button
              onClick={handleSignIn}
              className="w-full bg-blue-600 text-white p-2 rounded"
            >
              Sign in with Cognito
            </button>
          </div>
        )}

        {/* Sign Up Form */}
        {isSignUp && (
          <div>
            <button
              onClick={handleSignUp}
              className="w-full bg-blue-600 text-white p-2 rounded"
            >
              Sign up with Cognito
            </button>
          </div>
        )}

        {/* Toggle between Sign In & Sign Up */}
        <p
          className="text-center text-sm mt-4 cursor-pointer text-blue-600"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </p>

        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-600 text-xl"
          onClick={onClose}
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default AuthModal;