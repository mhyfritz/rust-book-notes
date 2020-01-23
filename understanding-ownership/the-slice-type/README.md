# The Slice Type

- reference to contiguous sequence of elements in a collection
- doesn't have ownership

## String Slices

- `[starting_index..ending_index]`, where `ending_index` is not included

```rust
let s = String::from("hello world");

let hello = &s[0..5]; // or `[..5]`
let world = &s[6..11]; // or `[6..]`
```

```rust
fn first_word(s: &String) -> &str {
    let bytes = s.as_bytes();

    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[0..i];
        }
    }

    &s[..]
}
```

- string literals are slices
  - `let s = "Hello, world!";` here, `s` is of type `&str`
- signature of `first_word()` can be improved:
  - `fn first_word(s: &str) -> &str`
  - now, this function can be used on `&String` and `&str` values

```rust
let my_string = String::from("hello world");

// first_word works on slices of `String`s
let word = first_word(&my_string[..]);

let my_string_literal = "hello world";

// first_word works on slices of string literals
let word = first_word(&my_string_literal[..]);

// Because string literals *are* string slices already,
// this works too, without the slice syntax!
let word = first_word(my_string_literal);
```

## Other slices

Many other collections can be sliced as well, e.g.

```rust
let a = [1, 2, 3, 4, 5];
// slice has type `&[i32]`
let slice = &a[1..3];
```
