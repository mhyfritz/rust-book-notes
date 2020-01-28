module.exports = {
  title: "Rust book notes",
  dest: "dist",
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
          }
        ]
      }
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
      }
    ]
  }
};
