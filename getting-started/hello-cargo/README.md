# Hello, Cargo!

::: tip 💡
[`cargo`](https://doc.rust-lang.org/stable/cargo/) is Rust’s build system
and package manager.
:::

## `cargo` commands

| Action            | command                    |
| ----------------- | -------------------------- |
| Create project    | `cargo new <project-name>` |
| Build project     | `cargo build`              |
| Build for release | `cargo build --release`    |
| Build and run     | `cargo run`                |
| Check code        | `cargo check`              |

## Creating a project with `cargo`

```sh
cargo new hello_cargo

tree hello_cargo
# hello_cargo/
# ├── Cargo.toml
# └── src/
#     └── main.rs

cd hello_cargo

# build project: src/main.rs => target/debug/hello_cargo
cargo build
# run executable
./target/debug/hello_cargo
# Hello, world!

# build and run with one command
cargo run
# Hello, world!
```

## `Cargo.toml`

`Cargo.toml` lists project's metadata, e.g. name and version and its dependencies.

```toml
[package]
name = "hello_cargo"
version = "0.1.0"
authors = ["Your Name <you@example.com>"]
edition = "2018"

[dependencies]
```

## Release build

- `cargo build --release` will compile with optimizations which will lead to faster
  execution, but slower compilation
- exectuable is created in `target/release` instead of `target/debug`
