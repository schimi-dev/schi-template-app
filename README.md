# Documentation

## About this Project
This is a simple mockup SAAS application built on top of the Next.js App Router. It is a proof of concept for integrating React Server Components, Server Actions, the Next.js App Router and NextAuth.js in a way that allows a user to perform CRUD operations on personal resources.

This document contains information about the setup and design decisions. Moreover, it contains pitfalls and problems of the Next.js App Router.

## Environment Variables

### Version Managed

The following environment variables are version managed and can be found in the `.env` file of this project.

`NEXT_PUBLIC_TITLE=`

### Non-Version Managed

The following environment variables are not version managed with the source code of this project. Use a `.env.local` file to configure them for your environment. If this app is hosted on [Vercel](https://vercel.com) configure them via their [Dashboard](https://vercel.com/dashboard).

#### Database
`MONGODB_URI=`

#### Login Providers

Okta
* `OKTA_ID=`
* `OKTA_SECRET=`
* `OKTA_ISSUER=`

Auth0
* `AUTH0_ID=`
* `AUTH0_SECRET=`
* `AUTH0_ISSUER=`

Keycloak
* `KEYCLOAK_ID=`
* `KEYCLOAK_SECRET=`
* `KEYCLOAK_ISSUER=`

#### Authentication (NextAuth.js)
* `NEXTAUTH_URL=`
* `NEXTAUTH_URL_INTERNAL=`
* `NEXTAUTH_SECRET=`

## Deployment

This section provides information about how to deploy and operate this application. The app can be hosted on [Vercel](https://vercel.com/) or it can be deployed as a standalone Node.js server.

### Vercel
On Vercel this app should work out of the box by just importing it from [GitHub](https://github.com/) and configuring the relevant environment variables as described above.

### Standalone Node.js server
#### Building and going to production

The following steps for deploying this app to production are very important. Thus, they are cited here directly from the Next.js documentation. 

Creating a standalone folder can be enabled in `next.config.js` via below option:

```js
module.exports = {
  output: 'standalone',
};
```

As the Next.js docs states: *"This will create a folder at .next/standalone which can then be deployed on its own without installing node_modules. Additionally, a minimal server.js file is also output which can be used instead of next start. This minimal server does not copy the public or .next/static folders by default as these should ideally be handled by a CDN instead, although these folders can be copied to the standalone/public and standalone/.next/static folders manually, after which server.js file will serve these automatically."*

https://nextjs.org/docs/app/api-reference/next-config-js/output#automatically-copying-traced-files

#### Operating and Logging
On Linux this app can be operated via `Systemd`. Environment variables can be configered in the corresponding unit files or via a `.env.local` file. Logging in this application is done to stdout and stderr. These logs can be accessed via `journalctl` on the server. So, handling of logs is delegated to the `Systemd` software suite.

#### Load Balancing
The backend is a stateless IO system. So, load balancing works without session affinity.

## Design Decisions

### Authentication

For auth we consider two things:
* React Server Components for fetching data
* Server Actions for mutating data

Both can rely on the `@/lib/auth/getUser.tsx` function that does a `redirect()` to the login page if the user is not authenticated.

#### React Server Components
React Server Components form the most central part of handling authentication and adjusting the UI accordingly For instance, they can show the Login page by using `redirect(navigation.login)` when no user is present or the session has timed out. Having this component oriented way of doing Login page redirection helps to avoid edge cases compared to using middleware. 
This is because middleware and RSCs live in two different worlds and an edge case might occur when the session times out between being checked in middleware and later again being checked in an RSC. Therefore, RSCs are conceptually the single source of truth regarding auth state, since they have to adjust the UI accrodingly anyway. Moreover, by using this component oriented way of handling auth, we can handle Login redirects whenever we do not have a user at component level, making our app stable for restructuring.

#### Server Actions
Server Actions can trigger redirects, which is a nice way of handling e.g. a session timeout on requests that do mutations.

### Links vs. `router.push()`
We use Links for all things that can be accessed on the screen with JS disabled. All elements that can only appear on the screen via using JS (e.g. Popper, Menu) we use `router.push()` because prefetching does not really have an advantage in this situation. When opening such a Popper/Menu the user might navigate away from that page before prefetching for all Links that get visible in such a situation is finished.

## Pitfalls

This section includes the most relevant pitfalls that developers might run into.

### Possible hydration mismatch when rendering dates on the server
A Hydration mismatch due to different timezones between server and client might occurr when rendering dates on the server.

### Customize Forms/Inputs
We customize forms and inputs to prevent potentially annoying browser behaviour:
* Set `spellCheck={false}` on forms and inputs
* Set `autoComplete='off'` on forms and inputs

### CSS
We need to apply the correct color-scheme when allowing the user to manually toggle dark and light theme. Thus, we set `color-scheme: dark;` and `color-scheme: light;` in the corresponding classes in `globals.css`.

Moreover, we set the background color for the body also in `globals.css`. While this is redundant and could be done by `Tailwind` alone, we still want to set this for the whole document because it helps preventing edge cases, where e.g. opening a Popper/Menu leads to a vertical scrollbar appearing, because it is too wide for a small screen and then fully scolling this popper into the view leads to the original Browser-default background color appear outside of where your `Tailwind` component defining the background has its boundaries.

Also, explicitly disabling or overriding focus styling globally might be a good idea because the browser-defaults don't relaly look good:
```css
*:focus {
    outline: none;
}
``` 

### Fonts are loaded from remote CDN at build time
Currently the fonts are loaded from https://fonts.google.com/ at build time.

## App Router - Pitfalls

### The initially loaded page in the browser is handled dfferently by/in the client side cache of Next.js compared to all subsequent pages
The initially loaded page (that is accessed via a hard reload in the browser) is handled differently by the client side cache of Next.js than the pages that are subsequently accessed via soft transitions. This affects prefetching via Next.js Links. The data for the initially loaded page is fetched again as soon as a corresponding Link component to that page becomes visible and prefetches it. This becomes noticable e.g. if a page is hard reloaded and has a Link to itself. Then the function/endpoint where the data is fetched by that page is called twice.

## App Router - Problems

### Stale data with `revalidatePath()`
After navigating away from a route that called `revalidatePath()`, the new page might have stale data. The route that called `revalidatePath()` is refreshed fine. This seems to have been fixed in in Next.js `13.4.5`. However, it seems to occur again with `13.4.11-canary.1`. In `13.4.13-canary.8` it was fixed again.

### Strange bug probably related to focusing an `input` of a `form` too early after a page is loaded/mounted

When an input inside a form is focused while the browser is still loading/hydrating and that form is then submitted (via fetch and `e.preventDefault()`), `router.refresh()` is not executed/completed until further interaction with that page/input is done. If `router.refresh()` is called inside of a transition, all state updates inside that transition are not executed/completed until further interaction with that page/input is done. Thus, the transition has `isPending` being true. There are different UI actions that might lead to the state changes suddenly being applied like clicking on the page/input or hovering a Link component from `next/link`. However, this could not be reproduced consistently accross different applications and scenarios of how Links, Layouts and Pages are structured.

Similarly, when an input inside a form is focused while the page is still loading/hydrating, using Server Actions inside React Server Components to submit that form might not update the page when `revalidatePath()` is called in that Server Action. When hovering a Link (`next/link`) the UI state gets finally updated. When that problem occurrs, the `useFormStatus()` sometimes has `pending` remaining `true` after form submission, but most of the times `pending` of `useFormStatus()` becomes `false` again after the form submission. Regardless, in both cases the data is stale until hovering a Link (`next/link`).

These two problems behave similarly, and are reproducible especially with focusing an input immediately after a hard reload in the browser. However, it is hard to consistently reproduce them and thus to detect every scenario where this might occurr.

### Stale Metadata with Server Actions
Currently, the page title set by `generateMetadata()` and `metadata` are stale. This seems to be related to enableing Server Actions in `next.config.js`. This has been fixed in `13.4.9`.

### Using `redirect()` after `revalidatePath()` in a Server Action leads to stale data in layout
When using `redirect()` after `revalidatePath()` the data in layouts that stay mounted becomes stale. 

There is a corresponding issue that tracks this problem:

https://github.com/vercel/next.js/issues/52075

This was fixed by `13.4.13-canary.8`.

### Server Action - `redirect()` error log
Using `redirect()` in a server action logs the following message to the console on the server:
```
failed to get redirect response TypeError: fetch failed
    at Object.fetch (node:internal/deps/undici/undici:11576:11) {
  cause: RequestContentLengthMismatchError: Request body length does not match content-length header
      at write (node:internal/deps/undici/undici:10059:41)
      at _resume (node:internal/deps/undici/undici:10037:33)
      at resume (node:internal/deps/undici/undici:9938:7)
      at connect (node:internal/deps/undici/undici:9927:7) {
    code: 'UND_ERR_REQ_CONTENT_LENGTH_MISMATCH'
  }
}
```
However, according to how the UI is updated the redirect seems to work correctly.

This seems to have been fixed within one of the `13.4.13-canary` versions.

### Errors in `generateMetadata()` do not seem to be caught by `error.tsx`
It seems that `error.tsx` is not able to catch errors thrown inside `generateMetadata()`. This can be tested e.g. when an invalid MongoDB ObjectId is present as path param of a route that fetches data for that ObjectId in its `generateMetadata()` function.

### Browser console `id` mismatch warning with `next dev`
When rendering certain components like e.g. the `@headlessui/react` Dialog on the server a warning is present in the browser console:
```
app-index.js:31 Warning: Prop `id` did not match. Server: "headlessui-menu-button-:Rplmcq:" Client: "headlessui-menu-button-:R36mpj9:"
```
This only occurs with `next dev`. 

This seems to have been fixed within one of the `13.4.13-canary` versions.

## App Router - Feature Tracking

### Extend Session Cookies `maxAge`
Currently there is a hard session timeout when only relying on React Server Components for authentication. We should periodically check for changes in Next.js and NextAuth.js. Writing Cookies in this new architecture would be a nice way of rotating the session cookie/timeout when the user is active and thus preventing a hard session timeout.

https://next-auth.js.org/configuration/nextjs#in-app-directory

### Typed Routes (beta)
https://nextjs.org/docs/app/building-your-application/configuring/typescript#statically-typed-links

### Server Actions (alpha)
https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions

#### Explore Server Actions
* How does Authentication work with Server Actions?
* How can I access the current User within Server Actions?
* Throw an error or call `notFound()` or `redirect()` inside Server Actions to check how this integrates with the router.
* Trigger a redirect (e.g. to the Login page on a session timeout) and see if/how that works.
* Explore how revalidation/refreshing of data on the UI from a Server Action works in general.
* How does client side form validation work?
* In any case parse the FormData via `zod` on the server.
* Should inputs be controlled or not?
* Can I compose Client-side actions (e.g. functions that do state updates) with Server Actions and then pass them as `action` prop to a form?

#### Server Actions - Test Scenarios
* Check that there is no stale data after mutations that call `redirect()`.
* Check that there is no stale data after mutations that call `revalidatePath()`, especially in layouts and after navigation.
* Check that `redirect()` (also to the Login page) and throwing Errors (more precisely showing an Error Boundary for thrown errors) work when used in Server Actions.

**Pitfall:** It seems that, while usage of `notFound()` technically works, the Next.js team is not sure whether this should be allowed in Server Actions:
https://github.com/vercel/next.js/pull/53373

#### Server Action - State Report `13.4.13-canary.8`
The Next.js version `13.4.13-canary.8` had some very noticable positive effects on how well Server Actions work. Several issues regarding the application of `revalidatePath()` and `redirect()` have been fixed.

The following behaviour is true for Next.js `13.4.13-canary.8`:
* Redirects triggered from Server Actions within a page do not lead to any state loss in any layout wrapping that page.
* Server Actions can be wrapped by Client Actions and these Client Actions can be passed to forms via the `action` prop. That way we can use controlled inputs inside forms and build Server Actions with type-save signatures.
* A Server Action used that way can trigger a `redirect()`.
* A Server action used that way can refresh the UI via `revalidatePath()`.
* A Server action used that way can throw an error that leads to the cooresponding `error.tsx` component being shown.
* A Server action is allowed to `redirect` to the exact same page (url) it was called from. This allows to reflect Server-side validation errors in the search params. On validation error we do a redirect to the same page with the errors as search params. On success we do a redirect to the same page without any search params, thus ensuring that the error messages that were shown based on the search params are gone. If no search params were present before successfully mutating data via that form, a redirect to the exact same url happens, but that shouldn't be a problem.
* A `redirect` in a Server Action replaces the current history entry in the Browser's History API.

**Pitfall:** Currently url changes made in a middleware (e.g. Internationalization Middleware) seem to not be applied for redirects (via `redirect`) in Server Actions. E.g. if a Server Action would trigger a redirect to `/login` and a middleware would prefix urls with the current lang (e.g. `/en/login`) the url displayed in the browser would still be `/login` altough the correct page for the `/[lang]/login` route is shown in the browser. Ensuring that redirects in Server Actions already have the current locale is a good idea anyways. For now, Internationalization Middleware should only be applied for the base path `/` to not interfer whith Server Actions and to enforce the programmer to always include the current language in redirects.

## App Router - Pull Requests
* Support scroll: false for Link component for app router: https://github.com/vercel/next.js/pull/51869
* Upgrade vendored React: https://github.com/vercel/next.js/pull/51779
* router: apply server actions in a similar way to router.refresh(): https://github.com/vercel/next.js/pull/53373

## App Router - Issues
* Using redirect after revalidateTag(), revalidatePath() or cookies().set() in server actions do not update the layouts or the back cache: https://github.com/vercel/next.js/issues/52075
* [NEXT-1189] metadata not updated on navigation with experimental.serverActions set to true: https://github.com/vercel/next.js/issues/49409
* Error: connect ECONNREFUSED: https://github.com/vercel/next.js/issues/52150

## Tooling
### General
* Typescript
* Eslint (preconfigured and provided by Next.js)

### VS Code Plugins
* DotENV
* GitHub Copilot
* Markdown Preview Github Styling
* PostCSS Language Support
* Tailwind CSS IntelliSense
* Version Lens

### Debugger
Moreover, a debugger should to be configured. Below is a Link to the Next.js documentation going into detail about this.

https://nextjs.org/docs/pages/building-your-application/configuring/debugging

## Links

### Core Technologies
* https://nextjs.org/docs
* https://react.dev/learn

### Layouts RFC
* https://nextjs.org/blog/layouts-rfc
* https://github.com/vercel/next.js/discussions/37136

### NextAuth.js
* https://nextjs.org/docs/authentication
* https://next-auth.js.org/configuration/nextjs#in-app-directory

### React Server Components
* https://www.plasmic.app/blog/how-react-server-components-work
* https://blog.bitsrc.io/next-js-13-what-do-the-new-bleeding-edge-features-actually-do-d3e5fd418563

### Deployment
https://nextjs.org/docs/app/api-reference/next-config-js/output#automatically-copying-traced-files

### Generate Secret for NextAuth.js
https://generate-secret.vercel.app/32
