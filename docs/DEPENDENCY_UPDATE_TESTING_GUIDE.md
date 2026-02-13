# Dependency Update Testing Guide

This guide provides comprehensive testing procedures for validating dependency updates in the blip-ds project, with focus on maintaining test reliability and preventing regressions.

## Quick Reference

**Before any update:** Run `npm run test` to establish baseline  
**After safe updates:** Run `npm run test:unit` (2-3 min)  
**After breaking updates:** Run full test suite + manual validation (30-60 min)

---

## Pre-Update Checklist

### 1. Document Current State
```bash
npm list --depth=0 > /tmp/packages-before.txt
npm audit > /tmp/audit-before.txt
npm run test 2>&1 | tee /tmp/tests-before.txt
```

### 2. Run Baseline Tests
```bash
npm run test:unit  # Should pass: 102 suites, 2518+ tests
npm run test:e2e   # Should pass: All E2E tests
```

---

## Testing Levels

### Level 1: Quick Validation (All Updates)
**Time: 2-3 minutes**

```bash
npm install          # ✅ Completes without errors
npm run build        # ✅ dist/ created, no compilation errors
npm run test:unit    # ✅ All tests pass
```

### Level 2: Component Testing (Stencil/Testing Updates)
**Time: 10-15 minutes**

```bash
npm run test:unit -- --verbose
npm run test:e2e -- src/components/button/test/button.e2e.ts
npm run test:e2e
npm run dev  # ✅ Storybook starts on port 6006
```

Manual Storybook checks:
- bds-button: All variants render, clicks work
- bds-input: Text input, validation works
- bds-select: Dropdown, keyboard navigation
- bds-datepicker: Calendar, date selection

### Level 3: Full Integration (Major Updates)  
**Time: 30-60 minutes**

```bash
npm run clear
npm install
npm run build
npm run build:react
npm run storybook:build
```

Verify outputs:
- ✅ dist/blip-ds/blip-ds.js
- ✅ loader/ directory
- ✅ blip-ds-react/dist/
- ✅ Type definitions (.d.ts)

---

## Common Issues

### Puppeteer Version Conflicts
```bash
# Stencil 2.x requires Puppeteer <= 20
npm install puppeteer@^14.0.0 --save-dev
rm -rf ~/.cache/puppeteer
```

### Storybook Build Fails
```bash
rm -rf node_modules/.cache/storybook
npm install
```

### TypeScript Errors
```bash
npm install typescript@4.7.2 --save-dev
rm -rf dist/ www/ .stencil/
npm run build
```

---

## Rollback Procedure

```bash
git checkout HEAD -- package.json package-lock.json
rm -rf node_modules
npm install
npm run test:unit  # Verify baseline restored
```

---

## Update Process

### Safe Updates
```bash
npm audit fix --dry-run  # Preview changes
npm audit fix            # Apply
git diff package*.json   # Review
npm run test:unit        # Validate
```

### Breaking Updates
```bash
npm info package-name versions
npm install package-name@latest --save-dev
npm run test  # Full validation required
```

---

## Testing Checklist Template

```markdown
## Update: [Package] v[Old] → v[New]

### Pre-Update
- [ ] Baseline tests pass
- [ ] Branch created

### Validation
- [ ] npm install succeeds
- [ ] npm run build succeeds  
- [ ] Unit tests pass (102+ suites)
- [ ] E2E tests pass
- [ ] Storybook starts
- [ ] Manual testing (5+ components)

### Sign-off
- Tested by: [Name]
- Date: [Date]
- Approved: [ ] Yes
```

---

**See also:** [SECURITY_AUDIT_REPORT.md](../SECURITY_AUDIT_REPORT.md) for vulnerability details

**Last Updated:** 2026-02-13
