# Bringing Paths into Scope with the `use` Keyword

- with `use` a path can be brought into a scope
- this avoids long absolute or relative paths

```rust
mod front_of_house {
    pub mod hosting {
        pub fn add_to_waitlist() {}
    }
}

use crate::front_of_house::hosting;
// relative path works as well:
// use front_of_house::hosting;

pub fn eat_at_restaurant() {
    hosting::add_to_waitlist();
    hosting::add_to_waitlist();
    hosting::add_to_waitlist();
}
```

## Idiomatic use

- as in the example above, for functions it is idiomatic to bring parent module
  in scope, not function itself
- for structs, enums and other items, however, it's idiomatic to specify full path
  - exception: bringing multiple items with the same name into scope

```rust
// this is NOT idiomatic, avoid
use crate::front_of_house::hosting::add_to_waitlist;
add_to_waitlist();

// this IS idiomatic
use std::collections::HashMap;
HashMap::new();

// same name, bring parent modules into scope
use std::fmt;
use std::io;

fn function1() -> fmt::Result {}
fn function2() -> io::Result<()> {}
```

## Providing New Names with `as`

Paths can be aliased with `as`.

```rust
use std::fmt::Result;
use std::io::Result as IoResult;

fn function1() -> Result {}

fn function2() -> IoResult<()> {}
```

## Re-exporting Names with `pub use`

Combing `pub` and `use`, we can _re-export_ a name.s

```rust
mod front_of_house {
    pub mod hosting {
        pub fn add_to_waitlist() {}
    }
}

// external code can call `hosting::add_to_waitlist`
pub use crate::front_of_house::hosting;

pub fn eat_at_restaurant() {
    hosting::add_to_waitlist();
    hosting::add_to_waitlist();
    hosting::add_to_waitlist();
}
```

## Using External Packages

Definitions from external packages (e.g. `std` standard library or packages from crates.io)
can be accessed via `use` as well.

```rust
use rand::Rng;
rand::thread_rng().gen_range(1, 101);

use std::collections::HashMap;
```

## Using Nested Paths to Clean Up Large `use` Lists

When brining in multiple items from the same package, Rust provides a shorthand
with curly braces to avoid multiple `use` statements / lines.

```rust
// instead of separate `use std::io` and `use std::cmp::Ordering`
use std::{cmp::Ordering, io};

// instead of `use std::io` and `use std::io::Write`
use std::io::{self, Write};
```

## The Glob Operator

- glob operator (`*`) brings _all_ public items into scope
- sometimes useful (e.g. for tests), but usually better avoided as it's hard to tell
  what's in scope and where things come from

```rust
use std::collections::*;
```
