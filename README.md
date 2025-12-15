# Steps to running hello_wasm:

> **Note:** This project will be accessible via my website shortly, meaning you don't have to actually build this project yourself to test
> it!

I built and ran this code on Linux kernel: **6.17.8-arch1-1**

You should be able to achieve the same results on Mac, Windows, or a BSD environment given you installed all dependencies properly.

## Installing rust:
First, follow the [Install Guide](https://rust-lang.org/tools/install/) here to install Rust using **rustup**
I used the Stable version and that is what you should be using as well.

## Installing wasm-pack
You will also need to install a Rust webassembly packager.
It can be installed via **cargo** with this command:

    cargo install wasm-pack

## Building a usable WASM binary
To compile the code and build a package, make sure you are in the root of the project directory. Then run:

    wasm-pack build --target web

## Running the code
This code cannot be tested by just opening the .html file in your browser. The files need to be handed to the browser by a server. I always use the python http server for testing tiny projects like this one as it only takes one command to launch and test on localhost. *I am going to assume you have Python already or can install it without help.*

Simple http server:

    python3 -m http.server

> (Run this in the root directory of the project)

The tiny application should be accessible via

    http://localhost:8000/hello.html
(That is, if you used the verbatim command I gave)
