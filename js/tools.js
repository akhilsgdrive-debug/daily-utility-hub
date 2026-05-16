// Daily Utility Hub - Tools JavaScript

const tools = [
    { id: 'calculator', icon: '🧮', title: 'Calculator', description: 'Basic arithmetic calculator', category: 'Math' },
    { id: 'notes', icon: '📝', title: 'Notes', description: 'Quick private notes saved locally', category: 'Productivity' },
    { id: 'todo', icon: '✅', title: 'To-Do List', description: 'Simple task manager', category: 'Productivity' },
    { id: 'countdown', icon: '⏳', title: 'Countdown Timer', description: 'Set countdown timer', category: 'Time' },
    { id: 'stopwatch', icon: '⏱️', title: 'Stopwatch', description: 'Track elapsed time', category: 'Time' },
    { id: 'converter', icon: '🔄', title: 'Unit Converter', description: 'Convert units', category: 'Utility' },
    { id: 'bmi', icon: '⚖️', title: 'BMI Calculator', description: 'Calculate BMI', category: 'Health' },
    { id: 'age', icon: '🎂', title: 'Age Calculator', description: 'Calculate your age', category: 'Utility' },
    { id: 'password', icon: '🔐', title: 'Password Generator', description: 'Create strong passwords', category: 'Security' },
    { id: 'text', icon: '📄', title: 'Text Utilities', description: 'Word count, case converter', category: 'Text' }
];

function renderTools() {
    const grid = document.getElementById('tools-grid');
    if (!grid) return;
    grid.innerHTML = '';
    tools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 cursor-pointer';
        card.innerHTML = `<div class="text-4xl mb-4">${tool.icon}</div><div class="font-semibold">${tool.title}</div><div class="text-sm text-zinc-500 mt-1">${tool.description}</div>`;
        card.onclick = () => openTool(tool.id);
        grid.appendChild(card);
    });
}

function openTool(id) {
    alert('Tool "' + id + '" opened! (Full implementation coming in next update)');
}

document.addEventListener('DOMContentLoaded', renderTools);