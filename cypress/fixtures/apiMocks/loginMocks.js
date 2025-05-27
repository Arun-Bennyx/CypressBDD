// For Future Developments

// export const mockLoginSuccess = () => {
//   cy.intercept('POST', '/api/login', (req) => {
//     console.log('Intercepted Login Request:', req.body); // ✅ Debug log
//     req.reply({
//       statusCode: 200,
//       body: { message: 'Login successful' },
//     });
//   }).as('loginRequest');
// };

// export const mockLoginFailure = () => {
//   cy.intercept('POST', '/api/login', (req) => {
//     console.log('Intercepted Login Request:', req.body); // ✅ Debug log
//     req.reply({
//       statusCode: 401,
//       body: { message: 'Invalid credentials' },
//     });
//   }).as('loginRequest');
// };

// // Additional API mocks
// export const mockUserProfile = () => {
//   cy.intercept('GET', '/api/user/profile', {
//     statusCode: 200,
//     body: {
//       username: 'testuser',
//       email: 'testuser@example.com',
//       role: 'admin',
//     },
//   }).as('getUserProfile');
// };

// export const mockDashboardData = () => {
//   cy.intercept('GET', '/api/dashboard', {
//     statusCode: 200,
//     body: {
//       stats: { users: 120, sales: 3000, revenue: 50000 },
//     },
//   }).as('getDashboardData');
// };
