import LocalizedStrings from "react-localization";

export const strings = new LocalizedStrings({
  en: {
    labels: {
      rooms: "Rooms",
      people: "People",
      submit: "Submit",
      signIn: "Sign In",
      signOut: "Sign Out",
      signUp: "Sign Up",
      forgotPassword: "Forgot password?",
      alreadyRegistered: "Already have an account?"
    },

    forms: {
      usernameEmail: "Username or email",
      username: "Username",
      email: "Email",
      password: "Password",
      repeatPassword: "Repeat password"
    }
  },
  rus: {
    labels: {
      rooms: "Rooms",
      people: "People"
    }
  }
});

const emailRegex = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;

export const isEmail = testString =>
  emailRegex.test(String(testString).toLowerCase());
