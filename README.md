# Warning

Use at your own risk. Making your own seed phrase rather than using a randomly generated seed has **lower entropy**. Generate your seed **offline** in a safe place free of any cameras or other people. Use the advanced version of Memorable Seed to avoid keyloggers, and restart your PC before re-connecting to the internet. Use the **advanced recovery option** on your **hardware wallet** to enter the seed. Test your seed recovery before adding any meaningful amount of money. Use a strong **25th word**. **Do not record** either your seed or passphrase - they should only be stored within your brain.

# Memorable Seed

This tool allows you to create your own seed phrase, or brain wallet. Given 23 or 11 [BIP-39](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt) seed words, options will be provided for the final word (the checksum).

Try it here: https://rolznz.github.io/memorable-seed

# Motivation

What if you do not have a permanent place of residence or have nowhere to safely store a copy of your seed? You need a brainwallet. But how do you remember a long list of random words? You can come up with your own seed phrase that you are much less likely to forget because all the words are meaningful to you. It's up to you to decide whether or not the security tradeoff is worth it.

# Features

This project is inspired by [SeedPicker](https://github.com/merland/seedpicker) with the following additional features:

- Supports any seed length, plus generation of 12-word mnemonic phrases
- Supplies all possible final word options, rather than just the first
- Hardware Wallet Trial & Error guide (no extra offline device required, but less control over final seed word)

# Example

Given the 23 word seed phrase `abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon`, the following checksums are generated, any of which you can choose as your final word: `art diesel false kite organ ready surface trouble`

To verify a seed phrase (please do not type/copy a real seed phrase into your PC): https://iancoleman.io/bip39/

# Feedback and Contributions

Please open an issue or pull request. Any investigation into how risky this method based on certain factors would be appreciated.

# References

- [SeedPicker](https://github.com/merland/seedpicker)

- [brain2bip discussion](https://bitcointalk.org/index.php?topic=3057171.0)

- [Trial and error technique](https://www.reddit.com/r/TREZOR/comments/9gkhj7/if_a_seed_is_entered_and_all_words_are_from_the/)

---

Lightbulb image by [Wan](https://www.rawpixel.com/wan)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
