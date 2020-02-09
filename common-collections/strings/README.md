# Storing UTF-8 Encoded Text with Strings

- `str` (string slice): (only) string type in core language
- `String`: type provided by standard library

## Creating a New String

```rust
// create en empty `String`
let mut s = String::new();

// create a `String` from string literal
let data = "initial contents";
let s = data.to_string();
// or directly:
let s = "initial contents".to_string();
// ...with `String::from`
let s = String::from("initial contents");
```

## Updating a String

```rust
// append string slice with `push_str`
let mut s = String::from("foo");
s.push_str("bar"); // `s` is now `foobar`

// append single character with `push`
s.push('s');
```

Strings can be combined with the concatenation operator `+` or `format!`:

```rust
// using `+`
let s1 = String::from("Hello, ");
let s2 = String::from("world!");
let s3 = s1 + &s2; // note s1 has been moved here and can no longer be used

// using `format!`
let s1 = String::from("tic");
let s2 = String::from("tac");
let s3 = String::from("toe");

let s = format!("{}-{}-{}", s1, s2, s3); // tic-tac-toe
```

## Indexing into Strings

- Rust strings _don't_ support indexing
- due to byte layout of UTF-8 strings

```rust
let s1 = String::from("hello");
let h = s1[0]; // ERROR

let len = String::from("Hola").len(); // 4
let len = String::from("Здравствуйте").len(); // 24 not 12!
```

## Bytes, Scalar Values, Grapheme Clusters

Example: Hindi word “नमस्ते” written in the Devanagari script.

- stored as `u8` vector with 18 **bytes**
  - `[224, 164, ..., 165, 135]`
- represent six Unicode **scalars** (Rust's `char` type)
  - `['न', 'म', 'स', '्', 'त', 'े']`
  - 4th and 6th are not letters but diacritics
- four **grapheme clusters**, what a person would call "letters"
  - `["न", "म", "स्", "ते"]`

## Slicing Strings

```rust
let hello = "Здравствуйте";

// `s` is `&str` holding first 4 bytes, i.e. `Зд`
let s = &hello[0..4];
// invalid, not a char boundary => panic
let s = &hello[0..1];
```

## Methods for Iterating Over Strings

- `chars` method return scalars
- `bytes` method returns bytes
- no method in standard library to return grapheme clusters

```rust
// ['न', 'म', 'स', '्', 'त', 'े']
for c in "नमस्ते".chars() {
println!("{}", c);
}

// [224, 164, ..., 165, 135]
for b in "नमस्ते".bytes() {
println!("{}", b);
}
```
