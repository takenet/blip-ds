const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

for (const directory of ['.', 'blip-ds-react']) {
  test(`${directory} releases chores as patches without changing feature or breaking releases`, async () => {
    const cwd = path.resolve(__dirname, '../..', directory);
    const { release } = JSON.parse(fs.readFileSync(path.join(cwd, 'package.json'), 'utf8'));
    const [plugin, options] = release.plugins[0];
    assert.equal(plugin, '@semantic-release/commit-analyzer');
    assert.deepEqual(release.plugins.slice(1), [
      '@semantic-release/release-notes-generator',
      '@semantic-release/npm',
      '@semantic-release/github',
    ]);
    const { analyzeCommits } = await import('@semantic-release/commit-analyzer');
    const cases = [
      ['chore: update GitHub Actions', 'patch'],
      ['chore(deps): update dependencies', 'patch'],
      ['fix: repair component rendering', 'patch'],
      ['perf: reduce bundle size', 'patch'],
      ['feat: add a component', 'minor'],
      ['chore: remove deprecated support\n\nBREAKING CHANGE: Node 18 is no longer supported', 'major'],
      ['feat: replace component API\n\nBREAKING CHANGE: previous properties are removed', 'major'],
      ['docs: clarify installation', null],
      ['test: improve component coverage', null],
      ['ci: adjust workflow configuration', null],
    ];
    for (const [message, expected] of cases) {
      const actual = await analyzeCommits(options, {
        cwd,
        commits: [{ message }],
        logger: { log() {} },
      });
      assert.equal(actual, expected, message);
    }
    const mixed = await analyzeCommits(options, {
      cwd,
      commits: [{ message: 'chore: update tooling' }, { message: 'feat: add a component' }],
      logger: { log() {} },
    });
    assert.equal(mixed, 'minor');
  });
}