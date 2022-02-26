import React, { useState } from "react";
import * as bip39 from "bip39";
export function BrowserTab() {
  const [mnemonic, setMnemonic] = useState("");
  const [finalWords, setFinalWords] = useState("");
  return (
    <>
      <ol className="list-decimal">
        <li>Choose a place away from cameras and prying eyes</li>
        <li>
          Access this page on either a device you can wipe, or has a readonly
          hard disk
        </li>
        <li>Turn off your Internet Connection</li>
        <li>Enter your pre-memorized 11 or 23 BIP-39 seed words</li>
        <li>Press Generate</li>
        <li>Choose and memorize one of the words</li>
        <li>Immediately turn off and wipe your device</li>
      </ol>

      <div className="flex gap-4 w-full justify-center">
        <input
          type="text"
          placeholder="Mnemonic (minus last word)"
          className="input input-bordered input-primary w-full max-w-md"
          value={mnemonic}
          onChange={(event) => setMnemonic(event.target.value)}
        />
        {!mnemonic ? (
          <button
            className="btn btn-secondary btn-outline"
            onClick={() =>
              setMnemonic(
                "abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon"
              )
            }
          >
            Use Example
          </button>
        ) : (
          <button
            className="btn"
            onClick={() => {
              const finalWords: string[] = [];
              for (const word of bip39.wordlists.english) {
                if (
                  bip39.validateMnemonic(
                    mnemonic + " " + word,
                    bip39.wordlists.english
                  )
                ) {
                  finalWords.push(word);
                } else {
                  console.log(mnemonic + " " + word + " is invalid");
                }
              }
              if (!finalWords.length) {
                alert("Invalid seed");
              }
              setFinalWords(finalWords.join(" "));
            }}
          >
            Generate
          </button>
        )}
      </div>

      {finalWords.length > 0 && (
        <div className="flex gap-4 flex-wrap">
          {finalWords.split(" ").map((word) => (
            <span className="badge" key="word">
              {word}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
