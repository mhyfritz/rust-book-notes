# Concise Control Flow with `if let`

Consider following example. Only if `Some(3)` matches we want to do something.

```rust
let some_u8_value = Some(0u8);
match some_u8_value {
    Some(3) => println!("three"),
    _ => (),
}
```

A more concise way of writing this is using `if let`:

```rust
if let Some(3) = some_u8_value {
    println!("three");
}
```

`else` can be used, which is the equivalent of the `_` case in `match`:

```rust
let mut count = 0;
if let Coin::Quarter(state) = coin {
    println!("State quarter from {:?}!", state);
} else {
    count += 1;
}
```
