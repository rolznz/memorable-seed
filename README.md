# Warning
Use at your own risk. Making your own seed phrase rather than using a randomly generated seed has **lower entropy**. Generate your seed **offline** in a safe place free of any cameras or other people. Use the advanced version of Memorable Seed to avoid keyloggers, and restart your PC before re-connecting to the internet. Use the **advanced recovery option** on your **hardware wallet** to enter the seed. Test your seed recovery before adding any meaningful amount of money. Use a strong **25th word**. **Do not record** either your seed or passphrase - they should only be stored within your brain.

# Memorable Seed
This tool allows you to create your own seed phrase (mnemonic). Given 23 or 11 [BIP-39](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt) seed words, it will providing options for the final word (the checksum), in a way that is easier to remember than a standard [brainwallet](https://en.bitcoin.it/wiki/Brainwallet).

<span style="font-size:64px">Try it here: https://rolznz.github.io/memorable-seed</span>

# Motivation
Writing down your seed is dangerous even with a 25th word. What if you have nowhere to store your seed? What if you are crossing borders and your seed is compromised?

But how do you remember this long list of random words? Instead of the [Mnemonic Peg Method](https://en.bitcoin.it/wiki/Brainwallet) you can come up with your own seed phrase that you are much less likely to forget because all the words are meaningful to you. It's up to you to decide whether or not the security tradeoff is worth it.

# Features
This project is inspired by [SeedPicker](https://github.com/merland/seedpicker) with the following additional features:
- Supports any seed length, plus generation of 12-word mnemonic phrases
- Supplies all possible final word options, rather than just the first
- Secure entry option to prevent keyloggers **Not implemented yet**

# Example
Given the 23 word seed phrase `abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon`, the following checksums are generated, any of which you can choose as your final word: `about actual age alpha angle argue artwork attract bachelor bean behind blind bomb brand broken burger cactus carbon cereal cheese city click coach cool coyote cricket cruise cute degree describe diesel disagree donor drama dune edit enemy energy escape exhaust express fashion field fiscal flavor food fringe furnace genius glue goddess grocery hand high holiday huge illness inform insect jacket kangaroo knock lamp lemon length lobster lyrics marble mass member metal moment mouse near noise obey offer once organ own parent phrase pill pole position process project question rail record remind render return ritual rubber sand scout sell share shoot simple slice soap solid speed square stereo street sugar surprise tank tent they toddler tongue trade truly turtle umbrella urge vast vendor void voyage wear wife world wrap`

To verify a seed phrase (please do not type/copy a real seed phrase into your PC): https://iancoleman.io/bip39/


# Feedback and Contributions
Please open an issue or pull request. Any investigation into how risky this method based on certain factors would be appreciated.

## CRA

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
