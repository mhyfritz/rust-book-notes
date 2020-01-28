# Defining and Instantiating Structs

::: tip 💡
A _struct_ or _structure_ is a custom data type that let's you group related values.
:::

- as with tuples, values can have different types
- unlike tuples, each value is named
  - also means one does not have to rely to order
- entire instances can be made mutable, but not individual fields

```rust
// Definition
struct User {
    // what follows are the *fields*: names and types of individual data
    username: String,
    email: String,
    sign_in_count: u64,
    active: bool,
}

// Instantiation
let mut user1 = User {
    email: String::from("someone@example.com"),
    username: String::from("someusername123"),
    active: true,
    sign_in_count: 1,
};

// Access via dot notation
user1.email = String::from("anotheremail@example.com");
```

## Using the Field Init Shorthand

When variables and struct fields have the same name, Rust provides a shorthand:

```rust
fn build_user(email: String, username: String) -> User {
    User {
        email,    // instead of writing `email: email`
        username, // instead of writing `username: username`
        active: true,
        sign_in_count: 1,
    }
}
```

## Struct Update Syntax

When creating an instance from another instance, values of the latter can be reused
with the _struct update syntax_ (`..`).

```rust
// this (re-)uses all values from `user1`
// except `email` and `username`
let user2 = User {
    email: String::from("another@example.com"),
    username: String::from("anotherusername567"),
    ..user1
};
```

## Tuple Structs

- have a struct name, but no field names

```rust
struct Color(i32, i32, i32);
struct Point(i32, i32, i32);

let black = Color(0, 0, 0);
let origin = Point(0, 0, 0);
```

## Unit-Like Structs Without Any Fields

- structs without any fields are called _unit-like structs_
- behave similarly to `()`, the unit type
- useful when implementing a trait on some type without any data

## Ownership of Struct Data

It’s possible for structs to store references to data owned elsewhere, but this
requires the use of _lifetimes_.
