// Data key for localStorage
const STORAGE_KEY = 'autosave-text';

// Load saved data
function loadData() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) {
        document.getElementById('text').value = saved;
    }
}

// Save current data
function saveData() {
    const text = document.getElementById('text').value;
    localStorage.setItem(STORAGE_KEY, text);
}

window.addEventListener('DOMContentLoaded', () => {
    loadData();
    document.getElementById('saveBtn').addEventListener('click', saveData);
});

// Auto save on page hide or unload
['visibilitychange', 'beforeunload'].forEach(event => {
    window.addEventListener(event, saveData);
});
