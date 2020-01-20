# What is Ownership?

::: tip 💡
_Ownership_ is how Rust manages memory. It's a set of rules that the compiler checks at
compile time which don't slow down the program while running.
:::

## The Stack and the Heap

- both, stack and heap, are parts of memory available to a program during run time
- data on stack must have known, fixed size at compile time
- data with unknown size at compile time or a size that might change must be stored on heap
- operational-wise (allocation, access) heap is more expensive (slower)
- heap also requires bookkeeping (what part of code uses what data, deduplicating data,
  cleaning up unused data), which ownership addresses

## Ownership Rules

1. Each value in Rust has a variable that’s called its _owner_
2. There can only be one owner at a time
3. When the owner goes out of scope, the value will be dropped

## Variable Scope

_Scope_ is the range within a program for which an item is valid.

```rust
{                      // s is not valid here, it’s not yet declared
    let s = "hello";   // s is valid from this point forward

    // do stuff with s
}                      // this scope is now over, and s is no longer valid
```

## The `String` Type

- String _literals_ are immutable and their value must be known at compile time
- `String` type, on the other hand, is allocated on heap

```rust
// create a `String` from a literal:
let s = String::from("hello");
// mutate `String` (append to it):
s.push_str(", world!");
```

## Memory and Allocation

- Rust neither uses explicit `free` (returning memory to operating system) nor garbage
  collection (GC)
- instead memory is automatically returned once the owner goes out of scope
  - special function `drop` is then called

### Move

```rust
// `s1` is *moved* which makes a shallow copy of and then invalidates it
let s1 = String::from("hello");
let s2 = s1;
// s1 is not valid anymore
```

### Clone

- deep copy
- more expensive

```rust
let s1 = String::from("hello");
let s2 = s1.clone();

// both, `s1` and `s2` are valid
println!("s1 = {}, s2 = {}", s1, s2);
```

### Copy (stack-only)

```rust
// make copy of `x`
let x = 5;
let y = x;
```

- if value is stored entirely on stack and has `Copy` trait it gets copied not moved, i.e. the
  older variable is still usable after being assigned to a new one
- `Copy` and `Drop` traits are mutually exclusive
- some types with `Copy` trait are:
  - all integer and floating point types, e.g. `u32` anf `f64`
  - `bool`
  - `char`
  - tuples if they only contain types that are `Copy`, e.g. `(i32, i32)` but not
    `(i32, String)`

## Functions

Similar to assigning value to a variable, passing a variable to a function will
copy or move it.

```rust
fn main() {
    let s = String::from("hello");
    takes_ownership(s);
    // `s` is not valid anymore, its value has been moved into function

    let x = 5;
    makes_copy(x);
    // `x` is still valid
}

fn takes_ownership(some_string: String) {
    println!("{}", some_string);
}

fn makes_copy(some_integer: i32) {
    println!("{}", some_integer);
}
```

## Return Values and Scope

Returning values can also transfer ownership.

```rust
fn main() {
    let s1 = gives_ownership();

    let s2 = String::from("hello");
    let s3 = takes_and_gives_back(s2);
}

fn gives_ownership() -> String {
    let some_string = String::from("hello");
    some_string
}

fn takes_and_gives_back(a_string: String) -> String {
    a_string
    // note: if we would want to return additional data, we could use tuple. e.g.
    // let length = a_string.len();
    // (a_string, length)
}
```

If we want to let function use a value but not take ownership, instead of passing
it back, we can use _references_.
