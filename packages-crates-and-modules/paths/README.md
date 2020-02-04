# Paths for Referring to an Item in the Module Tree

- _absolute path_ starts from crate root using crate name of literal `crate`
- _relative path_ starts from current module and uses `self`, `super` or an identifier
  in the current module
- both, absolute and relative paths, are followed by one or more identifiers separated by `::`
- by default, items are _private_ and can be marked _public_ with the `pub` keyword

`src/lib.rs`

```rust
// note that `front_of_house` is private, but can still be accessed
// by `eat_at_restaurant` (below) as they are siblings (defined in the same module)
// however, all nested items have to be marked public
mod front_of_house {
    pub mod hosting {
        pub fn add_to_waitlist() {}
    }
}

pub fn eat_at_restaurant() {
    // absolute path
    crate::front_of_house::hosting::add_to_waitlist();

    // relative path
    front_of_house::hosting::add_to_waitlist();
}
```

## Starting Relative Paths with `super`

- `super` acts like `..` in filesystem terms
- can make refactoring easier

```rust
fn serve_order() {}

mod back_of_house {
    fn fix_incorrect_order() {
        cook_order();
        super::serve_order();
    }

    fn cook_order() {}
}
```

## Making Structs and Enums Public

- structs can be made public
  - but, by default, all fields will be private
  - fields can be made be public on a case-by-case basis
- enums can be made public
  - and all variants are public by default

```rust
mod back_of_house {
    // `toast` is public, but `seasonal_fruit` is not
    pub struct Breakfast {
        pub toast: String,
        seasonal_fruit: String,
    }

    // both variants are public
    pub enum Appetizer {
        Soup,
        Salad,
    }
}
```
