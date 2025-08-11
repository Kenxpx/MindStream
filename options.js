document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('useOpenDyslexic');
  const status = document.getElementById('status');

  if (!checkbox) return; // Guard if element is missing

  // Make status updates accessible to screen readers
  if (status) {
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    status.hidden = true;
  }

  // Helpers to use storage with proper error handling
  const setStorage = (items) =>
    new Promise((resolve, reject) => {
      chrome.storage.sync.set(items, () => {
        const err = chrome.runtime.lastError;
        if (err) reject(err);
        else resolve();
      });
    });

  const getStorage = (defaults) =>
    new Promise((resolve, reject) => {
      chrome.storage.sync.get(defaults, (result) => {
        const err = chrome.runtime.lastError;
        if (err) reject(err);
        else resolve(result);
      });
    });

  let hideTimer;
  const showStatus = (msg, kind = 'success', duration = 2000) => {
    if (!status) return;
    status.textContent = msg;
    status.classList.remove('success', 'error');
    status.classList.add('status', kind);
    status.hidden = false;
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      status.hidden = true;
    }, duration);
  };

  // Load saved preference with a default
  getStorage({ useOpenDyslexic: false })
    .then(({ useOpenDyslexic }) => {
      checkbox.checked = Boolean(useOpenDyslexic);
    })
    .catch((e) => {
      console.error('Failed to load settings:', e);
      showStatus('Failed to load settings', 'error');
    });

  // Save on change
  checkbox.addEventListener('change', async (e) => {
    try {
      await setStorage({ useOpenDyslexic: e.target.checked });
      showStatus('Settings saved', 'success');
    } catch (e) {
      console.error('Failed to save settings:', e);
      showStatus('Failed to save settings', 'error');
    }
  });

  // Reflect external changes (e.g., another device updates sync storage)
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'sync' && changes.useOpenDyslexic) {
      const newValue = Boolean(changes.useOpenDyslexic.newValue);
      if (checkbox.checked !== newValue) {
        checkbox.checked = newValue;
      }
    }
  });
});
