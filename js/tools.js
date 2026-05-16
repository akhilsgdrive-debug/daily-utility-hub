<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Free online tools: Calculator, Notes App, To-Do List, Countdown Timer, Stopwatch, Unit Converter, BMI Calculator, Password Generator &amp; Text Utilities. All in one place, 100% private.">
    <meta property="og:title" content="All Free Tools • Daily Utility Hub">
    <meta property="og:description" content="Use 10+ free browser-based tools instantly. No sign-up, no tracking. Calculator, Notes, Timers, Converters &amp; more.">
    <title>All Tools • Daily Utility Hub (Calculator, Notes, Timers &amp; More)</title>
    
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="css/style.css">
    <link rel="manifest" href="manifest.json">
    <script>
        tailwind.config = { darkMode: 'class', theme: { extend: { fontFamily: { 'sans': ['Inter', 'system-ui', 'sans-serif'] } } } };
    </script>
</head>
<body class="bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
    <!-- Nav -->
    <nav class="sticky top-0 z-50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800">
        <div class="max-w-screen-xl mx-auto px-6 flex items-center justify-between h-16">
            <a href="index.html" class="flex items-center gap-3">
                <div class="w-9 h-9 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl tracking-tighter">D</div>
                <span class="font-semibold text-xl tracking-tight">Daily Utility <span class="text-indigo-600 dark:text-indigo-400">Hub</span></span>
            </a>
            <div class="hidden md:flex items-center gap-8 text-sm font-medium">
                <a href="index.html" class="hover:text-indigo-600">Home</a>
                <a href="tools.html" class="text-indigo-600 font-semibold">Tools</a>
                <a href="about.html" class="hover:text-indigo-600">About</a>
                <a href="contact.html" class="hover:text-indigo-600">Contact</a>
            </div>
            <div>
                <button id="dark-mode-toggle" class="w-10 h-10 flex items-center justify-center rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                </button>
            </div>
        </div>
    </nav>

    <div class="max-w-screen-xl mx-auto px-6 py-10">
        <div class="flex items-end justify-between mb-8">
            <div>
                <h1 class="text-5xl font-semibold tracking-tighter">All Tools</h1>
                <p class="mt-2 text-zinc-600 dark:text-zinc-400">10 powerful utilities. All private. All instant.</p>
            </div>
            <div class="hidden md:block text-sm text-zinc-500">Click any card to open</div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" id="tools-grid">
            <!-- Tools populated by JS -->
        </div>
    </div>

    <!-- Tool Modal -->
    <div id="tool-modal" class="hidden fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
        <div onclick="event.target.id === 'tool-modal' && closeToolModal()" class="absolute inset-0"></div>
        <div class="relative bg-white dark:bg-zinc-900 w-full max-w-2xl rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
            <div class="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
                <div id="modal-title" class="font-semibold text-xl"></div>
                <button onclick="closeToolModal()" class="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 text-3xl leading-none">&times;</button>
            </div>
            <div id="modal-body" class="p-6">
                <!-- Dynamic content injected by JS -->
            </div>
        </div>
    </div>

    <script src="js/main.js"></script>
    <script src="js/tools.js"></script>
</body>
</html>