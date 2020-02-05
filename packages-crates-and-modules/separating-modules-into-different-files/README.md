# Separating Modules into Different Files

When a module gets large, one can break it up into multiple files.

`src/front_of_house.rs`

```rust
pub mod hosting {
    pub fn add_to_waitlist() {}
}
```

`src/lib.rs`

```rust
// `mod` statement loads content from another file, here `front_of_house.rs`
mod front_of_house;

pub use crate::front_of_house::hosting;

pub fn eat_at_restaurant() {
    hosting::add_to_waitlist();
}
```

We can go one step further and move the `hosting` module into its own file
`src/front_of_house/hosting.rs`. Then, `src/front_of_house.rs` simply contains

```rust
pub mod hosting;
```
