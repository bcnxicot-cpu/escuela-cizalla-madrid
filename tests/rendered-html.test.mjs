import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("la página contiene los datos esenciales y enlaces funcionales", async () => {
  const html = await readFile(".next/server/app/index.html", "utf8");
  assert.match(html, /Escuela de encuadernación/);
  assert.match(html, /info@escuelacizalla\.es/);
  assert.match(html, /wa\.me\/34629266370/);
  assert.match(html, /mail\.google\.com\/mail/);
  assert.match(html, /Doctor Esquerdo/);
  assert.match(html, /94,50/);
});
