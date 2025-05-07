import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from 'react-oidc-context';

// Cognito OIDC configuration
const cognitoAuthConfig = {
  authority: "https://cognito-idp.ap-south-1.amazonaws.com/ap-south-1_xX9i2PgPe",
  client_id: "33j0foh7hrrn2o1hnp125ktubc",
  redirect_uri: `https://expora.xyz/`,
  response_type: "code",
  scope: "email openid phone",
};

// Render App
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
