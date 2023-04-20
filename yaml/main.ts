import {
  parse as yamlParser,
  stringify as yamlStringify,
} from "https://deno.land/std@0.184.0/yaml/mod.ts";

const yamlContent = await Deno.readTextFile("test.yaml");

const data = await yamlParser(yamlContent) as Record<string, any>;
console.log("json", data);

console.log("yaml", yamlStringify(data));

console.log("yaml", yamlStringify(data));
