# Defining an Enum

::: tip 💡
_Enums_ (_enumerations_) allow defining type by enumerating its possible _variants_.
:::

Example: IP address type, where variants are version four and version six addresses.

```rust
enum IpAddrKind {
    V4,
    V6,
}

fn main() {
    let four = IpAddrKind::V4;
    let six = IpAddrKind::V6;

    route(four);
    route(six);
}

fn route(ip_kind: IpAddrKind) {
    // ...
}

```

- variants can hold data
- data can be of different types and amounts

```rust
enum IpAddr {
    V4(u8, u8, u8, u8),
    V6(String),
}

let home = IpAddr::V4(127, 0, 0, 1);
let loopback = IpAddr::V6(String::from("::1"));
```

- enums can have methods

```rust
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

impl Message {
    fn call(&self) {
        // ...
    }
}

let m = Message::Write(String::from("hello"));
m.call();
```

## The `Option` Enum and Its Advantages Over Null Values

- `Option` type used where value could be something or nothing
- alternative to _Null_ value which doesn't exist in Rust

```rust
// `<T>` is generic type parameter
enum Option<T> {
    Some(T),
    None,
}
```

Examples

```rust
let some_number = Some(5);
let some_string = Some("a string");
let absent_number: Option<i32> = None;

let x: i8 = 5;
let y: Option<i8> = Some(5);
// following won't work: trying to add `i8` and `Option<i8>`
let sum = x + y;
```
