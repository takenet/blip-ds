# Contributing

## Semantic Release Configuration

This project uses semantic-release for automated versioning and publishing. The configuration supports two parallel release branches with different version ranges.

### Branch Configuration

#### Main Branch (v1.x.x)
- **Branch**: `main`
- **Version Range**: `1.x.x`
- **Behavior**: 
  - Breaking changes are **NOT** allowed to trigger major releases
  - All commit types (feat, fix, docs, etc.) will only trigger patch or minor releases
  - `feat:` commits trigger minor releases (1.x.Y -> 1.(x+1).0)
  - All other commits trigger patch releases (1.x.y -> 1.x.(y+1))

#### V2 Branch (v2.x.x) - Release Candidate
- **Branch**: `v2`
- **Version Range**: `2.x.x`
- **Channel**: `pre/rc`
- **Prerelease**: `rc`
- **Behavior**: 
  - Releases **pre-release versions only** with "rc" suffix
  - Breaking changes trigger major pre-releases (2.x.y-rc.z -> (2+1).0.0-rc.1)
  - `feat:` commits trigger minor pre-releases (2.x.y-rc.z -> 2.(x+1).0-rc.1)
  - `fix:` and other commits trigger patch pre-releases (2.x.y-rc.z -> 2.x.(y+1)-rc.1)
  - Versions follow pattern: `2.x.y-rc.z` (e.g., `2.0.0-rc.1`, `2.1.0-rc.2`)
  - Published to npm with `pre/rc` tag (not `latest`)

### Usage

### For main Branch (v1 releases)
```bash
# Make sure you're on main branch
git checkout main

# Make your changes and commit using conventional commits
git commit -m "feat: add new component feature"  # Will trigger 1.x.y -> 1.(x+1).0
git commit -m "fix: resolve styling issue"       # Will trigger 1.x.y -> 1.x.(y+1)

# Even breaking changes won't trigger major releases
git commit -m "feat!: completely change API"    # Will trigger 1.x.y -> 1.(x+1).0 (NOT 2.0.0)

# Push to trigger release
git push origin main
```

#### For v2 Branch (v2 pre-releases)
```bash
# Create and switch to v2 branch (if it doesn't exist)
git checkout -b v2

# Or switch to existing v2 branch
git checkout v2

# Make your changes and commit using conventional commits
git commit -m "feat: add new component feature"  # Will trigger 2.x.y-rc.z -> 2.(x+1).0-rc.1
git commit -m "fix: resolve styling issue"       # Will trigger 2.x.y-rc.z -> 2.x.(y+1)-rc.1
git commit -m "feat!: completely change API"     # Will trigger 2.x.y-rc.z -> (2+1).0.0-rc.1

# Push to trigger pre-release
git push origin v2
```

### Installation

#### Installing Stable Releases (from main branch)
```bash
# Install latest stable v1.x.x release
npm install blip-ds

# Install specific v1.x.x version
npm install blip-ds@1.2.3
```

#### Installing Pre-releases (from v2 branch)
```bash
# Install latest v2 release candidate
npm install blip-ds@pre/rc

# Install specific v2 release candidate
npm install blip-ds@2.0.0-rc.1

# Install latest v2.x.x pre-release (any rc version)
npm install blip-ds@2
```

### Commit Message Format

This project follows [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### Types
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

#### Breaking Changes
To indicate a breaking change, add `!` after the type or add `BREAKING CHANGE:` in the footer:

```bash
feat!: remove deprecated API
# or
feat: add new API

BREAKING CHANGE: removed the old API method
```