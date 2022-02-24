import React, { useState } from 'react';
import './App.css';
import * as bip39 from 'bip39';

function App() {
  const [mnemonic, setMnemonic] = useState('');
  const [finalWords, setFinalWords] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => {
          try {
            const entropy = parseInt(prompt("Please enter entropy (128 for 11 words or 256 for 23 words)", "256") || "");
            setMnemonic(bip39.generateMnemonic(entropy).split(" ").filter((_, i, a) => i < a.length - 1).join(" "));
          }
          catch(error) {
            alert(error);
          }
        }}>Generate mnemonic</button>

        Mnemonic (Without checksum)
        <input style={{width: "800px"}}  value={mnemonic} onChange={(event) => setMnemonic(event.target.value)}/>

        <button onClick={() => {
          const finalWords: string[] = [];
          for (const word of bip39.wordlists.english) {
            if (bip39.validateMnemonic(mnemonic + " " + word, bip39.wordlists.english)) {
              finalWords.push(word)
            }
            else {
              console.log(mnemonic + " " + word +" is invalid")
            }
          }
          if (!finalWords.length) {
            alert("Invalid seed");
          }
          setFinalWords(finalWords.join(" "));
        }}>Generate final word options</button>
        <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
          {finalWords.split(" ").map(word => <span style={{display: "inline"}} key="word">{word}</span>)}
        </div>
      </header>
    </div>
  );
}

export default App;
