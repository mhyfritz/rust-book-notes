# Functions

- declared with `fn`
- naming convention: _snake case_ (as for variables), i.e. lowercase and undercores
- function parameters _must_ have type annotations, e.g. `fn f(x: i32)`

```rust
fn main() {
    another_function(5, 6);
}

// multiple parameters ar separated with commas
fn another_function(x: i32, y: i32) {
    println!("The value of x is: {}", x);
    println!("The value of y is: {}", y);
}
```

## Statements and Expressions

- function body is series of statements optionally ending in an expression
- _statement_ is an instruction that performs action and does _not_ return a value
- _expression_ evaluates to a value

```rust
// statement
let y = 6;
// error: cannot assign statement to another variable
let x = (let y = 6);

// block `{...}` evaluates to `4`
let a = {
    let b = 3;
    // expressions do not having ending semicolon
    x + 1
}
```

## Return values

Return values are not named, but must have type annotation.

```rust
fn main() {
    let x = plus_one(5);
    println!("The value of x is: {}", x);
}

// function takes paramter `x` of type `i32` and returns `i32` value
fn plus_one(x: i32) -> i32 {
    // funcion ends with an expression, the result of which gets returned
    x + 1
}
```
