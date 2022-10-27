---
layout: "../../../layouts/Note.astro"
title: brew update-reset
pubDate: "2022-03-02"
type: post
tags:
  - linux
  - brew
categories:
  - linux
---

## brew update fails

`brew update` fails with:
```
fatal: It seems that there is already a rebase-merge directory, and
I wonder if you are in the middle of another rebase.  If that is the
case, please try
	git rebase (--continue | --abort | --skip)
If that is not the case, please
	rm -fr ".git/rebase-merge"
and run me again.  I am stopping in case you still have something
valuable there.

Already up-to-date.
```

<!-- more -->


Run `brew update-reset` to fix it.
