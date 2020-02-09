# Storing Lists of Values with Vectors

- `Vec<T>`
- **multiple** values in single data structure of **same type**

## Creating a New Vector

```rust
// create vector with `Vec::new`
let v: Vec<i32> = Vec::new();

// create vector with `vec!` with inital values and no type annotation
let v = vec![1, 2, 3];
```

## Updating a Vector

```rust
let mut v = Vec::new();

v.push(5);
v.push(6);
```

## Dropping a Vector Drops Its Elements

When a vector goes out of scope, it is freed. All its elements are then dropped
as well (this will get important when discussing references as vector elements).

## Reading Elements of Vectors

Two ways:

- with indexing syntax
  - 0-based (starting with zero)
- with `get` method

```rust
let v = vec![1, 2, 3, 4, 5];

// 0-based indexing syntax with `&` and `[]`
// returns a reference
let third: &i32 = &v[2];
println!("The third element is {}", third);

// `.get()` with index as argument
// returns `Option<&T>`
match v.get(2) {
    Some(third) => println!("The third element is {}", third),
    None => println!("There is no third element."),
}
```

When trying to access nonexistent element

- `[]` method will trigger panic
- `get` returns `None`

```rust
let v = vec![1, 2, 3, 4, 5];

let does_not_exist = &v[100];    // panic / crash
let does_not_exist = v.get(100); // returns `None`
```

Updating a vector might require allocating new memory and copying over old
elements. Therefore, references to any element might get invalid and the
borrowing rules prevent this:

```rust
let mut v = vec![1, 2, 3, 4, 5];

let first = &v[0];
v.push(6);
// following will result in error
println!("The first element is: {}", first);
```

## Iterating over the Values in a Vector

```rust
let v = vec![100, 32, 57];
// immutable references to each element
for i in &v {
    println!("{}", i);
}

let mut v = vec![100, 32, 57];
// mutable references
for i in &mut v {
    *i += 50; // uses dereferencing operator `*`
}
```

## Using an Enum to Store Multiple Types

```rust
enum SpreadsheetCell {
    Int(i32),
    Float(f64),
    Text(String),
}

let row = vec![
    SpreadsheetCell::Int(3),
    SpreadsheetCell::Text(String::from("blue")),
    SpreadsheetCell::Float(10.12),
];
```
