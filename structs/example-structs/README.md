# An Example Program Using Structs

Goal: program that calculates the area of a rectangle (the product of the
rectangle's length and width).

```console
$ cargo new rectangles
```

`src/main.rs`:

```rust
// enable printing out debugging information
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };

    // `:?` uses `Debug` output format
    println!("rect1 is {:?}", rect1);
    println!(
        "The area of the rectangle is {} square pixels.",
        area(&rect1)
    );
}

fn area(rectangle: &Rectangle) -> u32 {
    rectangle.width * rectangle.height
}
```

```console
$ cargo run
rect1 is Rectangle { width: 30, height: 50 }
The area of the rectangle is 1500 square pixels.
```
