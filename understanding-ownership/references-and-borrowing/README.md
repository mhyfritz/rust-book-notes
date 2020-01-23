# References and Borrowing

- instead of passing back a value from a function as in the last example, a _reference_
  can be passed
- this reference can the be used instead of taking ownership
- having references as function parameters is called _borrowing_
- just as variables, references are immutable by default
- `&`: reference operator, `*`: dereference operator

```rust
fn main() {
    let s1 = String::from("hello");
    let len = calculate_length(&s1);
    println!("The length of '{}' is {}.", s1, len);
}

fn calculate_length(s: &String) -> usize {
    s.len()
}
```

## Mutable References

```rust
fn main() {
    let mut s = String::from("hello");
    change(&mut s);
}

fn change(some_string: &mut String) {
    some_string.push_str(", world");
}
```

- there can be one, and only one, mutable reference to a particular value in a
  particular scope
  - this prevents data races at compile time
- there cannot be a mutable reference while having immutable ones
  - values of immutable ones could change
- a reference's scope starts from where it's introduced and continues to its last usage

```rust
let mut s = String::from("hello");

// declare two immutable references
let r1 = &s;
let r2 = &s;
println!("{} and {}", r1, r2);

// scope of s1 and s2 have ended (they are not used anymore),
// we can now declare an immutable reference
let r3 = &mut s;
println!("{}", r3);
```

## Dangling References

- _dangling pointer_: pointer that references memory that has been freed already
- Rust compiler prevents this as it ensures data will not go out of scope before
  the reference to the data does

```rust
fn dangle() -> &String { // returns *reference* to a String
    let s = String::from("hello");
    &s // return reference to new String `s`
} // Here, s goes out of scope, and is dropped. Its memory goes away.
  // Error
```
