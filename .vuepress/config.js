module.exports = {
  title: "Rust book notes",
  dest: "dist",
  base: process.env.BASE_URL || "/",
  themeConfig: {
    logo: "/assets/img/rust-logo-64x64-blk.png",
    nav: [
      {
        text: "Chapters",
        ariaLabel: "Chapter Menu",
        items: [
          { text: "Getting Started", link: "/getting-started/" },
          {
            text: "Common Programming Concepts",
            link: "/common-programming-concepts/"
          },
          {
            text: "Using Structs",
            link: "/structs/"
          },
          {
            text: "Enums and Pattern Matching",
            link: "/enums/"
          }
        ]
      },
      { text: "GitHub", link: "https://github.com/mhyfritz/rust-book-notes" }
    ],
    sidebar: [
      {
        title: "Getting Started",
        path: "/getting-started/",
        children: [
          "/getting-started/installation/",
          "/getting-started/hello-world/",
          "/getting-started/hello-cargo/"
        ]
      },
      {
        title: "Common Programming Concepts",
        path: "/common-programming-concepts/",
        children: [
          "/common-programming-concepts/variables-and-mutability/",
          "/common-programming-concepts/data-types/",
          "/common-programming-concepts/functions/",
          "/common-programming-concepts/comments/",
          "/common-programming-concepts/control-flow/"
        ]
      },
      {
        title: "Understanding Ownership",
        path: "/understanding-ownership/",
        children: [
          "/understanding-ownership/what-is-ownership/",
          "/understanding-ownership/references-and-borrowing/",
          "/understanding-ownership/the-slice-type/"
        ]
      },
      {
        title: "Using Structs to Structure Related Data",
        path: "/structs/",
        children: [
          "/structs/defining-structs/",
          "/structs/example-structs/",
          "/structs/method-syntax/"
        ]
      },
      {
        title: "Enums and Pattern Matching",
        path: "/enums/",
        children: [
          "/enums/defining-an-enum/",
          "/enums/match/",
          "/enums/if-let/"
        ]
      }
    ]
  }
};
