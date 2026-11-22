<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="referrer" content="no-referrer">
    <title>Customer Account | K&amp;A Farms</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&amp;display=swap">
    <link rel="stylesheet" href="https://www.ka-farms.com/css/shopstyle.css">
    <link rel="icon" type="image/png" href="https://www.ka-farms.com/assets/KA_logo.png">
    <script defer src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    <style>
        [hidden] { display: none !important; }
        .brand { color: inherit; text-decoration: none; font-weight: 700; }
        .account { max-width: 500px; padding-top: clamp(28px, 8vw, 72px); }
        .account .card { padding: clamp(16px, 5vw, 26px); }
        .account h1 { margin-bottom: 16px; }
        .account h2 { margin: 0 0 14px; font-size: 20px; }
        .account form { display: grid; gap: 14px; }
        .account label { display: grid; gap: 6px; font-weight: 600; }
        .account input {
            width: 100%; padding: 10px 12px; border: 1px solid #8d94a0;
            border-radius: 10px; background: #fff; color: var(--ink); font: inherit;
        }
        .account .btn { justify-content: center; font: inherit; font-weight: 700; text-decoration: none; color: var(--ink); }
        .account .btn.primary { color: #171717; }
        .account .btn:disabled { opacity: .6; cursor: not-allowed; }
        .account .actions { display: flex; flex-wrap: wrap; gap: 8px; }
        .account .form-links { margin: 16px 0 0; display: flex; flex-wrap: wrap; gap: 8px 16px; }
        .text-button {
            padding: 4px 0; border: 0; background: transparent; color: #665700;
            font: inherit; font-weight: 600; text-decoration: underline; cursor: pointer;
        }
        .text-button:disabled { opacity: .6; cursor: not-allowed; }
        :focus-visible { outline: 2px solid #6f6000; outline-offset: 3px; }
        #status { margin: 0 0 16px; background: var(--accent); color: var(--ink); }
        #status.error { color: #792921; background: #f9e7e3; }
        #accountEmail { overflow-wrap: anywhere; }
    </style>
</head>
<body>
<header>
    <div class="nav">
        <a class="brand" href="https://www.ka-farms.com/">K&amp;A Farms</a>
        <nav class="links" aria-label="Main navigation">
            <a href="https://www.ka-farms.com/Shop">Shop</a>
            <a href="https://www.ka-farms.com/cart">Cart</a>
        </nav>
    </div>
</header>
<main class="container account">
    <h1 class="h1">Customer account</h1>
    <p id="status" class="notice" role="status">Connecting…</p>
    <section class="card" aria-label="Customer account access" hidden id="accountCard">
        <div id="signInView" hidden>
            <h2>Sign in</h2>
            <form id="signIn">
                <label>Email <input name="email" type="email" autocomplete="username" required></label>
                <label>Password <input name="password" type="password" autocomplete="current-password" required></label>
                <button class="btn primary" type="submit">Sign in</button>
            </form>
            <div class="form-links">
                <button class="text-button" type="button" data-view="signUp">Create an account</button>
                <button class="text-button" type="button" data-view="reset">Forgot password?</button>
            </div>
        </div>
        <div id="signUpView" hidden>
            <h2>Create an account</h2>
            <form id="signUp">
                <label>Email <input name="email" type="email" autocomplete="username" required></label>
                <label>Password <input name="password" type="password" autocomplete="new-password" minlength="8" required></label>
                <button class="btn primary" type="submit">Create account</button>
            </form>
            <div class="form-links"><button class="text-button" type="button" data-view="signIn">Back to sign in</button></div>
        </div>
        <div id="resetView" hidden>
            <h2>Reset your password</h2>
            <form id="reset">
                <label>Email <input name="email" type="email" autocomplete="username" required></label>
                <button class="btn primary" type="submit">Send reset link</button>
            </form>
            <div class="form-links"><button class="text-button" type="button" data-view="signIn">Back to sign in</button></div>
        </div>
        <div id="recoveryView" hidden>
            <h2>Choose a new password</h2>
            <form id="recovery">
                <label>New password <input name="password" type="password" autocomplete="new-password" minlength="8" required></label>
                <label>Confirm password <input name="confirmation" type="password" autocomplete="new-password" minlength="8" required></label>
                <button class="btn primary" type="submit">Update password</button>
            </form>
            <div class="form-links"><button class="text-button" type="button" data-sign-out>Cancel and sign out</button></div>
        </div>
        <div id="accountView" hidden>
            <h2>Signed in</h2>
            <p id="accountEmail"></p>
            <div class="actions">
                <a class="btn primary" href="https://www.ka-farms.com/Shop">Continue shopping</a>
                <button class="btn" type="button" data-sign-out>Sign out</button>
            </div>
        </div>
    </section>
</main>
<script>
document.addEventListener('DOMContentLoaded', async () => {
    const status = document.getElementById('status');
    const card = document.getElementById('accountCard');
    const accountEmail = document.getElementById('accountEmail');
    const views = Object.fromEntries(
        ['signIn', 'signUp', 'reset', 'recovery', 'account'].map(name => [name, document.getElementById(name + 'View')])
    );
    const forms = Object.fromEntries(
        ['signIn', 'signUp', 'reset', 'recovery'].map(name => [name, document.getElementById(name)])
    );

    function showStatus(message = '', error = false) {
        status.textContent = message;
        status.classList.toggle('error', error);
        status.hidden = !message;
    }

    function openView(name, focus = false) {
        for (const [key, view] of Object.entries(views)) view.hidden = key !== name;
        card.hidden = false;
        if (focus) views[name].querySelector('input')?.focus();
    }

    if (!window.supabase) {
        showStatus('Could not load the sign-in service. Refresh to try again.', true);
        return;
    }

    const redirectUrl = new URL(location.pathname, location.origin).href;
    const recoveryKey = 'ka-farms-customer-recovery';
    const callback = new URLSearchParams(location.search);
    const callbackError = callback.get('error_description') ||
        new URLSearchParams(location.hash.slice(1)).get('error_description');
    let recovering = sessionStorage.getItem(recoveryKey) === 'yes';

    const client = window.supabase.createClient('https://mxuqexwylasphrnldhmx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14dXFleHd5bGFzcGhybmxkaG14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzOTQ3NzMsImV4cCI6MjA4MDk3MDc3M30.u1mS0rM6EWH5BlJ6qvz4bXRCy5LQSqaF_9R0eUlPuLc', {
        auth: { storageKey: 'ka-farms-customer-account', flowType: 'pkce' },
    });

    function showSession(session) {
        accountEmail.textContent = session?.user?.email ?? '';
        if (!session) {
            recovering = false;
            sessionStorage.removeItem(recoveryKey);
            openView('signIn');
        } else {
            openView(recovering ? 'recovery' : 'account');
        }
    }

    client.auth.onAuthStateChange((event, session) => {
        if (event === 'PASSWORD_RECOVERY') {
            recovering = true;
            sessionStorage.setItem(recoveryKey, 'yes');
            showSession(session);
            showStatus();
        } else if (event === 'SIGNED_OUT') {
            showSession(null);
        }
    });

    function action(message, run) {
        return async event => {
            event.preventDefault();
            const buttons = Array.from(card.querySelectorAll('button'));
            buttons.forEach(button => { button.disabled = true; });
            showStatus(message);
            try {
                await run();
            } catch (error) {
                showStatus(error.message || 'Something went wrong. Please try again.', true);
            } finally {
                buttons.forEach(button => { button.disabled = false; });
            }
        };
    }

    card.querySelectorAll('[data-view]').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.dataset.view;
            const source = button.closest('[id$="View"]').querySelector('input[name="email"]');
            if (source?.value) forms[name].elements.email.value = source.value;
            openView(name, true);
            showStatus();
        });
    });

    function credentials(form) {
        return { email: form.elements.email.value.trim(), password: form.elements.password.value };
    }

    forms.signIn.addEventListener('submit', action('Signing in…', async () => {
        const { data, error } = await client.auth.signInWithPassword(credentials(forms.signIn));
        if (error) throw error;
        forms.signIn.reset();
        showSession(data.session);
        showStatus();
    }));

    forms.signUp.addEventListener('submit', action('Creating your account…', async () => {
        const values = credentials(forms.signUp);
        const { data, error } = await client.auth.signUp({
            ...values, options: { emailRedirectTo: redirectUrl },
        });
        if (error) throw error;
        forms.signUp.reset();
        forms.signIn.elements.email.value = values.email;
        showSession(data.session);
        showStatus(data.session ? 'Account created.' : 'Check your email for a confirmation link. Open it in this browser.');
    }));

    forms.reset.addEventListener('submit', action('Sending reset link…', async () => {
        const email = forms.reset.elements.email.value.trim();
        const { error } = await client.auth.resetPasswordForEmail(email, { redirectTo: redirectUrl });
        if (error) throw error;
        showStatus('If an account exists for that email, a reset link will be sent. Open it in this browser.');
    }));

    forms.recovery.addEventListener('submit', action('Updating password…', async () => {
        const { password, confirmation } = forms.recovery.elements;
        if (!recovering) throw new Error('Request a new password reset link and try again.');
        if (password.value !== confirmation.value) throw new Error('The passwords don’t match.');
        const { data, error } = await client.auth.updateUser({ password: password.value });
        if (error) throw error;
        recovering = false;
        sessionStorage.removeItem(recoveryKey);
        forms.recovery.reset();
        accountEmail.textContent = data.user?.email ?? accountEmail.textContent;
        openView('account');
        showStatus('Password updated.');
    }));

    card.querySelectorAll('[data-sign-out]').forEach(button => {
        button.addEventListener('click', action('Signing out…', async () => {
            const { error } = await client.auth.signOut({ scope: 'local' });
            if (error) throw error;
            forms.recovery.reset();
            showSession(null);
            showStatus('Signed out.');
        }));
    });

    try {
        const { data, error } = await client.auth.getSession();
        if (error) throw error;
        showSession(data.session);
        if (callbackError || (callback.has('code') && !data.session)) {
            throw new Error('This email link could not be completed. Open a new link in the browser where you requested it.');
        }
        showStatus();
    } catch (error) {
        if (card.hidden) openView('signIn');
        showStatus(error.message || 'Could not restore your session.', true);
    }
});
</script>
</body>
</html>
