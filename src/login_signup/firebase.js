import { initializeApp } from "firebase/app";
import { ReCaptchaV3Provider } from "firebase/app-check";
import { getAuth } from "firebase/auth";

import { OAuthProvider } from "firebase/auth";

const provider = new OAuthProvider('microsoft.com');

provider.setCustomParameters({
  // Optional "tenant" parameter in case you are using an Azure AD tenant.
  // eg. '8eaef023-2b34-4da1-9baa-8bc8c9d6a490' or 'contoso.onmicrosoft.com'
  // or "common" for tenant-independent tokens.
  // The default value is "common".
  prompt: 'consent',
  login_hint: 'user@firstadd.onmicrosoft.com',
  tenant: 'common'
});

provider.addScope('mail.read');
// provider.addScope('calendars.read');


const firebaseConfig = {
  apiKey: "AIzaSyDoBiI4Fo-tbXc1YLNl6elgLowamM5_7PQ",
  authDomain: "genai-64b1d.firebaseapp.com",
  projectId: "genai-64b1d",
  storageBucket: "genai-64b1d.appspot.com",
  messagingSenderId: "650338091370",
  appId: "1:650338091370:web:8a9f1a76f579b37a84e513",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const microsoft_provider = provider;