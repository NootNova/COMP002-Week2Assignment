
Author: Nova Wolta

# COMP-002 Week 2 independent coding assignment

This is `comp2-m02-assignment`. Integrate the lecture's values, conversion, arithmetic, comparisons, Boolean decisions, and returns in your own complete design. This project must have a different folder, repository, README, and Canvas submission from the classroom activity.

## Setup and run

1. Extract the ZIP. Open the `comp2-m02-assignment` folder containing `index.html` in **VS Code > File > Open Folder**. Keep this project outside every other repository; do not copy a `.git` folder.
2. Keep root `index.html`, `main.css`, `main.js`, and `README.md` together. Open `index.html` in a browser, then **Developer Tools > Console**.
3. Edit root `main.js`, save, and reload after each change. Follow Console's source link to verify this exact file. No npm packages or build command are required. The visible form is reserved for later event work; test through Console.
4. Before implementing, predict and record the supplied call. Its initial result is `undefined` because the TODO function has no return. This is an unfinished baseline, not a passing result.
5. For missing/stale output, check the intended page, saved source, script path, filename case, Console filters, and first error/source line.

Read the [lecture companion](https://whccd.instructure.com/courses/30394/modules/items/2817258) and [guided activity](https://whccd.instructure.com/courses/30394/modules/items/2817259). The [Canvas assignment](https://whccd.instructure.com/courses/30394/modules/items/2817260) supplies current dates, submission controls, and the scoring rubric. The following contract is the independent work; choose and justify its implementation yourself.

## Complete the contract

Keep the supplied signature:

```javascript
calculateTicketTotal(priceText, quantityText, hasDiscount = false)
```

- [x]The first two arguments are strings. Check each for blank/whitespace **before** converting with `Number`.
- [x]Reject non-finite input, negative price, and quantity that is negative or not an integer. Return an understandable rejection message.
- [x]Allow zero price, zero quantity, and decimal prices. Zero must survive validation.
- [x]Use explicit conversion, arithmetic, and an `if/else` decision. Apply your chosen, documented discount only when the Boolean parameter is `true`. Otherwise use the ordinary total. Omitting the third argument uses `false`.
- Return a **number** on success. Calling with `'2.50', '3', false` must return numeric `7.5`.
- Use `const`/`let` according to the class convention, meaningful names, and comments explaining a function, decision, or repair.

Choose your validation branches and discount calculation; the starter intentionally supplies neither a completed algorithm nor passing evidence. Page-control wiring is later work. Recognition-only topics such as BigInt, Symbol, bitwise/shifts, and switch require no implementation here.

## Test your design

Choose concrete inputs for each family: valid values, zero boundaries, decimal price, negative values, blank/whitespace, nonnumeric and other non-finite input, fractional quantity, and discounted/undiscounted paths. Include an omitted-third-argument call and a valid call after a rejection. For the same valid price/quantity, compare false, true, and omitted flags against your documented discount rule.

Write expected results before running. Record actual results honestly, including unresolved failures.

| Input / action | Expected before running | Actual observed | Explanation / repair and retest |
|---|---|---|---|
| Initial stub call | [predict] | [observe] | [explain the unfinished baseline] |
| [your distinct boundary/error case] | [expected result] | [observed result] | [why this case matters] |

## Explain your synthesis in this README

- State the discount rate/rule so another reader can check expected discounted totals.
- Justify branch order, including blank-before-conversion and the difference between integer and nonnegative checks.
- Explain one Boolean condition using its operands, actual operators, and selected path. Explain what the caller receives on success or rejection.
- Show one string-arithmetic bug and its corrected numeric result. Explain dynamic versus static typing with one benefit and one tradeoff of each, connected to that example.
- Explain your changes and how to open Console and run/see the tests.

Source record: starter `comp2-m02-assignment-starter.zip`; earlier own source copied, if any: [URL and baseline commit, or none]; my changes for this task: [explain].

## Publish and submit

1. Put the live **GitHub Pages URL** here: [running page]. Publish the current files and verify the live page uses the latest script. Link any subfolder/page.
2. Commit meaningful working stages with descriptive messages, push, and verify source and README on GitHub. Repository URL: [this assignment's source/README address].
3. In this Canvas assignment, choose **Website URL**, paste **this assignment's GitHub repository URL**, and click Submit Assignment. Keep the separate running Pages URL in README.
4. Reopen submission details and open the saved link. Confirm the repository and README/live links are accessible. A save, push, or deployment does not submit Canvas work.

Keep credentials and personal information out of public repositories. If public publishing is a barrier, arrange instructor access to a private repository before the deadline. Existing late-work/access policies apply. The activity's Text Entry route does not replace this graded assignment.

## Existing 10-point assessment

- Working behavior and appropriate values/state: 4 points.
- Required concept-lab explanations and code organization: 3 points.
- Tests, README/live URL, and iterative commits: 3 points.

## Academic integrity

AI-assisted and AI-generated student content is prohibited. Complete and explain your own work under the existing course policy, consequences, and review process.
