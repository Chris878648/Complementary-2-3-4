import test from "node:test";
import assert from "node:assert/strict";
import request from "supertest";
import app from "../src/app.js";

test("GET / returns hello", async () => {
  const res = await request(app).get("/");
  assert.equal(res.status, 200);
  assert.equal(res.text, "Hello World from my API");
});

test("GET /health returns ok", async () => {
  const res = await request(app).get("/health");
  assert.equal(res.status, 200);
  assert.equal(res.body.status, "ok");
});