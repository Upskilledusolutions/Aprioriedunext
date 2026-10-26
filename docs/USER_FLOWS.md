# User Flows



> ## BINDING OWNER RULE — AUTHENTIC PUBLISHED READING TEXTS ONLY
>
> **No original fiction or nonfiction reading passages may ever be used.** Every learner-facing fiction or nonfiction passage must be an authentic excerpt from a published work by a recognized literary writer/author, or an authentic published translation whose own rights status is verified for use in India. Do not create original passages, AI-written retellings, paraphrases, modernizations, or imitations of an author's style.
>
> **Rights failure means replacement, never original writing.** If a text, edition, excerpt, or translation is not confirmed eligible for use in India, replace it with another authentic published work by a recognized author that serves the same learning purpose and has comparable syntactic and semantic complexity appropriate to that level. Prefer a title from the owner's approved reading list. If no eligible approved alternative is available, stop and ask the owner to approve a replacement; never fill the slot with invented text.
>
> **Nonfiction candidate-pool record (2026-10-26).** The curriculum now records 75 nonfiction candidate works across five reading bands, with 15 distinct works per band and no work assigned to more than one band. This is a candidate pool, not an approved or rights-cleared passage set. **Only a work and the exact edition/translation confirmed to be in the public domain for use in India may be selected.** If any candidate, edition, or translation is not in the public domain in India or that status cannot be confirmed, replace it with another authentic published nonfiction work of similar syntactic and semantic complexity, appropriate to the same level and learning purpose. Do not write an original or AI-generated substitute.
>
> **Public-website-first change rule (owner-directed 2026-10-26).** For each new change, work directly on the public website whenever its supported editing/configuration path can safely perform the change. Do not default to local development for a change the public website can safely support directly. Use local implementation only when required by source-code changes, build/test tooling, backend or database work, infrastructure/configuration, or another limitation that makes direct public-site editing unavailable or unsafe. A locally implemented change is not complete until it is reflected on the public website through the applicable release path. This rule does not waive content/source rights checks, owner acceptance for reading content, required approval gates, security controls, or protection of existing features. If a direct live change cannot be made safely, use the required local process and follow the existing approval/release gates.
>
> **Source approval is mandatory.** Use the owner's approved reading list as the source of truth. Record the original author, title, publication/edition, translator if applicable, exact source URL and excerpt location, India-specific rights basis, and owner/editorial approval. The underlying work's public-domain status does not automatically clear a modern translation, edition, annotations, or illustrations. Original questions and feedback may be authored about an eligible text; the reading passage itself may not be original.
>
> **Text-only replacement and regression protection.** For the current content-replacement work, change reading text and only the passage metadata strictly required to identify its authentic source. Preserve existing question-bank structure, IDs where valid, question counts, response formats, answer mappings, player/UI, navigation, analytics, authentication, and all previously completed build functionality. Do not undertake unrelated refactoring or unnecessary checks. The owner will review the content directly on the website. Once a stage's text replacement is accepted and that stage is ready to go live, publish that completed stage as the corresponding public live update; do not publish unreviewed content or bundle unrelated changes. No build, feature, or prior stage may regress.

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

### Stage-selectable Reasoning Analytics flow

```text
Reasoning Analytics
  ↓
Stage selector
  ├── released/authorized Stage 1
  ├── released/authorized Stage 2
  └── other released/authorized Stages as they are accepted
        ↓
selected Stage Analytics
        ↓
same Analytics feature set, filtered to the selected Stage only
```

The selector must not show a Stage that is unreleased or unauthorized for the learner. For an account with `type = "all"`, all released/accepted Stages in the current Reasoning product scope are selectable.

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

Do not change the existing language dashboard until the new product-selection architecture has been tested. The first implementation should add the smallest possible layer around the existing system.### Authenticated Courses page Reasoning entry path

In addition to the primary **Reasoning Skills → Reasoning Dashboard** pathway in the Courses menu, the authenticated Courses page (`/User`) now provides a direct secondary entry path. The first two cards are:

```text
Courses page
  ├── Quantitative Reasoning → /Reasoning/Quantitative
  └── Verbal Reasoning → /Reasoning/Verbal
```

These direct cards open the respective tracks without passing through the general Reasoning Dashboard. They complement, rather than replace, the existing Reasoning Dashboard pathway.

The project owner completed a quick live check confirming this direct Courses-page pathway is present and working in production. Comprehensive Stage 1 verification remains pending.

## English Aptitude entry and cross-product regression guard

The public English Aptitude introduction is at /English-Aptitude; the dashboard and activity routes require an authenticated session. English Aptitude is presented as its own product and should not change the established Foreign Languages or Reasoning entry, navigation or card behaviour.

The Product Selection layout keeps the existing Foreign Languages and Reasoning cards at their previous desktop size and two-column arrangement; the English Aptitude card is placed beneath them across the full row and stacks responsively on mobile. Its styling must remain scoped to Product Selection. Any later layout change must retain these existing dimensions and behaviours unless the owner explicitly approves a redesign.

General rule: a new feature must not unintentionally alter existing pages, layout, functionality, navigation, authentication or analytics. Test relevant shared flows at desktop and mobile sizes after each coherent change.

