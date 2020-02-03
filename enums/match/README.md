# The `match` Control Flow Operator

- `match` allows comparing value to series of pattern and conditionally executing code
- patterns can be literal values, variable names, wildcards and many other things

```rust
enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter,
}

fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        // so-called `arms`; two parts: pattern => code
        // for multi-line code, use curly braces
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter => 25,
    }
}
```

## Pattern that Bind to Values

- match arms can bind to parts of values
- values of enum variants can be extracted with this feature

```rust
#[derive(Debug)]
enum UsState {
    Alabama,
    Alaska,
    // etc.
}

enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter(UsState),
}

fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter(state) => {
            println!("State quarter from {:?}!", state);
            25
        },
    }
}
```

## Matching with `Option<T>`

- pattern matching is useful for `Option<T>` values and extracting values from `Some(T)`

```rust
fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        None => None,
        Some(i) => Some(i + 1),
    }
}

let five = Some(5);
let six = plus_one(five);
let none = plus_one(None);
```

- matches are _exhaustive_, i.e. all possibilities have to be handled
- the `_` placeholder pattern can be used in the last arm to catch all remaining cases
