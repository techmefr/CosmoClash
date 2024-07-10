export const isValidPassword = (password) => {
  if (password.length < 12) return false;

  const hasTwoDigits = (password.match(/\d/g) || []).length >= 2;
  const hasTwoUppercase = (password.match(/[A-Z]/g) || []).length >= 2;
  const hasTwoLowercase = (password.match(/[a-z]/g) || []).length >= 2;
  const hasTwoSpecialChars =
    (password.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length >= 2;

  return (
    hasTwoDigits && hasTwoUppercase && hasTwoLowercase && hasTwoSpecialChars
  );
};
