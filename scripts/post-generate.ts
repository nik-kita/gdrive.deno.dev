import { walk } from "@std/fs";
import { join } from "@std/path";

const path_to_gql_generated_types = join(Deno.cwd(), "__gql__");

for await (
  const dirEntry of walk(path_to_gql_generated_types, { exts: ["ts"] })
) {
  if (dirEntry.isFile) {
    console.log(dirEntry.name);
    const content = await Deno.readTextFile(dirEntry.path);
    const content_with_refactored_import_extensions = content
      .split("\n")
      .map((line) => {
        // TODO: dangerous regex... at least the case for multiline import is missing!
        if (
          /^(import|export) [_\w\{\}\* ]* from ['"]\.{1,2}\/?[_-\w\./]*['"];?$/
            .test(line)
        ) {
          let last_quote_index = line.lastIndexOf("'");

          if (last_quote_index === -1) {
            last_quote_index = line.lastIndexOf('"');
            // deno-lint-ignore no-dupe-else-if
          } else if (last_quote_index === -1) {
            throw new Error(
              `POST-GENERATE-ERROR: unable to parse last index of quote for import line (${line})`,
            );
          }

          if (
            line.slice(last_quote_index - ".ts".length, last_quote_index) ===
              ".ts"
          ) {
            return line;
          }

          return line.slice(0, last_quote_index) + ".ts" +
            line.slice(last_quote_index);
        }

        return line;
      })
      .join("\n");
    await Deno.writeTextFile(
      dirEntry.path,
      content_with_refactored_import_extensions,
    );
  }
}
