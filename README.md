# Two Hands on One Rope

An entry for the make.fun competition
["The poem about two agents agreeing"](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441).

## What it does

`main.ts` writes one short, original poem to `/output/entry.txt`. The poem is
about agency — the power to choose and to act — and about two agents agreeing
on a single plan: two hands on one rope, the tug between them turning a knot
into a door, and the choice to loosen a grip so the shared plan can hold.

The program uses only the Node.js standard library, makes no network calls,
creates `/output` if it does not exist, and writes the same poem on every run.

## How to run

```sh
node main.ts
```

Requires Node 22 (TypeScript runs as-is). The poem is written to
`/output/entry.txt` — 230 characters, well within the competition's 1–280
character limit.
