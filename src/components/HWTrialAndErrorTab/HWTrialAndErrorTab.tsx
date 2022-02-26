export function HWTrialAndErrorTab() {
  return (
    <>
      <ol className="list-decimal">
        <li>Choose a place away from cameras and prying eyes</li>
        <li>Start advanced recovery on a newly flashed hardware wallet</li>
        <li>Enter your pre-memorized 11 BIP-39 words</li>
        <li>
          Start from a random position in the BIP-39 wordlist and pick that word
        </li>
        <li>If your recovery fails, choose the next word down the list</li>
        <li>
          If your recovery succeeds, you have your final word. Memorize it! Your
          HW wallet is now ready to use.
        </li>
      </ol>
      <p>
        Maximum attempts required: <span className="badge">16</span> for a 12
        word phrase, which should be sufficient for advanced recovery (no
        keyboard input).
      </p>
    </>
  );
}
