# Grok History Eraser

**Chrome extension to quickly delete your Grok conversation history with a single button click.**

Take control of your Grok chat logs and clear your history easily.  This extension provides a simple, one-click solution for users who want to manage their Grok conversations and maintain privacy.

**Features:**

*   **One-Click Deletion:**  Erase your entire Grok conversation history with a single click of a button in the extension popup.
*   **Privacy Focused:**  Easily clear your chat logs to manage your digital footprint and enhance your privacy on Grok.
*   **Simple and Easy to Use:**  No complicated setup or configurations. Just install the extension and click the button.
*   **Iterative Deletion with Scrolling:**  Automatically scrolls through your conversation history to ensure all conversations are loaded and considered for deletion.

**Installation:**

1.  **Download the extension files:** You can download the extension files from [link to your repository releases or a zip file if you provide one]. Alternatively, you can clone this repository.
2.  **Open Chrome Extensions Page:** In your Chrome browser, navigate to `chrome://extensions/`.
3.  **Enable Developer Mode:** Toggle the "Developer mode" switch in the top right corner of the Extensions page to the "ON" position.
4.  **Load Unpacked:** Click the "Load unpacked" button in the top left corner.
5.  **Select Extension Folder:** In the file dialog that appears, navigate to the folder where you have saved the extension files (the folder containing `manifest.json`, `popup.html`, `popup.js`, and the `images` folder if you included icons). Select this folder and click "Select Folder" or "Open".
6.  **Extension Installed:** The "Grok History Eraser" extension should now be installed and visible on your Chrome Extensions page and in your Chrome toolbar.

**Usage:**

1.  **Go to Grok Conversations:** Open the Grok website ([https://x.com/i/grok](https://x.com/i/grok)) and navigate to your conversation history page. Ensure you are logged in to your Grok account.
2.  **Open Extension Popup:** Click on the "Grok History Eraser" extension icon in your Chrome toolbar.
3.  **Click "Delete Conversations":** Click the "Delete Conversations" button in the extension popup.
4.  **Wait for Deletion:** The extension will begin deleting your conversations. You can monitor the progress in the extension popup and the browser's developer console (right-click on the page, "Inspect", then "Console").  The process may take some time depending on the number of conversations you have.
5.  **Confirmation:** Once completed, the extension popup will display a message indicating the number of conversations deleted (or that no more were found).

**Important Notes and Disclaimers:**

*   **DOM Manipulation:** This extension works by directly manipulating the Grok website's Document Object Model (DOM). This approach, while effective, is **fragile**. Any changes to the Grok website's HTML structure by Grok/xAI may cause the extension to **stop working or malfunction**.
*   **Unofficial and Use at Your Own Risk:** This extension is **not officially endorsed or supported by Grok or xAI.** Use it at your own risk. I am not responsible for any unintended consequences, data loss, or account issues that may arise from using this extension.
*   **Verify Deletions:**  While the extension is designed to delete conversations, it's always a good practice to **manually verify** that your conversations have been deleted as expected, especially after website updates.
*   **Potential for Breakage:** Be aware that future updates to the Grok website are likely to break this extension. You may need to update the extension code if Grok changes their website structure.
*   **Rate Limiting:**  While delays are built into the extension, deleting a very large conversation history rapidly *might* trigger rate limiting or other anti-automation measures by Grok. Use with reasonable delays and be mindful of potential issues if deleting extremely large histories.

**Contributing:**

Contributions to improve this extension are welcome! If you find bugs, have feature requests, or want to contribute code improvements, please:

*   **Report Issues:**  Open an issue on this GitHub repository to report bugs or suggest features.
*   **Pull Requests:**  Fork this repository, make your changes in a branch, and submit a pull request with your proposed changes.

**License:**

This project is licensed under the [MIT License](LICENSE). See the `LICENSE` file for details.

**Support:**

For questions, issues, or feedback, please open an issue on this GitHub repository.

---

**Enjoy cleaning up your Grok conversation history!**