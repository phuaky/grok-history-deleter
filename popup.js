// popup.js
document.getElementById('deleteButton').addEventListener('click', async () => {
  const deleteButton = document.getElementById('deleteButton');
  const statusDiv = document.getElementById('status');

  deleteButton.disabled = true;
  statusDiv.textContent = 'Deleting...';

  try {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    const result = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: deleteAllConversations,
    });

    const deletedCount = result[0].result;
    statusDiv.textContent = `Deleted ${deletedCount} conversations!`;
  } catch (error) {
    console.error('Error:', error);
    statusDiv.textContent = `Error: ${error.message}`;
  } finally {
    deleteButton.disabled = false;
  }
});

// This function will run in the page context
function deleteAllConversations() {
  return new Promise(async (resolve) => {
    let totalDeletedCount = 0;

    // --- STEP 1: Open "Chat History" Menu ---
    console.log(
      'deleteAllConversations: Step 1 - Opening "Chat History" menu...'
    );
    const historyButtonSelector = 'button[aria-label="Chat history"]';
    const historyButton = document.querySelector(historyButtonSelector);

    if (historyButton) {
      console.log(
        'deleteAllConversations: "Chat History" button FOUND:',
        historyButton
      );
      historyButton.click();
      console.log('deleteAllConversations: "Chat History" button CLICKED.');
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for history to load (adjust if needed)
      console.log(
        'deleteAllConversations: Waited for "Chat History" menu to load.'
      );
    } else {
      console.warn(
        'deleteAllConversations: "Chat History" button NOT FOUND! Aborting.'
      );
      document.getElementById('status').textContent =
        'Error: "Chat History" button not found!';
      return resolve(0); // Abort if history button is not found and resolve with 0 deleted count
    }
    console.log(
      'deleteAllConversations: Step 1 - "Chat History" menu opened successfully.'
    );
    // --- End of Step 1 ---

    async function deleteVisibleConversations() {
      const conversationLinksSelector =
        'a.css-175oi2r.r-10sqg0u.r-1ny4l3l.r-1loqt21[role="link"][href^="/i/grok?conversation="]';
      const menuItemSelector = 'div[role="menuitem"]';
      let deletedCount = 0;
      const conversationLinks = document.querySelectorAll(
        conversationLinksSelector
      );

      for (const link of conversationLinks) {
        try {
          link.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
          await new Promise((r) => setTimeout(r, 500));

          const moreButton = link.querySelector('button[aria-label="More"]');
          if (!moreButton) continue;

          moreButton.click();
          await new Promise((r) => setTimeout(r, 1000));

          const menuItems = document.querySelectorAll(menuItemSelector);
          const deleteButton = Array.from(menuItems).find(
            (item) =>
              item.querySelector('span')?.textContent.trim() === 'Delete'
          );

          if (deleteButton) {
            deleteButton.click();
            deletedCount++;
            await new Promise((r) => setTimeout(r, 1000));
          }
        } catch (error) {
          console.error('Error deleting conversation:', error);
        }
      }
      return deletedCount;
    }

    while (true) {
      const deletedInThisLoop = await deleteVisibleConversations();
      totalDeletedCount += deletedInThisLoop;

      if (deletedInThisLoop === 0) break;

      window.scrollTo(0, document.body.scrollHeight);
      await new Promise((r) => setTimeout(r, 2000));
    }

    resolve(totalDeletedCount);
  });
}
