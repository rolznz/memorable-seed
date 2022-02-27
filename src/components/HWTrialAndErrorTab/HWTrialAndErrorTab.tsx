export function HWTrialAndErrorTab() {
  return (
    <>
      <ol className="list-decimal">
        <li>Choose a place away from cameras and prying eyes</li>
        <li>
          Start <strong>advanced recovery</strong> on a newly flashed hardware
          wallet. Do not use your computer keyboard!
        </li>
        <li>Enter your pre-memorized 12 BIP-39 words</li>
        <li>
          If your recovery fails, restart the advanced recovery but instead of
          using the same final word, use the next word down the{" "}
          <a
            className="link"
            target="_blank"
            href="https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt"
            rel="noreferrer"
          >
            list
          </a>
          .
        </li>
        <li>
          If your recovery succeeds, you have your final word. Re-run the
          advanced recovery to ensure you made no errors in the input of your
          seed.
        </li>
      </ol>
      <p>
        Maximum attempts required: <span className="badge">16</span> for a 12
        word phrase, which should be sufficient for advanced recovery (no
        keyboard input).
      </p>
      <p>Estimated time required: 1-2 hours.</p>
    </>
  );
}
