import z from "zod";

// 値オブジェクト
export const Cash = z.union([
    z.literal(10),
    z.literal(50),
    z.literal(100),
    z.literal(500),
    z.literal(1000),
]).brand<"Cash">();
export type Cash = z.infer<typeof Cash>;
