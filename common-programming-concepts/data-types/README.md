# Data Types

- Rust is _statically typed_, i.e. types of all variables must be known at compile time
- compiler can often infer type based on value and context

## Scalar Types

- single value type
- four primary ones:
  - integers
  - floating-point numbers
  - Booleans
  - characters

### Integers

| Length  | Signed  | Unsigned |
| ------- | ------- | -------- |
| 8-bit   | `i8`    | `u8`     |
| 16-bit  | `i16`   | `u16`    |
| 32-bit  | `i32`   | `u32`    |
| 64-bit  | `i64`   | `u64`    |
| 128-bit | `i128`  | `u128`   |
| arch    | `isize` | `usize`  |

In **debug mode**, Rust includes checks for integer overflows and will _panic_
(exit with error) if an overflow is detected.
In **release mode** those checks are not included and Rust will instead perform
_two's complement wrapping_, e.g. a `u8` 256 becomes 0, 257 becomes 1 etc.
For explicit wrapping one should use the `Wrapping` type.

| Number literals  | Example       |
| ---------------- | ------------- |
| Decimal          | `98_222`      |
| Hex              | `0xff`        |
| Octal            | `0o77`        |
| Binary           | `0b1111_0000` |
| Byte (`u8` only) | `b'A'`        |

- all number literals except byte allow type suffix such as `57u8`
  and `_` as visual separator, such as `1_000`
- default integer type is `i32` which is generally the fastest, even on 64-bit systems
- `isize` or `usize` are architecture-dependent (size is 32 or 64 bits) and are typically
  used when indexing a collection

### Floats

- `f32` 32 bits, single precision, IEEE-754
- `f64` (default) 64 bits, double precision, IEEE-754

```rust
let x = 2.0; // f64
let y: f32 = 3.0; // f32
```

### Booleans

- type specified using `bool`
- two possible values: `true` and `false`

### Characters

- `char` type
- 4 bytes, Unicode Scalar Value

## Compound Types

- types grouping multiple values
- two primitive ones:
  - tuples
  - arrays

### Tuples

- can group different types
- fixed size, i.e. cannot grow or shrink

```rust
let tup: (i32, f64, u8) = (500, 6.4, 1);
// destructure via pattern matching:
let (x, y, z) = tup;
// access directly by index via `.`:
let five_hundred = x.0;
```

### Arrays

- group values of same type
- fixed length
- allocated on stack not heap

```rust
let a = [1, 2, 3, 4, 5];
// with type annotation and explicit size:
let a: [i32; 5] = [1, 2, 3, 4, 5];
// access via `[index]`:
let first = a[0];
// compile-time error:
let element = a[10];
// run-time error:
let index = 10;
let element = a[index];
```
