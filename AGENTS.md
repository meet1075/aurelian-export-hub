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

## Website architecture
- Keep shared brand navigation, footer, theme control and CTA in site-shell; content pages remain independent TanStack leaf routes for distinct buyer journeys and metadata.
- Keep product records in a browser-safe catalogue module and reuse the same enquiry modal and filtering across Home and Products to maintain consistent specifications.
- Keep enquiry submission explicitly draft-only until real contact information and a delivery service are configured; never show a sent confirmation without delivery.
- Define all visual roles and responsive styles centrally in src/styles.css and expose interaction variants through the existing Button component for consistent theming.
