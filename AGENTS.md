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

# Architecture decisions

- SERVIAYA landing lives as a single route (`src/routes/index.tsx`) with all visual style in `src/styles.css` tokens and component classes (`.btn-brand`, `.scrim-*`, `.container-brand`); no other pages — why: one-page site, keeps brand style centralized and components free of ad hoc colors.
- All photography is bundled from `src/assets/*` ES6 imports, never hotlinked to Unsplash/Pexels — why: the original page broke when external hosts failed.
