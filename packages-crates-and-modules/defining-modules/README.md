# Defining Modules to Control Scope and Privacy

Key features of _modules_:

- organization of code within crate for readability and reuse
- control of _privacy_
  - _public_: item can be used from the outside
  - _private_: not available from the outside; internal implemention detail

Example: library crate `restaurant` with a module `front_of_house` (customer-facing
features).

```rust
cargo new --lib restaurant
tree restaurant
# restaurant/
# ├── Cargo.toml
# └── src/
#     └── lib.rs
```

`src/lib.rs`

```rust
mod front_of_house {
    mod hosting {
        fn add_to_waitlist() {}

        fn seat_at_table() {}
    }

    mod serving {
        fn take_order() {}

        fn serve_order() {}

        fn take_payment() {}
    }
}
```

- modules are defined using the `mod` keyword, followed by a name
- modules can be nested; in the above example, `hosting` is a module of
  the `front_of_house` module

The _crate root_ (`src/main.rs` or `src/lib.rs`) form an implicit module called `crate`,
therefore the _module tree_ of the example is the following:

```
crate
 └── front_of_house
     ├── hosting
     └── serving
```
