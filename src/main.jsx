import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './pages/Search.tsx';
import { AuthProvider } from 'react-oidc-context';

// Cognito OIDC configuration
const cognitoAuthConfig = {
  authority: "https://cognito-idp.ap-south-1.amazonaws.com/ap-south-1_xX9i2PgPe", // Correct authority URL
  client_id: "33j0foh7hrrn2o1hnp125ktubc", // Replace with your App Client ID
  redirect_uri: `https://expora.xyz/`, // Replace with your app's redirect URI
  response_type: "code", // Authorization code flow
  scope: "email openid phone", // Scopes for user information
};

// Create a root for ReactDOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
