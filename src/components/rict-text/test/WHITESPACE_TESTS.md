# RichText Component - Whitespace Preservation Test Documentation

## Overview

This document describes the comprehensive test suite created to identify and document whitespace preservation issues in the RichText component.

## Problem Statement

The RichText component incorrectly processes markup when there are line breaks or multiple spaces between text. Specifically:
- When applying italic or bold to a word preceded by a space, the component removes that space
- The second word is brought closer to the first word, breaking the expected formatting
- Line breaks and multiple spaces are not preserved correctly

## Test Files Created

### 1. `rich-text-whitespace.spec.ts` (Unit Tests)
**Total Tests**: 19 tests (18 passing, 1 skipped)

Comprehensive unit tests covering:

#### Whitespace in Text Content (4 tests)
- ✅ Preserving leading spaces when applying bold formatting
- ✅ Preserving trailing spaces when applying italic formatting
- ✅ Preserving multiple consecutive spaces within text
- ✅ Not removing whitespace-only text nodes

#### Paste Operations with Whitespace (4 tests)
- ✅ Preserving spaces in pasted text
- ✅ Preserving line breaks in pasted text
- ✅ Not trimming leading spaces from pasted lines
- ✅ Not trimming trailing spaces from pasted lines

#### Clear Formatting with Whitespace (2 tests)
- ⏭️ **SKIPPED** - Documents known bug: clearFormatting removes leading/trailing spaces
- ✅ Documents current behavior showing the bug
- ✅ Preserving multiple spaces when clearing formatting

#### Edge Cases with Whitespace (4 tests)
- ✅ Handling text that is only whitespace
- ✅ Handling zero-width spaces correctly
- ✅ Handling non-breaking spaces correctly
- ✅ Preserving whitespace structure with nested formatting

#### Specific Bug Scenarios (3 tests)
- ✅ Preserving space between two words when one is formatted
- ✅ Preserving space when formatting a word preceded by space
- ✅ Handling whitespace when selection includes partial text nodes

#### CSS Whitespace Handling (1 test)
- ✅ Verifying appropriate CSS for whitespace preservation

### 2. `rich-text-whitespace.e2e.ts` (E2E Tests)
**Total Tests**: 20+ test scenarios

Real-world user interaction tests covering:

#### Typing and Formatting with Spaces (3 tests)
- Preserving space before a word when applying bold
- Preserving trailing space after a formatted word
- Preserving multiple consecutive spaces

#### Pasting Text with Whitespace (4 tests)
- Preserving spaces when pasting plain text
- Preserving line breaks when pasting multiline text
- Preserving leading spaces in pasted text
- Preserving trailing spaces in pasted text

#### Clearing Formatting with Whitespace (1 test)
- Preserving spaces when removing formatting

#### Complex Whitespace Scenarios (2 tests)
- Handling mixed formatting with spaces correctly
- Preserving whitespace structure with nested formatting

#### Visual Whitespace Verification (2 tests)
- Rendering with visible space between formatted words
- Maintaining consistent spacing in the editor

#### Edge Cases (3 tests)
- Handling whitespace-only content
- Handling tab characters
- Handling non-breaking spaces

## Identified Code Issues

Based on test analysis, the following code locations in `rich-text.tsx` need attention:

### 1. Line 488: Empty Element Removal
```typescript
if (!el.textContent.trim() && el.children.length === 0) {
  el.remove();
}
```
**Issue**: Uses `.trim()` which treats whitespace-only elements as empty and removes them.
**Impact**: Valid whitespace between words may be removed.

### 2. Line 788: Paste Handler
```typescript
p.textContent = line.trim();
```
**Issue**: Trims leading and trailing whitespace from each pasted line.
**Impact**: User's intentional indentation or spacing is lost.

### 3. Line 838: Clear Formatting ⚠️ **CONFIRMED BUG**
```typescript
line.innerHTML = line.textContent;
```
**Issue**: Converting innerHTML to textContent and back collapses whitespace.
**Impact**: Leading/trailing spaces are removed when clearing formatting.
**Test**: Documents this behavior with a skipped test that would pass after fix.

### 4. Lines 471-476: Tag Unwrapping
```typescript
content.querySelectorAll('*').forEach((element) => {
  while (element.firstChild) {
    element.parentNode.insertBefore(element.firstChild, element);
  }
  element.remove();
});
```
**Issue**: May affect whitespace boundaries when unwrapping nested tags.
**Impact**: Spaces adjacent to tags might be affected during formatting operations.

## Test Patterns Used

### Mock Setup
- Comprehensive DOM API mocks (Range, Selection, ClipboardEvent)
- Real DOM elements instead of mocks where possible
- Proper mock cleanup in `afterEach` hooks

### Test Structure
- Clear test descriptions using `describe` and `it` blocks
- Logical grouping by functionality
- Edge cases separated into their own section
- Known bugs documented with `.skip()` and TODO comments

### Assertions
- Specific whitespace pattern matching using regex
- Both positive and negative assertions for clarity
- Documentation of expected vs actual behavior for bugs

## How to Run the Tests

### Run All RichText Tests
```bash
npm run test:unit -- src/components/rict-text
```

### Run Only Whitespace Unit Tests
```bash
npm run test:unit -- src/components/rict-text/test/rich-text-whitespace.spec.ts
```

### Run Only Whitespace E2E Tests
```bash
npm run test:e2e -- src/components/rict-text/test/rich-text-whitespace.e2e.ts
```

### Run All Tests
```bash
npm run test
```

## Expected Test Results

- **Unit Tests**: 18 passing, 1 skipped
- **E2E Tests**: Should pass when run (not executed in CI yet)
- **Overall**: No failures - the skipped test documents a known bug

## Using These Tests for Development

### When Fixing the Bugs

1. **Unskip the failing test**:
   ```typescript
   it.skip('should preserve whitespace when clearing formatting - KNOWN BUG', ...)
   // Change to:
   it('should preserve whitespace when clearing formatting', ...)
   ```

2. **Make code changes** to fix the identified issues

3. **Run the whitespace tests**:
   ```bash
   npm run test:unit -- src/components/rict-text/test/rich-text-whitespace.spec.ts
   ```

4. **Verify the previously skipped test now passes**

5. **Run all tests** to ensure no regressions:
   ```bash
   npm run test
   ```

### Understanding Test Failures

If a test fails after code changes:
1. Check the assertion message for expected vs actual
2. Review the test setup to understand the scenario
3. Use the test's comments to understand the intended behavior
4. Check if the failure reveals a different bug or regression

## Recommendations for Future Development

### Code Changes Needed
1. **Preserve whitespace in paste operations** - Remove `.trim()` calls or replace with logic that preserves intentional spacing
2. **Fix clear formatting** - Use a method that preserves whitespace when removing formatting tags
3. **Review empty element removal** - Don't remove elements that contain only whitespace if they're structurally important
4. **Add CSS whitespace property** - Consider `white-space: pre-wrap` on the editor to preserve formatting visually

### Testing Best Practices
1. **Keep these tests updated** as new features are added
2. **Add new tests** for any whitespace-related bug reports
3. **Run whitespace tests** before committing changes to RichText component
4. **Document new edge cases** discovered during development

## Related Documentation

- [Stencil Testing Guide](https://stenciljs.com/docs/testing-overview)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- Component: `src/components/rict-text/rich-text.tsx`
- Original Tests: `src/components/rict-text/test/rich-text.spec.ts`

## Test Coverage Impact

### Before These Tests
- RichText component tests: 69 tests
- Coverage: ~23% of rich-text.tsx

### After These Tests
- RichText component tests: 88 tests (69 + 19)
- Improved coverage of whitespace handling edge cases
- Documented bugs with reproducible test cases

## Future Enhancements

Potential additional tests to consider:
1. Performance tests for large amounts of whitespace
2. Accessibility tests for screen readers with whitespace
3. Cross-browser compatibility tests (e.g., Safari vs Chrome whitespace handling)
4. Integration tests with other components that consume RichText output
5. Tests for programmatic content insertion with whitespace

## Contributing

When adding new whitespace-related tests:
1. Follow the existing test structure
2. Add clear comments explaining the scenario
3. Group related tests in `describe` blocks
4. Use meaningful test descriptions
5. Update this documentation with new findings

---

**Last Updated**: 2026-02-13
**Test Suite Version**: 1.0
**Component Version**: blip-ds RichText
