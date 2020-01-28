# Method Syntax

::: tip 💡
_Methods_ are similar to functions, but defined within the context of a struct
(or _enum_ or _trait_ object).
:::

## Defining Methods

- methods are defined with `impl` (implementation) blocks
- instance is referenced via `self`

```rust
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

fn main() {
    let rect1 = Rectangle { width: 30, height: 50 };

    println!(
        "The area of the rectangle is {} square pixels.",
        rect1.area()
    );
}
```

## Methods with More Parameters

Additional methods can be added after `self`.

```rust
impl Rectangle {
    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
}
```

## Associated Functions

- _associated functions_ do not take `self` as a parameter
- example: `String::from`
- often used for constructors that return new struct instance

```rust
impl Rectangle {
    fn square(size: u32) -> Rectangle {
        Rectangle { width: size, height: size }
    }
}
// let sq = Rectangle::square(3);
```

## Multiple `impl` Blocks

Multiple `impl` blocks are allowed.

```rust
impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

impl Rectangle {
    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
}
```
