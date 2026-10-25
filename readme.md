
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
- [x]Return a **number** on success. Calling with `'2.50', '3', false` must return numeric `7.5`.
- [x]Use `const`/`let` according to the class convention, meaningful names, and comments explaining a function, decision, or repair.

Choose your validation branches and discount calculation; the starter intentionally supplies neither a completed algorithm nor passing evidence. Page-control wiring is later work. Recognition-only topics such as BigInt, Symbol, bitwise/shifts, and switch require no implementation here.

## Test your design

Choose concrete inputs for each family: valid values, zero boundaries, decimal price, negative values, blank/whitespace, nonnumeric and other non-finite input, fractional quantity, and discounted/undiscounted paths. Include an omitted-third-argument call and a valid call after a rejection. For the same valid price/quantity, compare false, true, and omitted flags against your documented discount rule.

Write expected results before running. Record actual results honestly, including unresolved failures.

| Input / action | Expected before running | Actual observed | Explanation / repair and retest |

|Testing a 5.25 for a price value and a 15 for quantity| expected =  15 x 5.25 = 78.75| actual = 78.75 | math checks out for decimals|

|Testing a 0 for price with a 20 for quantity| expected 20 x 0 = 0 | actual = 0 | 0 works in place of price |

|Testing a 0 for quantity and a 35 for price| expected 35 x 0 = 0 | actual = 0 | 0 works in place for quantity |

|Testing a -5 for price and a 4 for quantity| expected -5 = Use a finite price.| actual = -20| I've missunderstood what the isFinite removes and need to work a way in to include negatives| Added an 'if' for when the entered value for price is less and 0 to return, 'Enter a valid price'| New actual = 'Enter a valid price'|

|Testing a 3 for price and a 5.25 for quantity| expected 3 x 5.25 = 15.75
| actual = 15.75| fraction values work for quantity.|

|Testing adding a blankspace to the first test values of 5.25 and 15| expecting the same result.| actual = 78.75 | whitespace doesn't affect the result in either quantity or price.|

|Testing adding text in place of a price and a 20 in quantity.| expected = 'Use a finite price.'| actual = 'Use a finite price.' | non-finite input such as text returns an understandable log.|

|Testing a negative quantity in the place of price 5 and quantity -6.|
expected = 'Enter a valid quantity.'| actual = 'Enter a valid quantity.'|
the reject message for negative quantity works as expected.|

|Testing the 15% discount being 'true'| There are 3 logs that return acutal numerical values that this rule would apply to, those being: [2.5 x 3], [5.25 x 15], and [3 x 5.25].| The math comes to an expected log order of = [6.375], [66.9375], and [13.3875].| actual = [6.375],      [66.9375], and [13.3875].| the discount value of 15% works as expected and inteneded.|

## Explain your synthesis in this README

-------------------------------------------------------------------------

- State the discount rate/rule so another reader can check expected discounted totals.

-Discount rate = 15%| ran in the form of 0.15| Using the discount % multiplied by the given price value to find the amount that needs to be taken out of the set price before being applied to the quantity amount|

-------------------------------------------------------------------------

- Justify branch order, including blank-before-conversion and the difference between integer and nonnegative checks.

-The starting two checks make sure there isn't a set blank and if there is it will report back in the call excatly what is wrong.| Having Number() on each of the parameters for the ticket help to make sure the values are numerical.| Then following this is an 'if' to report back if the values are not finite, and this is just to avoid NaN [not a number], negative infinity, and infinity.| An if for price values and an if for quanity being negative are there to avoid negative values being ran| Lastly is the 'if/else' set to run the math to find the value of the ticket to display in the console.log|

-Having to run the console.log before the 'return' to show if the discount is active because 'return' will end the call before console.log could be ran.| Kept it to run first just to keep the math clean and visable| The math for the discount HAS to be in that order or else the discount won't be applied proper|

-------------------------------------------------------------------------

- Explain one Boolean condition using its operands, actual operators, and selected path. Explain what the caller receives on success or rejection.

-The Boolean condition being used in this assignemt is a True/False value assigned to the Boolean itself.| A if/else is ran to check the Boolean condition and 'if Boolean value = true' the discount math fallows, 'else' the normal math runs.| The console.log shows a 'active' 'inactive' before each 'return' to show if the Boolean value is true or false| The 'return' value changes based on if the Boolean value is true or false; regardless there is a return which runs the ticket math to display a value in the console.|

-------------------------------------------------------------------------

- Show one string-arithmetic bug and its corrected numeric result. Explain dynamic versus static typing with one benefit and one tradeoff of each, connected to that example.

-When troubleshooting I didn't cross any bugs, however I was struggling with setting up the order of math to find the discount value. I found what I was doing wrong by setting a console.log to run with information about the 'if/else'. using the '===' and 'Number' in the javascript helps to catch any value or typing issuses by converting string to numerical and having strict equality.| 

-------------------------------------------------------------------------

- Explain your changes and how to open Console and run/see the tests.

-You open the 'Console' through deveopler tools in a browser and you can see the tests through the 'console log'.| To run tests you need to add 'console.logs' and 'return' to show info into the 'console log'.|

-------------------------------------------------------------------------

Source record: starter `comp2-m02-assignment-starter.zip`; earlier own source copied: (https://github.com/NootNova/COMP002-Week2Lesson); my changes for this task: [Added a discount amount to use when discount is true].

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
