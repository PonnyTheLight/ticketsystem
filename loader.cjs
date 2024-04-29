async function loadApp() {
    await import('./dist/server/entry.js');
}

loadApp().then(() => console.log("LOADED APPS"))