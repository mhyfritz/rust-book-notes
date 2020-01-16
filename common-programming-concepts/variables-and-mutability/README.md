# Variables and Mutability

By default, variables are **immutable**

```rust
let x = 5;
x = 6; // compile-time error
```

Variables can be made mutable by adding `mut` in front of variable name

```rust
let mut x = 5;
x = 6; // this is fine
```

## Constants

- declared using `const`
- must have type annotation
- can be declared in any scope, including global one
- cannot be set to a value computed at runtime, e.g. function call result
- naming convention: all uppercase with underscores

```rust
// u32 is 32-bit unsigned integer
// underscores can be used in numeric literals to improve readability
const MAX_POINTS: u32 = 100_000;
```

## Shadowing

- new variable can be declared with same name as a previous one
- new variable _shadows_ the previous one
- useful to apply series of transformations, but have variable end up immutable
  (using `mut`, variable would stay immutable)
- allows reusing name but changing type

```rust
let x = 5;
let x = x + 1;

let spaces = "   ";
let spaces = spaces.len(); // type changes
```
