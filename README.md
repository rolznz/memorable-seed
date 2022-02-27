# Warning

Use at your own risk. Making your own seed phrase rather than using a randomly generated seed has **lower entropy**. Please only use this technique with a hardware wallet and strong passphrase (13th/25th) word.

# Memorable Seed

This tool allows you to create your own seed phrase, or brain wallet. Given 23 or 11 [BIP-39](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt) seed words, options will be provided for the final word (the checksum).

Try it here: https://rolznz.github.io/memorable-seed

# Motivation

What if you do not have a permanent place of residence or have nowhere to safely store a copy of your seed? You need a brainwallet. But how do you remember a long list of random words? You can come up with your own seed phrase that you are much less likely to forget because all the words are meaningful to you. There are many downsides of storing a brainwallet, but this tool aims to promote the safe creation of one for people who are set on using one. It's up to you to decide whether or not the security tradeoff is worth it.

# Features

This project is inspired by [SeedPicker](https://github.com/merland/seedpicker) with the following additional features:

- Supports both 12 and 24 word seed phrases
- Supplies all possible final word options, rather than just the first
- Hardware Wallet Trial & Error guide (no extra offline device required, but less control over final seed word)

# Example

Given the 23 word seed phrase `abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon`, the following checksums are generated, any of which you can choose as your final word: `art diesel false kite organ ready surface trouble`

To verify the example seed phrases you can use https://iancoleman.io/bip39/.

# Future Features

It would be great to have a method to generate final seed words for a hardware wallet that does not require a second wipeable/offline device. The only secure method I can think of right now is the ability to load a custom firmware on the hardware wallet. There is no safe solution which involves a device that is or will ever be connected to the internet.

# References

- [SeedPicker](https://github.com/merland/seedpicker)

- [brain2bip discussion](https://bitcointalk.org/index.php?topic=3057171.0)

- [Trial and error technique](https://www.reddit.com/r/TREZOR/comments/9gkhj7/if_a_seed_is_entered_and_all_words_are_from_the/)

# Donate

bc1qgv5rj0w4lhe4kxcx7tz07smnwvz2kxdkvkr0cq

---

Lightbulb image by [Wan](https://www.rawpixel.com/wan)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
