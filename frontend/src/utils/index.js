
const emailRegex = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i

export const isEmail = testString =>
  emailRegex.test(String(testString).toLowerCase())
