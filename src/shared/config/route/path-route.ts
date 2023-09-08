enum path{
    "ADMIN" = "admin",
    "MAIN" = "main",
    "BLOG" = "blog",
    "PROJECT" = "project",
}

export const pathRoute: Record<path, string> = {
    [path.ADMIN]: "/admin",
    [path.MAIN]: "/main",
    [path.BLOG]: "/blog",
    [path.PROJECT]: "/project",

}
