<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture rules
- Public content routes use shared brand layout and leaf metadata; this keeps navigation and sharing consistent across pages.
- Editorial content and verified milestones live in a browser-safe content module, separate from enquiry server functions; this permits later CMS replacement without leaking secrets.
- Enquiries use a validated public server function with an insert-only publishable client and no public read policy; this preserves private submissions without exposing privileged credentials.
- Newsletter and payment controls remain explicitly unavailable until approved providers are connected; never simulate external service success.
