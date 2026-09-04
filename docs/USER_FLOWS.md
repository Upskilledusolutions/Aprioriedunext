# User Flows

## Current login flow

The current user experience is approximately:

```text
User visits site
    ↓
Clicks Login
    ↓
/auth page
    ↓
Enters name + user ID + password
    ↓
Frontend calls backend /api/login
    ↓
Backend returns user information
    ↓
Frontend stores user in Redux
    ↓
Frontend stores user cookie
    ↓
Frontend updates completed-quiz data
    ↓
Current code redirects to /
```

The current login page also requests IP/location information from an external IP information service and sends that information with the login request. This should be reviewed later for privacy, security and necessity.

## Current authenticated navigation

The common Navbar reads the authenticated user from Redux. When logged in, it provides links to Profile, Courses (`/User`) and Forum, as well as logout.

The common application layout currently wraps pages with the Navbar and Footer.

## Current language dashboard flow

The current `/User` page displays the existing language-learning activities directly:

- Lessons
- Exercises
- Conversations
- Reading Assignments
- Listening Assignments
- Speaking Practice
- Writing Practice
- Translation
- Writing Tasks
- Speaking Tasks
- Practice Test

This is the existing Foreign Languages experience and should be protected while the new product is added.

## Target flow for two products

The desired future flow is:

```text
                         LOGIN
                           ↓
                    PRODUCT SELECTION
                     /              \
                    /                \
         FOREIGN LANGUAGES      REASONING & ACADEMIC SKILLS
                ↓                         ↓
       Language Dashboard         Reasoning Dashboard
                ↓                         ↓
       Existing language          Quantitative / Verbal
       learning system            learning system
```

## Returning user

A returning user should still have one account and one login. The product-selection page should make it easy to choose either product.

The selected product may later be remembered for convenience, but the account itself must remain shared.

## Switching products

A logged-in learner should be able to switch from Foreign Languages to Reasoning & Academic Skills without logging out.

Switching products should change the product experience, not the user's identity.

## Progress example

A learner might have:

```text
Foreign Languages
French: 72%
Spanish: 31%

Reasoning & Academic Skills
Quantitative: 45%
Verbal: 62%
```

These values must remain separate.

## Security rule

A frontend page being hidden or protected is not sufficient security. The backend must also enforce authentication and authorization for protected data and administrative operations.

The current ProtectedRoute checks user status through `/api/check-status`, but future product-specific permissions must also be enforced server-side.

## Important implementation rule

Do not change the existing language dashboard until the new product-selection architecture has been tested. The first implementation should add the smallest possible layer around the existing system.
