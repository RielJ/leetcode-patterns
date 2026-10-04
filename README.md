# LeetCode Patterns

TypeScript solutions written and submitted through [leetcode.nvim](https://github.com/kawre/leetcode.nvim).

The goal is not a contribution streak. Each commit should contain one reviewed solution, its complexity, and any useful reasoning that is not obvious from the code.

## Workflow

```bash
nvim leetcode.nvim
```

Inside Neovim:

```vim
:Leet daily
:Leet run
:Leet submit
```

After an accepted solution:

```bash
git add <solution-file>
git commit -m "solve(<pattern>): add <problem-name> solution"
git push
```

Examples:

```text
solve(arrays): add two-sum hash map solution
solve(sliding-window): add longest substring solution
solve(graphs): add course schedule DFS solution
refactor(trees): replace recursive traversal with iteration
docs(dp): explain coin-change state transition
```

## Review checklist

Before committing:

- Solve without AI assistance first.
- Run the supplied test cases and submit successfully.
- Record time and space complexity in the solution.
- Check empty, singleton, duplicate, and boundary inputs where relevant.
- Explain the invariant or tradeoff when the implementation is not self-evident.

## Progress

| Pattern | Solved | Status |
|---|---:|---|
| Arrays and hashing | 0 | Not started |
| Two pointers | 0 | Not started |
| Sliding window | 0 | Not started |
| Stack | 0 | Not started |
| Binary search | 0 | Not started |
| Linked lists | 0 | Not started |
| Trees | 0 | Not started |
| Graphs | 0 | Not started |
| Dynamic programming | 0 | Not started |
