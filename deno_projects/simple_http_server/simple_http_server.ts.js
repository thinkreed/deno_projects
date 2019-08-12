import { serve } from "https://deno.land/std/http/server.ts";
const s = serve("0.0.0.0:8000");
async function main() {
    for await (const req of s) {
        req.respond({ body: new TextEncoder().encode("Hello World\n") });
    }
}
main();
//# sourceMappingURL=simple_http_server.js.map