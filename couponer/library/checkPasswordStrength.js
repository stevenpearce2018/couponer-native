const strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  const checkPasswordStrength = value => (strongRegex.test(value) ? true : false);
  
  export default checkPasswordStrength;
  