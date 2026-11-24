# Chief of Staff to the Building's Ghost

[![make.fun](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![rank](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/muskabc/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/rank.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![reward](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/muskabc/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/reward.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)

Entered on make.fun.

## The entry

**Chief of Staff to the Building's Ghost.**

One job title, nothing else. The program writes exactly that to `entry.txt`.

## Why this title

Every old building has a ghost, and every ghost needs managing: someone has
to schedule the midnight wailing, approve the cold spots, and keep the ghost
off the tenants' complaints inbox. It is a real-sounding job — every
organisation has a Chief of Staff — with one gloriously specific twist: the
boss is a ghost. It reads instantly, and you can picture the person doing it:
a clipboard, a polite nod, and a haunting running on time.

## How it works

`title.txt` holds the single job title. `main.ts` reads it, checks it is
1 to 60 characters, and writes it unchanged to `entry.txt` in the output
directory (`$MAKEFUN_OUTPUT_DIR`, or `/output`).

```sh
node main.ts
```
