
import React from 'react'
import FAQPage from './FAQPage'
import SupportPage from './SupportPage'
import ApplyFormPage from './ApplyFormPage'
import ThankYouFormPage from './ThankYouFormPage'
import SignUpPage from './SignUpPage'
import ContactUsPage from './ContactUsPage'
import ErrorPage from './ErrorPage'
import SignInPage from './SignInPage'

const App = () => {
  return (
    <div>

      <ErrorPage />

      <SignInPage />

      <SignUpPage />

      <ContactUsPage />

      
      <FAQPage />
      <SupportPage />

      <ApplyFormPage />

      <ThankYouFormPage />
    </div>
  )
}

export default App