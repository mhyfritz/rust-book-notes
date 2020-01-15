# Hello, World!

`main.rs`

```rust
fn main() {
    println!("Hello, world!");
}
```

```sh
# compile main.rs => main
rustc main.rs
# run
./main
# output: Hello, world!
```

- function `main` is special entry point of program and runs first
- `println!` is a Rust _macro_ which end with an exclamation mark
