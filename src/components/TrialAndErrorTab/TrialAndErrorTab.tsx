export function TrialAndErrorTab() {
  return (
    <>
      <ol className="list-decimal">
        <li>Choose a place away from cameras and prying eyes</li>
        <li>Start advanced recovery on a newly flashed hardware wallet</li>
        <li>Enter your 11 or 23 BIP-39 words</li>
        <li>
          Start from a random position in the BIP-39 wordlist and pick that word
        </li>
        <li>If your recovery fails, choose the next word down the list</li>
        <li>
          If your recovery succeeds, you have your final word. Memorize it!
        </li>
      </ol>
      <p>
        Maximum attempts required: <span className="badge">16</span> for a 12
        word phrase, <span className="badge">256</span> for a 24 word phrase.
      </p>
    </>
  );
}
