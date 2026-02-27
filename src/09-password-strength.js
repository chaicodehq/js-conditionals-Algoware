/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  let score = 0;
  let strength = '';
  const eightcar = /^.{8,}$/
  const uppercase = /^(?=.*[A-Z]).+$/
  const lowercase = /^(?=.*[a-z]).+$/
  const numberex = /^(?=.*[0-9]).+$/
  const specialchar = /^(?=.*[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]).+$/

  score += eightcar.test(password)?1:0 ;
  score += uppercase.test(password) ?1:0 ;
  score += lowercase.test(password)?1:0 ;
  score += numberex.test(password)?1:0 ;
  score += specialchar.test(password)?1:0 ;

  switch(score){
case 1:strength = 'weak'; break;
case 2: strength = 'medium';break;
case 3: strength = 'medium';break;
case 4: strength = 'strong';break;
case 5: strength = 'very strong';break;
default: strength = 'weak';

  }


  return strength;
}
