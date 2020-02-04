# Packages and Crates

- _crate_ is a _binary_ or _library_
- _crate root_ is source file that acts as an entry point for the compiler and makes up the
  root _module_ of the crate
- _package_ is one or more crates that provide set of functionality
  - contains a _Cargo.toml_ file describing to build those crates
  - _must_ contain zero or one library crate
  - can contain multiple binary crates
  - _must_ contain at least one create (library or binary)

By default, `cargo new` will scaffold a binary crate with `src/main.rs` as crate root.

```sh
cargo new my-project
tree my-project
# my-project/
# ├── Cargo.toml
# └── src/
#     └── main.rs
```

Packages with a library crate will contain `src/lib.rs` and those with multiple binary
crates will contain multiple files in the `src/bin` directory, where each file will be
a separate crate.
