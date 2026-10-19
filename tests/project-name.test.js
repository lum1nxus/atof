import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const extensionRoot = join(repoRoot, "extension");

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

test("extension display name is AtoF", () => {
  const messages = readJson(join(extensionRoot, "_locales/en/messages.json"));
  assert.equal(messages.extName.message, "AtoF");
});

test("package slug is atof", () => {
  assert.equal(readJson(join(repoRoot, "package.json")).name, "atof");
  const lock = readJson(join(repoRoot, "package-lock.json"));
  assert.equal(lock.name, "atof");
  assert.equal(lock.packages[""].name, "atof");
});
