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

The common Navbar reads the authenticated user from Redux. When logged in, the user-name/profile control provides the existing language profile/navigation options, while the Courses menu provides the learning-product entry points.

### Authenticated Courses menu requirement

After login, **Reasoning Skills must appear as the first item in the Courses menu**, alongside the existing language-oriented course entries. Selecting **Reasoning Skills** must open the **Reasoning Dashboard**, which presents the two independent track choices:

```text
Courses
  ↓
Reasoning Skills
  ↓
Reasoning Dashboard
  ├── Quantitative
  └── Verbal
```

The existing Foreign Languages course/navigation experience must remain available and unchanged apart from the approved placement of Reasoning Skills at the top of the Courses menu.

### Authenticated name-menu requirement

The authenticated name/user menu must contain these learner-facing labels and behaviours:

- **Language Club** — replaces the current Profile label but retains the existing `/Profile` navigation and all existing Foreign Languages profile features.
- **Reasoning Analytics** — replaces the current Reasoning Profile label and must link directly to the dedicated Reasoning Analytics experience; it must not route through the Quantitative or Verbal track-selection pages.

All links/buttons in this authenticated name-menu dropdown must display without text underlines.

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

## Target authenticated product flow

The desired logged-in flow is:

```text
LOGIN
  ↓
Courses
  ├── Reasoning Skills  → Reasoning Dashboard → Quantitative / Verbal
  └── existing language entries
```

The Reasoning Analytics entry in the authenticated name menu is separate from the Reasoning Dashboard track-selection flow.

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
