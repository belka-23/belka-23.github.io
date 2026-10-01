# Backend connection checklist

Before switching from demo mode to persistent accounts:

- [ ] Configure Supabase or Firebase authentication.
- [ ] Replace demo sign-in with real session handling.
- [ ] Store user profiles server-side.
- [ ] Store the fictional ℬ balance server-side.
- [ ] Use a server-side ledger; never accept a client-provided balance.
- [ ] Protect marketplace create/edit/delete operations with authorization.
- [ ] Store watchlists and bet history in the database.
- [ ] Validate all play-money wagers server-side.
- [ ] Add idempotency for balance-changing operations.
- [ ] Add moderation/admin controls.
- [ ] Store media in a managed storage bucket.
- [ ] Add privacy/data deletion flows.
- [ ] Put service-role keys only in server-side environment variables.
- [ ] Keep public frontend keys limited to keys explicitly designed for browser use.
- [ ] Add monitoring, rate limiting and audit logs.

No real-money wagering or payment flow should be added to this fan project.
