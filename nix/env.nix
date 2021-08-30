{ nixpkgs ? import <nixpkgs> { } }:
let pkgs = import ./packages.nix { inherit nixpkgs; }; in
with pkgs;
{
  minimal = [
    pls
    git
    coreutils
    nodejs
    yarn
    jq
    sd
  ];
  lint = [
    bash
    gitlint
    pre-commit
    nixpkgs-fmt
    prettier
    sg # for linting gitlint file
    shfmt
    shellcheck
  ];
}
