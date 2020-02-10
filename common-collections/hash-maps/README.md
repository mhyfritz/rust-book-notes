# Storing Keys with Associated Values in Hash Maps

- `HashMap<K, V>`
- mapping od keys of type `K` to values of type `V`

```rust
use std::collections::HashMap;

let mut scores = HashMap::new();
scores.insert(String::from("Blue"), 10);
scores.insert(String::from("Yellow"), 50);

// another way with `collect` using vector of key-value pairs
let teams  = vec![String::from("Blue"), String::from("Yellow")];
let initial_scores = vec![10, 50];
let scores: HashMap<_, _> = teams.iter().zip(initial_scores.iter()).collect();
```

## Hash Maps and Ownership

- values with type that implements `Copy` trait are copied into hash map
- owned values such as `String` are moved and hash map is owner

```rust
use std::collections::HashMap;

let field_name = String::from("Favorite color");
let field_value = String::from("Blue");

let mut map = HashMap::new();
map.insert(field_name, field_value);
// accessing `field_name` or `field_value` will result in error
```

## Accessing Values in a Hash Map

```rust
use std::collections::HashMap;

let mut scores = HashMap::new();

scores.insert(String::from("Blue"), 10);
scores.insert(String::from("Yellow"), 50);

let team_name = String::from("Blue");
let score = scores.get(&team_name);

// iteration via `for` loop
for (key, value) in &scores {
    println!("{}: {}", key, value);
}
```

## Updating a Hash Map

```rust
use std::collections::HashMap;

let mut scores = HashMap::new();
scores.insert(String::from("Blue"), 10); // Blue: 10

// overwrite value
scores.insert(String::from("Blue"), 25); // Blue: 25

// only insert if key has no value
scores.entry(String::from("Blue")).or_insert(50); // Blue: 25

// updating value based on old value
let text = "hello world wonderful world";
let mut map = HashMap::new();

for word in text.split_whitespace() {
    let count = map.entry(word).or_insert(0);
    *count += 1;
}
```
